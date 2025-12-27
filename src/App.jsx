import React, { useState } from "react";

const App = () => {

  const [notesTitle, updateTitle] = useState('');
  const [notesDetail, updateDetail] = useState('');
  const [task, settask] = useState([]);

  let formSubmission = (e) =>{
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({notesTitle, notesDetail});
    console.log(copyTask);
    settask(copyTask);


    updateTitle('');
    updateDetail('');
  }
  return (
    <div className="bg-[#0f172a] min-h-screen">
      <div class="w-full bg-[#020617] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3 h-screen">
        <main class="p-6 md:col-span-1 flex flex-col bg-[#020617]">
          <form action="" onSubmit={(e) => {
            formSubmission(e)
            // console.log(e)
          }}>
                <input
            type="text"
            placeholder="Note title"
            value={notesTitle}
            onChange={(val) =>{
              updateTitle(val.target.value);
            }}
            class="mb-4 p-3 bg-[#020617] border border-gray-800 text-white rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-600 placeholder-gray-500"
          />
          <textarea
            value={notesDetail}
            onChange={(e) =>{
              updateDetail(e.target.value);
            }}
            placeholder="Write your note..."
            class="flex-1 p-3 bg-[#020617] border border-gray-800 text-white rounded-xl w-full resize-none focus:outline-none focus:ring-2 focus:ring-indigo-600 placeholder-gray-500"
          ></textarea>

          <div class="mt-4 flex justify-center gap-3">
            <button class="px-5 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200">
              Cancel
            </button>
            <button class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
              Save Note
            </button>
          </div>
          </form>
        
        </main>
        <aside class="bg-[#020617] md:col-span-2 text-gray-200 p-6 border-b md:border-b-0 md:border-r border-gray-800">
          <h1 class="text-2xl font-bold mb-6 text-white">📝 Notes</h1>
          <div className="notes-wrapper flex flex-wrap align-middle gap-5">
            {task.map(function(elems){
              return <div className="notebox bg-white h-52 w-52 rounded p-3">
                <h2 className="text-amber-800 font-bold text-lg">{elems.notesTitle}</h2>
                <p className="font-normal text-blue-600 leading-normal text-sm">{elems.notesDetail}</p>
            </div>
            })}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default App;
