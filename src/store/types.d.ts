import { type ResultSlice } from "./result/result-slice";
import { type QuestionSlice } from "./question/question-slice";
import { type QuizSlice } from "./quiz/quiz-slice";
import { type DesignStyleSlice } from "./design-style/design-style-slice";
import { type LayoutSlice } from "./layout/layout-slice";
import { type ResourcePickerSlice } from "./resource-picker/resource-picker-slice";
import { type RouteSlice } from "./route/route-slice";
import { type ShopSlice } from "./shop/shop-slice";
import { type SubmissionSlice } from "./submission/submission-slice";
import { type QuizNavigationSlice } from "./quiz-navigation/quiz-navigation-slice";
import { type StateCreator } from "zustand";
import { type MediaQuerySlice } from "./media-query-slice/media-query-slice";
import { type CustomJSSlice } from "./custom-js/custom-js-slice";
import { type CartSlice } from "./cart/cartSlice";
import { type ProductSlice } from "./product/productSlice";

export type MarketStore = LayoutSlice & ProductSlice & CartSlice;

export type ImmerStateCreator<T> = StateCreator<
  MarketStore,
  [["zustand/immer", never], never],
  [],
  T
>;
