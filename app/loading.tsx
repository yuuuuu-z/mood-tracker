// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-white dark:bg-gray-900">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}
