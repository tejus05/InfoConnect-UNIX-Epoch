import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import OpenAI from 'openai';
import NodeCache from 'node-cache';

const cache = new NodeCache();

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const app = express();

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.use(express.json());

let server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

async function generatePrompt(userInput, target, languageOption) {

  const cacheKey = `${userInput}_${target}_${languageOption}`;

  const cachedResponse = cache.get(cacheKey);
  if (cachedResponse) {
    console.log('Data retrieved from cache');
    return cachedResponse; // Return cached response
  }

  try {
    let systemPrompt = '';
    switch (target) {
      case 'Home':
        systemPrompt = 'Welcome users to our website and highlight how we simplify government processes and the range of services we offer.';
        break;
      case 'Process':
        systemPrompt = "Provide a detailed, step-by-step guide for a specified service, ensuring it's task - specific and easily understandable.";
        break;
      case 'Documents':
        systemPrompt = 'Generate a clear checklist of required documents for a specific service to assist users.';
        break;
      case 'Fees':
        systemPrompt = 'Create a structured fee table for a particular service to illustrate the fee structure.';
        break;
      case 'Handbook':
        systemPrompt = 'Compose a comprehensive handbook for a service, including process steps, document checklist, and fee structure in a user-friendly format.';
        break;
      case 'Feedback':
        systemPrompt = 'Encourage users to share their experiences and provide feedback. Acknowledge and thank them for their valuable input.';
        break;
    }
  
    console.log(target,systemPrompt);
  
    function convertURLsToLinksAndNewlines(text) {
      const urlRegex = /(https?:\/\/[^\s)]+)/g;
      const replacedText = text.replace(urlRegex, '<a href="$1" target="_blank" style="color: blue; font-size: 0.8em;">$1</a>');
      const textWithNewlines = replacedText.replace(/\n/g, '<br/>');
      return textWithNewlines;
    }
    let language = '';
    if (languageOption) {
      language = languageOption;
    }
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: `You are a helpful assistant in a website named InfoConnect that simplifies the jargon-filled government processes to users. You are supposed to answer in an extreme user-friendly format. Remember to answer in an Indian context. Provide the link to the official website when required. Answer concisely and upto the point. ${systemPrompt}. ${language && `You are supposed to translate the answer entirely to ${language}. Do not include any language other than ${language}.}`}`,
          },
          {
            role: 'user',
            content: userInput,
          },
        ],
        model: 'gpt-3.5-turbo',
      });
  
    const response = convertURLsToLinksAndNewlines(completion.choices[0].message.content); 

    cache.set(cacheKey, response, 3600);// Store the response in the cache with a TTL of 60 seconds

    return response;
  }
  catch (err) {
    return {
      error: "Please try again after a few seconds."
    }; 
  }
}

app.post('/api/post', async (req, res) => {
  try {
    const { userInput, languageOption } = req.body;
    const targetPromt = req.query.targetPromt;
    console.log(userInput, targetPromt, languageOption);

    const cacheKey = `${userInput}_${targetPromt}_${languageOption}`; // Check if the response for the given key exists in the cache
    const cachedResponse = cache.get(cacheKey);
    if (cachedResponse) {
      console.log('Data retrieved from cache');
      res.status(200).json(cachedResponse); // Return cached response
      return;
    }
    
    const output = await generatePrompt(userInput, targetPromt, languageOption);
    if(output.error) {
      res.status(500).json(output.error);
    }
    else {
      res.status(200).json(output); // Sending the HTML response as-is
    }
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).send('An error occurred. Please try again.'); // Sending a 500 Internal Server Error response
  }
});

setInterval(() => {
  server.close(() => {
    console.log('Server has been disconnected');
  });
  server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}, 10000);