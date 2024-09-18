import UserCategoryTournaments from "@/components/MainPages/TournamentByUserCategory/TournamentByUserCategory";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import React from "react";
import { getTournamentByCategory } from "@/Server/Tournament/getTournamentsByCategory";

const TournamentCategory = async ({
  params,
}: {
  params: { category: string };
}) => {
  const TournamentCategory: ITournament | null = await getTournamentByCategory(
    params.category
  );

  if (!TournamentCategory) {
    return (
      <div className="bg-white p-4 text-black">
        LAURA NO ESTA, LAURA SE FUE :/
      </div>
    );
  }

  return (
    <div className="w-[90%] md:w-3/4 mx-auto p-4 justify-center items-center">
      <UserCategoryTournaments category={TournamentCategory.category.name} />
    </div>
  );
};

export default TournamentCategory;
