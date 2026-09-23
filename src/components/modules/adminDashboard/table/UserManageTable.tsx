'use client'

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TablePagination } from '@/components/ui/TablePagination';
import { useGetUsers } from '@/hooks/admin.access.hooks';
import { TUserGet, TUserQuery } from '@/type/admin.access.type';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';


interface Props extends TUserQuery {
  handleChangPage: Dispatch<SetStateAction<number>>;
}



export function UserManageTable({
  handleChangPage,
  ...queryParams
}: Props){
  // console.log(queryParams ,'query paramas')
  const { data } = useGetUsers(queryParams);

  const users = data.data.data || [];

  const meta = data.data.meta;

  return (
    <>
      <div className="mb-3">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Avatar</TableHead>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                  <div>
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt="User avatar"
                        width={40}
                        height={40}
                        className=" w-[40px] h-[40px] rounded-full shadow-sm"
                      />
                    ) : (
                      <span className=" w-[40px] h-[40px] rounded-full shadow-sm">
                        {' '}
                        {user.firstName.charAt(0)}
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell className="font-medium">{user.firstName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.isActive ? 'Active' : 'Blocked'}</TableCell>
                <TableCell className="text-right">
                  {user.isActive ? (
                    <Button>Blocked</Button>
                  ) : (
                    <Button>Action</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* pagination */}
      <div>
        <TablePagination
          totalPage={meta.totalPage as number}
          page={Number(queryParams.page)}
          handlePageChange={handleChangPage}
        />
      </div>
    </>
  );
}
