import RegisterForTournaments from "@/components/MainPages/RegisterForTournaments/RegisterForTournaments";
import { CURRENT_APP_URL } from "@/Server/AxiosConfig";
import React from "react";

const page = async ({ params }: { params: { params: any } }) => {
  return <RegisterForTournaments allParams={params} currentHost={CURRENT_APP_URL || ""} />;
};

export default page;
