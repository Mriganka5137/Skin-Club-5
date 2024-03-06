import React from "react";
import PaymentSteps from "./PaymentSteps";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import PaymentMethods from "./PaymentMethods";
import PaymentDetails from "./PaymentDetails";
import PaymentConfirmation from "./PaymentConfirmation";

const PaymentContainer = () => {
  return (
    <div className=" w-full bg-white xl:w-[800px]  px-4 py-6 rounded-lg space-y-6">
      <PaymentSteps />
      <PaymentMethods />
      <PaymentDetails />
      <PaymentConfirmation />
    </div>
  );
};

export default PaymentContainer;
