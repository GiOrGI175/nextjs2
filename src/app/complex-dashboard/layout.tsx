'use client';

export default function ComplexDashBoardlayout({
  children,
  admin,
  users,
  notification,
}: {
  children: React.ReactNode;
  admin: React.ReactNode;
  users: React.ReactNode;
  notification: React.ReactNode;
}) {
  return (
    <div>
      <h1></h1>
      <div>{children}</div>
      <div>{admin}</div>
      <div>{users}</div>
      <div>{notification}</div>
    </div>
  );
}
