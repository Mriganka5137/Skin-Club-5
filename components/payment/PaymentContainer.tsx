import PaymentConfirmation from "./PaymentConfirmation";
import PaymentDetails from "./PaymentDetails";
import PaymentMethods from "./PaymentMethods";
import PaymentSteps from "./PaymentSteps";

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
