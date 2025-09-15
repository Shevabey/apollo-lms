import Navigation from '@/components/layout/Navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-16">{children}</main>
    </div>
  );
}
