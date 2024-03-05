import TabsContainer from "@/components/create-invoice/TabsContainer";
import EditContainer from "@/components/edit-invoice/EditContainer";
import ElementsContainer from "@/components/edit-invoice/ElementsContainer";
import InvoiceContainer from "@/components/shared/InvoiceContainer";
import React from "react";

const EditInvoicePage = () => {
  return (
    <div className="  flex-grow w-full px-6 py-8 ">
      <h1 className=" text-3xl font-light text-color--4C4D4F">Invoice</h1>
      <h3 className=" mt-2  text-color--4C4D4F opacity-85 text-lg">
        Create a invoice for your patients
      </h3>
      <div className="flex flex-col tablet:flex-row gap-6 mt-8 w-full max-sm:mt-2   ">
        {/* <TabsContainer /> */}
        <EditContainer />
        <ElementsContainer />
      </div>
    </div>
  );
};

export default EditInvoicePage;
