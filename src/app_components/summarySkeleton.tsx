import { Skeleton } from "@/components/ui/skeleton"

export function SummarySkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="space-y-2">
        <Skeleton className="h-4 bg-[#E0E3FF] w-[400px]" />
        <Skeleton className="h-4 bg-[#E0E3FF] w-[350px]" />
        <Skeleton className="h-4 bg-[#E0E3FF] w-[300px]" />
        <Skeleton className="h-4 bg-[#E0E3FF] w-[250px]" />
        <Skeleton className="h-4 bg-[#E0E3FF] w-[200px]" />
      </div>
    </div>
  )
}
