'use client';

import { useRouter } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const handlePost = () => {
    router.push('/');
    // router.replace('/'); // ukan agar abbrundebs

    // router.back() // abrunebs ukan
  };

  return (
    <div>
      <h1></h1>
      {children}
      <button onClick={handlePost}>post was add</button>
    </div>
  );
}
