// import Navigation from "@/components/layout/Navigation";

// export default function Home() {
//   return (
//     <div className="min-h-screen">
//       <Navigation />
//       {/* <Hero />
//       <Features />
//       <Pricing />
//       <Footer /> */}
//     </div>
//   );
// }

import { redirect } from 'next/navigation';

export default function Home() {
  // Since you don't need landing page, redirect to dashboard
  redirect('/home');
}
