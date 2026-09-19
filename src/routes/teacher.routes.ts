import { IRoutes } from "@/type/route.type";

const path = '/dashboard/teacher';

export const teacherRoutes:IRoutes = {
  navMain: [
    {
      title: 'Over-View',
      url: path,
      items: [
        {
          title: 'Approve-Teacher',
          url: `${path}/My-class`,
        },
      ],
    },
  ],
};
