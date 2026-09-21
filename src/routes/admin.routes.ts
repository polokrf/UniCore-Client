import { IRoutes } from "@/type/route.type";

const adminPath = '/dashboard/admin'

export const adminRoutes:IRoutes = {
  navMain: [
    {
      title: 'Over-View',
      url: adminPath,
      items: [
        {
          title: 'Manage-Users',
          url: `${adminPath}/users`,
        },
        {
          title: 'Approve-Teacher',
          url: `${adminPath}/approved-teacher`,
        },
        {
          title: 'Approve-Student',
          url: `${adminPath}/approved-student`,
        },
        {
          title: 'Create-Department',
          url: `${adminPath}/create-department`,
        },
        {
          title: 'Create-Course',
          url: `${adminPath}/create-course`,
        },
        {
          title: 'Create-CourseOffering',
          url: `${adminPath}/create-course-offering`,
        },
        {
          title: 'Create-Semester',
          url: `${adminPath}/create-semester`,
        },
        {
          title: 'All-Enrollments',
          url: `${adminPath}/enrollments`,
        },
        {
          title: 'Class-Routine',
          url: `${adminPath}/create-class-routine`,
        },
        {
          title: 'All-Results',
          url: `${adminPath}/results`,
        },
      ],
    },
  ],
};