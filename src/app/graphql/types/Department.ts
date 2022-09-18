import { objectType, extendType } from "nexus";

export const Department = objectType({
  name: "Department",
  definition(t) {
    t.nonNull.string("id", { description: "ID of the Division" });
    t.nonNull.string("departmentName", {
      description: "Name of the Department",
    });
    t.nonNull.date("createdAt", { description: "Created Date" });
  },
});

export const DepartmentQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("departments", {
      type: "Department",
      description: "Get all Departments details",
      resolve(_parent, _args, { prisma }) {
        return prisma.department.findMany();
      },
    });
  },
});
