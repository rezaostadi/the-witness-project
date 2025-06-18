import { HelpCircle, MapPin, Send } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4 md:p-8 lg:p-12">
      {/* HEADER */}
      <header className="w-full max-w-5xl text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-green-500">
          The Witness Project
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          When media is a weapon, witnessing is a revolutionary act.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          This is a decentralized, people-powered truth ledger. What you see is reported by citizens, not governments.
        </p>
      </header>

      {/* MAIN CONTENT AREA */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: SUBMISSION FORM */}
        <div className="lg:col-span-1 bg-gray-950 border border-gray-700 rounded-lg p-6 h-fit">
          <h2 className="text-2xl font-bold text-yellow-400 flex items-center mb-4">
            <Send className="mr-2" /> Bear Witness
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Your report will be permanently recorded on our public, incorruptible ledger. Be factual. Be safe.
          </p>
          {/* This would be the Report Form Component */}
          <form className="space-y-4">
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-white p-2" placeholder="What did you see? Where? When?"></textarea>
            </div>
            <div>
              <label htmlFor="source_url" className="block text-sm font-medium text-gray-300">Source URL (Optional)</label>
              <input type="url" id="source_url" name="source_url" className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-white p-2" placeholder="Link to Tweet, video, photo..." />
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-gray-900">
              Submit Report to Ledger
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: MAP AND ECHOES */}
        <div className="lg:col-span-2 space-y-8">
          {/* TRUTH MAP */}
          <div className="bg-gray-950 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-green-400 flex items-center mb-4">
              <MapPin className="mr-2" /> The Truth Map
            </h2>
            <div className="w-full h-80 bg-gray-800 rounded flex items-center justify-center text-gray-500">
              [Live Map Will Load Here...]
            </div>
          </div>
          
          {/* HUMANITY ECHOES */}
          <div className="bg-gray-950 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-400 flex items-center mb-4">
              <HelpCircle className="mr-2" /> Humanity Echoes
            </h2>
            <div className="space-y-4 h-80 overflow-y-auto pr-2">
              {/* Placeholder for real messages */}
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-sm text-gray-200">"I am in Berlin. I see what is happening. We are with you. Don't lose hope."</p>
                <p className="text-xs text-right text-blue-400 mt-1">- From Germany</p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-sm text-gray-200">"To the mothers on the other side, my heart aches for you as it aches for my own. This madness must end."</p>
                <p className="text-xs text-right text-blue-400 mt-1">- From Unknown</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}