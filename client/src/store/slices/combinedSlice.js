import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // array of objects
  homeObject:[{
    input: "",
    output: "",
    targetPromt: ""
  }],
  documentObject: [{
    input: "",
    output: "",
    targetPromt: ""
  }],
  processObject: [{
    input: "",
    output: "",
    targetPromt: ""
  }],
  feesObject: [{
    input: "",
    output: "",
    targetPromt: ""
  }],
  handbookObject: [{
    input: "",
    output: "",
    targetPromt: ""
  }],
  loading: false,
  selectOption: "",
  languageOption: "English",
  feedback: [{
    input: "",
    output: "",
    targetPromt: ""
  }],
  error: false
};

const combinedSlice = createSlice({
  name: "combined",
  initialState,
  reducers: {
    setHomeObject(state, action) {
      // result is an object, state.homeObject is an array
      const result = action.payload;
      state.homeObject.push(result);
    },
    setDocumentObject(state, action) {
      const result = action.payload;
      state.documentObject.push(result);
    },
    setProcessObject(state, action) {
      const result = action.payload;
      state.processObject.push(result);
    },
    setFeesObject(state, action) {
      const result = action.payload;
      state.feesObject.push(result);
    },
    setHandbookObject(state, action) {
      const result = action.payload;
      state.handbookObject.push(result);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setSelectOption(state, action) {
      state.selectOption = action.payload;
    },
    setLanguageOption(state, action) {
      state.languageOption = action.payload;
    },
    setFeedback(state, action) {
      const result = action.payload;
      state.feedback.push(result);
    },
    setError(state, action) {
      state.error = action.payload;
    }
  }
});

export const {
  setHomeObject,
  setDocumentObject,
  setProcessObject,
  setFeesObject,
  setHandbookObject,
  setLoading,
  setSelectOption,
  setLanguageOption,
  setFeedback,
  setError
} = combinedSlice.actions;

export const combinedReducer = combinedSlice.reducer;