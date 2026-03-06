let allSection = []
let openSection = []
let ClosedSection = []



// step1 : feteh all issues


const loadIssues = () => {
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayIssues(data.data));
};
// step2 display issues 
const displayIssues = (data)=>{
    const issuesContainer = document.getElementById("issues-container");
    issuesContainer.innerHTML="";
    data.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `
                        <div class="card bg-base-100 mt-4 p-6 shadow-sm space-y-3 h-full">
                    <div class="card space-y-2">
                        <div class="flex justify-between ">
                            <span>${element.status == "open" ? `<img src="assets/Open-Status.png" alt="">` : `<img src="assets/Closed- Status .png" alt="">` }</span>
                            <p class="bg-yellow-100 rounded-xl px-2">${element.priority}</p>
                        </div>
                        <div class="text-left space-y-2">
                            <h2 class="font-bold line-clamp-1">${element.title}</h2>
                            <p class="line-clamp-2">${element.description}</p>
                        </div>
                        <div class="badge-container">
                            <span class="">${element.labels.map(el => `<span class="mt-4 px-2 pb-[2px] rounded-full bg-yellow-100 border border-yellow-300 text-red-500">${el}</span>`).join(' ')}</span>
                        </div>
                        <hr class="text-gray-300 my-4">
                        <p>#1
                            by john_doe</p>
                        <p>1/15/2024</p>
                    </div>
                </div>

        
        
        `
        issuesContainer.appendChild(div)
        
    });
}

