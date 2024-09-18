import RegisterForTournaments from "@/components/MainPages/RegisterForTournaments/RegisterForTournaments";
import React from "react";

const page = async ({ params }: { params: { tournamentId: string } }) => {
  return <RegisterForTournaments tournamentId={params} />;
};

export default page;
