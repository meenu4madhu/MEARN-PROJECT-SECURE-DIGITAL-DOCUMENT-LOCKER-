import { motion } from "framer-motion";



const StorageCard = ({ used = 0, total = 1 }) => {
  const percentage = Math.min(
    100,
    Math.round((used / total) * 100)
  );

  const strokeWidth = 12;
  const radius = 60;
  const adjustedRadius = radius - strokeWidth / 2;

  const circumference = 2 * Math.PI * adjustedRadius;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  const gradientId = `storage-gradient-${percentage}`;

  return (
    <div className="bg-gradient-to-br from-pink-700 via-pink-900 to-violet-700 rounded-2xl p-6 w-[860px] h-[600px] shadow-xl flex flex-col items-center justify-center">
      <p className="text-violet-200 text-2xl font-semibold mb-6">
        Total Storage
      </p>

      <div className="relative w-48 h-48">
        <svg
          width="192"
          height="192"
          viewBox="0 0 160 160"
          className="-rotate-90"
        >
          <circle
            cx="80"
            cy="80"
            r={adjustedRadius}
            stroke="#c4b5fd"
            strokeWidth={strokeWidth}
            fill="none"
          />

          <motion.circle
            cx="80"
            cy="80"
            r={adjustedRadius}
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />

          <defs>
            <linearGradient id={gradientId}>
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mt-6 text-center">
        <p className="text-white text-3xl font-semibold">
          {used.toFixed(4)} GB
        </p>

        <p className="text-blue-300 text-lg">
          {percentage}% used
        </p>

        <p className="mt-3 text-white text-6xl font-bold">
          {total} GB
        </p>

        <p className="text-blue-300 text-lg">
          Total storage
        </p>
      </div>
    </div>
  );
};

export default StorageCard;
