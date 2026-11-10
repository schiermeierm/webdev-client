"use client";

import Link from "next/link";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileForm from "./profile/ProfileForm";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";
import ContextExamples from "./context/ContextExamples";
import ZustandExamples from "./zustand/ZustandExamples";
import ReduxExamples from "./redux/ReduxExamples";
import Effect from "./Effect";
import "@/app/labs/lab2/tailwind/utilities.css";

export default function Lab4() {
  const sayHello = (message: string) => {
    alert(message);
  };
  // TODO (On your own): a second function that alerts your name, passed to PassingFunctions
  // With AI
  const sampleFromParent = () => {
    alert("Sample from parent");
  };
  return (
    <div id="wd-lab4" className="flex flex-col gap-4 p-2">
      <h2>Lab 4</h2>
      <p className="flex flex-wrap gap-3">
        <Link href="/labs/lab4/url-encoding/query-params?a=5&b=10" id="wd-lab4-query-link" className="text-blue-600">
          Query params: 5 + 10
        </Link>
        <Link href="/labs/lab4/url-encoding/path-params/5/10" id="wd-lab4-path-link" className="text-blue-600">
          Path params: 5 + 10
        </Link>
        <Link href="/labs/lab4/hooks" id="wd-lab4-hooks-link" className="text-blue-600">
          Custom hooks
        </Link>
        <Link href="/labs/lab4/profile-form" id="wd-lab4-profile-form-link" className="text-blue-600">
          Profile forms side by side
        </Link>
      </p>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions
        message="Hello from Lab 4"
        theFunction={sayHello}
        theOtherFunction={sampleFromParent}
      />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ProfileForm />
      <ParentStateComponent />
      <PropDrilling />
      <UrlEncoding />
      <ContextExamples />
      <ZustandExamples />
      <ReduxExamples />
      <Effect />
    </div>
  );
}
