import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { HiOutlineCamera } from "react-icons/hi2";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const PaymentDetails = () => {
  return (
    <div className="space-y-2 mobile:space-y-4 tablet:space-y-6">
      <h3 className="text-[10px] mobile:text-[16px] text-color--4C4D4F">
        Payment Details
      </h3>
      {/* Name, Number */}
      <div className=" flex flex-col tablet:flex-row w-1/2 tablet:w-full mt-2 gap-2">
        <Label htmlFor="name" className="space-y-1 w-full">
          <span className="payment-text">Enter Name on Card</span>
          <div className="h-6 w-full rounded-md flex items-center justify-between border p-1 mobile:h-11  mobile:px-3">
            <Input
              type="text"
              id="name"
              className="bg-transparent border-none focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0 h-full text-color--4C4D4F text-opacity-50 text-[10px] mobile:text-[20px]  font-light"
            />

            <HiOutlineCamera className="size-3 mobile:size-5" />
          </div>
        </Label>
        <Label htmlFor="number" className="space-y-1 w-full">
          <span className="payment-text"> Card Number</span>
          <div className="h-6 w-full rounded-md flex items-center justify-between border p-1 mobile:h-11  mobile:px-3">
            <Input
              type="number"
              id="number"
              className="bg-transparent border-none focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0 h-full text-color--4C4D4F text-opacity-50 text-[10px] mobile:text-[20px]  font-light"
            />

            <HiOutlineCamera className="size-3 mobile:size-5" />
          </div>
        </Label>
      </div>

      <div className="w-full flex justify-start gap-2 ">
        <Label htmlFor="name" className="space-y-1 w-1/2">
          <span className="payment-text">Expiry (MM/YY)</span>
          <div className="h-6 rounded-md flex items-center justify-between border p-1 mobile:h-11  mobile:px-3  flex-shrink w-full">
            <Input
              type="text"
              id="name"
              className="bg-transparent border-none focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0 h-full text-color--4C4D4F text-opacity-50 text-[10px] mobile:text-[20px] font-light "
            />

            <HiOutlineCamera className="size-3 mobile:size-5" />
          </div>
        </Label>
        <Label htmlFor="number" className="space-y-1 w-1/2 ">
          <span className="payment-text"> CVV Code</span>
          <div className="h-6 rounded-md flex items-center justify-between border p-1 mobile:h-11  mobile:px-3 w-full flex-shrink ">
            <Input
              type="number"
              id="number"
              className="bg-transparent border-none focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0 h-full text-color--4C4D4F text-opacity-50 text-[10px] mobile:text-[20px]  font-light"
            />
          </div>
        </Label>
      </div>
      <div className=" tablet:hidden">
        <Label className="text-black opacity-50 max-sm:text-[8px]">
          Signature
        </Label>
        <div className="h-[56px] bg-white mobile:h-[108px] border w-1/2 rounded-lg flex items-end pb-2.5 justify-center">
          <Separator className="w-[90%] bg-black bg-opacity-100" />
        </div>
      </div>
      <div className=" mt-4 mobile:mt-8 tablet:mt-10">
        <p className="w-1/2 text-[8px] mobile:text-[14px] tablet:w-full">
          By Clicking on ‘Confirm Payment’ I agree with the terms and conditions
          of the Company.
        </p>
        <div className="flex gap-2 mt-2.5 mobile:mt-5 tablet:mt-4">
          <Button
            variant="outline"
            className="rounded-full text-[8px] mobile:text-[14px] h-7 w-[106px] mobile:h-12 mobile:w-[200px] "
          >
            Save
          </Button>
          <Button
            variant="default"
            className="rounded-full text-[8px] mobile:text-[14px] h-7 w-[106px] mobile:h-12 mobile:w-[200px]  "
          >
            Confirm Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
