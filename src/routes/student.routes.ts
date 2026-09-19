import { IRoutes } from "@/type/route.type";

const path = '/dashboard/student';

export const studentRoutes:IRoutes = {
  navMain: [
    {
      title: 'Over-View',
      url:path,
      items: [
        {
          title: 'Approve-Teacher',
          url: `${path}/My-department`,
        }
      ],
    },
  ],
};
