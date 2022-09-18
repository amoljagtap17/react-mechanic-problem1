import { objectType, extendType, asNexusMethod } from "nexus";
import { DateTimeResolver } from "graphql-scalars";

export const GQLDate = asNexusMethod(DateTimeResolver, "date");

export const Building = objectType({
  name: "Building",
  definition(t) {
    t.nonNull.string("id", { description: "ID of the Building" });
    t.nonNull.string("buildingName", { description: "Name of the Building" });
    t.nonNull.date("createdAt", { description: "Created Date" });
  },
});

export const BuildingQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("buildings", {
      type: "Building",
      resolve(_parent, _args, { prisma }) {
        return prisma.building.findMany();
      },
    });
  },
});
