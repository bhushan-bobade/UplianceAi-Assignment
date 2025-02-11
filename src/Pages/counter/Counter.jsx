import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa"
import { GrPowerReset } from "react-icons/gr"
import { Button } from "@nextui-org/react"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js"
import "tailwindcss/tailwind.css"

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend)

const Counter = () => {
  const [count, setCount] = useState(0)
  const [bgColor, setBgColor] = useState("rgba(255, 255, 255, 1)") //Default White Color
  const [chartData, setChartData] = useState([0])

  const updateBackgroundColor = (newCount) => {
    const maxCount = 100
    const intensity = Math.min(1, Math.abs(newCount) / maxCount)

    // Only positive transitions now since we're preventing negative numbers
    const r = Math.round(255 * (1 - intensity)) //As counter increases Bg color darkens
    const g = Math.round(255 * (1 - 0.3 * intensity))
    const b = Math.round(255 * (1 - 0.5 * intensity))
    setBgColor(`rgba(${r}, ${g}, ${b}, 1)`)
  }

  const updateChartData = (newCount) => {
    setChartData([...chartData, newCount])
  }

  const handlePlusClick = () => {
    const newCount = count + 1 //Initial Count is 1
    setCount(newCount)
    updateBackgroundColor(newCount) //Updates bg color
    updateChartData(newCount) //Add new count to CharData for Visualizing
  }

  const handleMinusClick = () => {
    // Only decrement if count is greater than 0
    if (count > 0) {
      const newCount = count - 1
      setCount(newCount)
      updateBackgroundColor(newCount)
      updateChartData(newCount)
    }
  }

  const handleResetClick = () => {
    setCount(0)
    setBgColor("rgba(255, 255, 255, 1)") //Default White Color
    setChartData([0]) //Initial State
  }

  const chartConfig = {
    labels: Array.from({ length: chartData.length }, (_, i) => i),
    datasets: [
      {
        label: "Counter Progress",
        data: chartData,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx
          const gradient = ctx.createLinearGradient(0, 0, 0, 400)
          gradient.addColorStop(0, "rgba(34, 211, 238, 0.6)") 
          gradient.addColorStop(1, "rgba(34, 211, 238, 0.1)")
          return gradient
        },
        borderColor: "rgba(34, 211, 238, 1)",
        borderWidth: 3,
        pointBackgroundColor: "rgba(34, 211, 238, 1)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: true,
        tension: 0.4,
      },
    ],
  }

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: {
            family: "'Poppins', sans-serif",
            size: 14,
            weight: "600",
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          family: "'Poppins', sans-serif",
          size: 14,
          weight: "600",
        },
        bodyFont: {
          family: "'Poppins', sans-serif",
          size: 13,
        },
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "'Poppins', sans-serif",
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
          drawBorder: false,
        },
        ticks: {
          font: {
            family: "'Poppins', sans-serif",
            size: 12,
          },
        },
        min: 0,
        suggestedMin: 0,
        ticks: {
          stepSize: 1,
          font: {
            family: "'Poppins', sans-serif",
            size: 12,
          },
        },
      },
    },
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ease-in-out"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full max-w-screen-md p-6 rounded-xl shadow-2xl bg-white bg-opacity-90 backdrop-blur-lg">
        <div className="flex justify-between mb-8">
          <Button
            radius="full"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg hover:shadow-cyan-200/50 transition-all duration-300"
            onClick={handleMinusClick}
            disabled={count === 0}
          >
            <FaMinus className="text-2xl" />
          </Button>
          <Button
            radius="full"
            className="bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg hover:shadow-purple-200/50 transition-all duration-300"
            onClick={handleResetClick}
          >
            <GrPowerReset className="text-2xl" />
          </Button>
          <Button
            radius="full"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg hover:shadow-blue-200/50 transition-all duration-300"
            onClick={handlePlusClick}
          >
            <FaPlus className="text-2xl" />
          </Button>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Count: {count}
          </h1>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="h-[300px]">
            <Line data={chartConfig} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter

