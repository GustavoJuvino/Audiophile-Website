import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MainSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#FF69B4" highlightColor="#FFFFF">
        <p>
            <Skeleton count={3} />
        </p>
    </SkeletonTheme>
  )
}

export default MainSkeleton