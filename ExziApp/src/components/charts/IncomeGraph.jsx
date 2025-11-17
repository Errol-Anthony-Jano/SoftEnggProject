import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// This is the data from above
const dailyIncomeData = [
  {
    "date": "Oct 17",
    "income": 263
  },
  {
    "date": "Oct 18",
    "income": 292
  },
  {
    "date": "Oct 19",
    "income": 292
  },
  {
    "date": "Oct 20",
    "income": 284
  },
  {
    "date": "Oct 21",
    "income": 278
  },
  {
    "date": "Oct 22",
    "income": 265
  },
  {
    "date": "Oct 23",
    "income": 280
  },
  {
    "date": "Oct 24",
    "income": 234
  },
  {
    "date": "Oct 25",
    "income": 238
  },
  {
    "date": "Oct 26",
    "income": 190
  },
  {
    "date": "Oct 27",
    "income": 184
  },
  {
    "date": "Oct 28",
    "income": 190
  },
  {
    "date": "Oct 29",
    "income": 202
  },
  {
    "date": "Oct 30",
    "income": 228
  },
  {
    "date": "Oct 31",
    "income": 235
  },
  {
    "date": "Nov 01",
    "income": 254
  },
  {
    "date": "Nov 02",
    "income": 272
  },
  {
    "date": "Nov 03",
    "income": 302
  },
  {
    "date": "Nov 04",
    "income": 301
  },
  {
    "date": "Nov 05",
    "income": 302
  },
  {
    "date": "Nov 06",
    "income": 276
  },
  {
    "date": "Nov 07",
    "income": 248
  },
  {
    "date": "Nov 08",
    "income": 241
  },
  {
    "date": "Nov 09",
    "income": 236
  },
  {
    "date": "Nov 10",
    "income": 187
  },
  {
    "date": "Nov 11",
    "income": 194
  },
  {
    "date": "Nov 12",
    "income": 188
  },
  {
    "date": "Nov 13",
    "income": 225
  },
  {
    "date": "Nov 14",
    "income": 216
  },
  {
    "date": "Nov 15",
    "income": 242
  }
]

const IncomeGraph = () => {
  return (
    <ResponsiveContainer width="95%" height="100%">
      <LineChart
        data={dailyIncomeData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="income" 
          stroke="#82ca9d" 
          activeDot={{ r: 8 }} 
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default IncomeGraph;