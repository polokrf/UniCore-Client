import { IRoutes } from "@/type/route.type";

const adminPath = '/dashboard/admin'

export const adminRoutes:IRoutes = {
  navMain: [
    {
      title: 'Over-View',
      url: adminPath,
      items: [
        {
          title: 'Approve-Teacher',
          url: `${adminPath}/approve-teacher`,
        },
        {
          title: 'Approve-Student',
          url: `${adminPath}/approve-teacher`,
        },
      ],
    },
  ],
};