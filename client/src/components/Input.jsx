import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { setDocumentObject, setFeesObject, setHandbookObject, setHomeObject, setProcessObject, setLoading, setSelectOption, setFeedback,setError} from '../store/slices/combinedSlice';

function Input({placeholder, target}) {
  const [userInput, setUserInput] = useState("");
  const [err, setErr] = useState({});

  const { selectOption, languageOption } = useSelector(
    (state) => state.combinedReducer
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserInput(e.target.value);
  }
  
  const handleSubmit = async (e) => {
    let data;
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      console.log(target);
      const res = await fetch(`/api/post?targetPromt=${target}`, {
        // Sending target as query param
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( {userInput, languageOption } ),
      });
      setUserInput("");
      dispatch(setSelectOption(""));
      dispatch(setLoading(false));
      if (!res.err) {
        data = await res.json();
        dispatch(setError(false));
      }
      else {
        dispatch(setError(true));
      }
      // console.log(data);
      if (target == "Home") {
        dispatch(
          setHomeObject({ input: userInput, output: data, targetPromt: "" })
        );
      }
      if (target == "Process") {
        dispatch(
          setProcessObject({
            input: userInput,
            output: data,
            targetPromt: "Process",
          })
        );
        }
        if (target == "Documents") {
          dispatch(
          setDocumentObject({
            input: userInput,
            output: data,
            targetPromt: "Documents",
          })
        );
      }
      if (target == "Fees") {
        dispatch(
          setFeesObject({ input: userInput, output: data, targetPromt: "Fees" })
        );
      }
      if (target == "Handbook") {
        dispatch(
          setHandbookObject({
            input: userInput,
            output: data,
            targetPromt: "Handbook",
          })
        );
      }
      if (target == "Feedback") {
        dispatch(
          setFeedback({
            input: userInput,
            output: data,
            targetPromt: "Feedback",
          })
        );
      }
    } catch (err) {
      console.log("Please try after a few seconds. ");
    }
  };

  useEffect(() => {
    if (selectOption) {
      setUserInput(selectOption);
    }
  }, [selectOption]);

  return (
    <div className="fixed bottom-0 flex justify-center w-full bg-blue-100 h-[120px] items-center pb-5">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder={placeholder}
          className="w-[280px] py-2 lg:px-5 px-2 md:px-3.5 text-[16.5px] border-blue-500 border-solid border-[3.5px] md:text-lg lg:text-xl outline-none md:w-[600px] lg:w-[800px] h-[60px] text-blue-600 rounded-l-3xl"
          onChange={handleChange}
          value={userInput ? userInput : selectOption}
        />
        <button
          type="submit"
          className="lg:px-4 md:text-[18px] px:5 md:px-3 lg:max-w-[100px] md:max-w-[80px] text-white bg-blue-500 max-w-[90px] text-[16px] lg:text-[20px] w-full hover:opacity-90 rounded-r-3xl"
        >
          <span className="active:scale-90 duration-200 w-full h-full flex justify-center items-center">
            Submit
          </span>
        </button>
      </form>
    </div>
  );
}

export default Input
