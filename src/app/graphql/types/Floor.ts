import { objectType, extendType } from "nexus";

export const Floor = objectType({
  name: "Floor",
  definition(t) {
    t.nonNull.string("id", { description: "ID of the Floor" });
    t.nonNull.int("floorNo", { description: "Floor Number" });
    t.nonNull.date("createdAt", { description: "Created Date" });
    t.field("building", {
      type: "Building",
      description: "Building details",
      async resolve(parent, _args, { prisma }) {
        return await prisma.floor
          .findUnique({
            where: { id: parent.id },
          })
          .Building();
      },
    });
  },
});

export const FloorQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("floors", {
      type: "Floor",
      description: "Get all Floors details",
      resolve(_parent, _args, { prisma }) {
        return prisma.floor.findMany();
      },
    });
  },
});
