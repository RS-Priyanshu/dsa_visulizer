# 📊 Sorting Algorithm Visualizer (DSA Suite)

**An interactive, high-performance web platform designed to illuminate the inner mechanics, asymptotic behavior, and state transformations of classic sorting algorithms.**

[Explore Demo](https://dsasortingtechnique.netlify.app) • [Report Issues](https://github.com/<your-username>/<repo-name>/issues) • [Request Features](https://github.com/<your-username>/<repo-name>/issues)

## 📑 Table of Contents

* [Overview](#-overview)

* [System Architecture & Core Engineering](#-system-architecture--core-engineering)

* [Key Features](#-key-features)

* [Supported Algorithms & Theoretical Complexities](#-supported-algorithms--theoretical-complexities)

  * [Algorithmic Performance Matrix](#algorithmic-performance-matrix)

  * [Detailed Algorithm Breakdown](#detailed-algorithm-breakdown)

* [UI State Management & Color Coding](#-ui-state-management--color-coding)

* [Directory Structure](#-directory-structure)

* [Local Development & Setup](#-local-development--setup)

* [Engineering Highlights & Design Decisions](#-engineering-highlights--design-decisions)

* [Future Roadmap](#-future-roadmap)

* [Contributing](#-contributing)

* [License](#-license)

* [Author & Acknowledgments](#-author--acknowledgments)

## 🎯 Overview

Computer science education frequently relies on static mathematical proofs and abstract pseudocode to demonstrate the behavior of sorting techniques. However, understanding how pointers move, when auxiliary arrays are allocated, and why degenerate cases trigger quadratic time complexity ($\mathcal{O}(n^2)$) requires dynamic visual observation.

**DSA Sorting Technique Visualizer** provides an in-browser runtime environment that bridges the gap between theoretical algorithm analysis and concrete visual execution. Built with pure asynchronous JavaScript and zero heavy frontend framework dependencies, the application guarantees deterministic framerates, low CPU overhead, and responsive DOM rendering even across dense arrays.

## 🏗️ System Architecture & Core Engineering

The project follows a decoupled, event-driven pattern designed around an asynchronous rendering loop:

```
[ User Interaction / Controls ]
       │ (Array Size, Execution Speed, Algorithm Choice)
       ▼
[ Controller & State Handler ]
       │ 
       ├── Generates / Mutates State Array: Int32Array | Array<number>
       ├── Disables Input Controls (Mutex State during sort execution)
       ▼
[ Algorithm Execution Engine (Async / Generator) ]
       │ 
       ├── Emits Step Events: COMPARISON | SWAP | OVERWRITE | PIVOT
       ▼
[ Visual Delay Pipeline (`await sleep(ms)`) ]
       │ 
       ▼
[ DOM / Canvas Rendering Engine ]
       │
       └── Mutates Bar Heights, CSS Transform matrix & Color Class List

```

### 1. The Asynchronous Execution Loop

To prevent browser freeze-ups on the single main thread, every iterative swap or recursive step is wrapped in a parameterized asynchronous delay:

$$
\text{Delay Interval} = f(\text{SpeedSlider}) \in [1\text{ ms}, 1000\text{ ms}]
$$

Using `async`/`await` primitives alongside customizable promises, the runtime yields control back to the browser's event loop at each operation, enabling fluid rendering without blocking UI events.

### 2. State Mutex & Execution Safety

When an algorithm run initiates, all mutate controls (Array Size slider, Algorithm selector, Generate Array buttons) transition into a locked read-only state. This prevents race conditions and mid-sort state corruption.

## ✨ Key Features

* **⚡ Real-Time Algorithmic Animations**: Observe indices in motion with zero frame-skipping or lag.

* **🎛️ Dynamic Parameter Adjustment**:

  * **Array Size Adjuster**: Test behavior on sparse arrays ($n \approx 10$) up to dense datasets ($n \approx 100+$).

  * **Variable Clock Frequency**: Throttle execution to study individual pointer shifts or accelerate to observe macroscopic sorting patterns.

* **🎨 Semiotic State Indicators**:

  * Distinct contrasting color palettes represent active operations (e.g., pivot selection, active comparison, displacement, settled state).

* **📱 Responsive Layout**: Built with CSS Grid and Flexbox to preserve proportional bar scaling across ultrawide monitors, laptops, and mobile screens.

* **📦 Zero External Dependencies**: Powered entirely by modern standard web APIs (HTML5, CSS3, ES6+ JavaScript), guaranteeing lightning-fast bundle initialization and long-term maintainability.

## 🧠 Supported Algorithms & Theoretical Complexities

### Algorithmic Performance Matrix

| Algorithm | Best-Case Time | Average-Case Time | Worst-Case Time | Auxiliary Space | Stable? | In-Place? | 
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | 
| **Bubble Sort** | $\mathcal{O}(n)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(1)$ | Yes | Yes | 
| **Selection Sort** | $\mathcal{O}(n^2)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(1)$ | No | Yes | 
| **Insertion Sort** | $\mathcal{O}(n)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(1)$ | Yes | Yes | 
| **Merge Sort** | $\mathcal{O}(n \log n)$ | $\mathcal{O}(n \log n)$ | $\mathcal{O}(n \log n)$ | $\mathcal{O}(n)$ | Yes | No | 
| **Quick Sort** | $\mathcal{O}(n \log n)$ | $\mathcal{O}(n \log n)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(\log n)$ | No | Yes | 
| **Heap Sort** | $\mathcal{O}(n \log n)$ | $\mathcal{O}(n \log n)$ | $\mathcal{O}(n \log n)$ | $\mathcal{O}(1)$ | No | Yes | 


## 🎨 UI State Management & Color Coding

The visual interface uses a strict color hierarchy to convey what the algorithm is calculating at each millisecond:

| Visual State | Indicator Color | Semantic Meaning | 
| ----- | ----- | ----- | 
| **Default / Idle** | 🟦 `#3B82F6` (Cyan / Blue) | Unsorted elements waiting to be processed | 
| **Comparison** | 🟨 `#FACC15` (Amber / Yellow) | Active indices being evaluated by comparison operators (`>`, `<`) | 
| **Active Swap / Shift** | 🟥 `#EF4444` (Crimson / Red) | Values actively undergoing position swapping or array displacement | 
| **Pivot / Partition Key** | 🟪 `#A855F7` (Purple) | Reference value in partitioning algorithms (Quick Sort) | 
| **Sorted / Finalized** | 🟩 `#10B981` (Emerald Green) | Confirmed in final, immutable order | 

## 📂 Directory Structure

```
dsasortingtechnique/
├── index.html              # Core application layout, UI controls, semantic markup
├── style.css               # Flex/Grid layout, animations, responsive design system
├── script.js               # Event dispatchers, UI synchronization, rendering loops
│
├── js/
│   ├── algorithms/
│   │   ├── bubbleSort.js   # Bubble Sort implementation
│   │   ├── selectionSort.js# Selection Sort implementation
│   │   ├── insertionSort.js# Insertion Sort implementation
│   │   ├── mergeSort.js    # Merge Sort implementation
│   │   ├── quickSort.js    # Quick Sort implementation
│   │   └── heapSort.js     # Heap Sort implementation
│   └── utils/
│       ├── animation.js    # Promise-based sleep and timer utilities
│       └── arrayGen.js     # Uniform random array generators
│
├── assets/                 # Icons, screenshots, performance diagrams
│   └── demo-preview.gif
│
├── LICENSE                 # MIT License details
└── README.md               # Detailed project documentation

```

## 💻 Local Development & Setup

### Prerequisites

Because this project is built on modern web standards, no compilation steps (like Node.js, Webpack, or Vite) are strictly required. You only need a modern web browser.

### Step-by-Step Installation

1. **Clone the Repository**

   ```
   git clone https://github.com/<your-username>/dsasortingtechnique.git
   cd dsasortingtechnique
   
   ```

2. **Launch via Local Server**
   To avoid potential CORS issues when loading local modular assets, serve the project with any local server tool:

   * **Using Python 3:**

     ```
     python3 -m http.server 8080
     
     ```

   * **Using Node.js (`npx serve`):**

     ```
     npx serve .
     
     ```

   * **Using VS Code Live Server:**
     Right-click `index.html` and select **"Open with Live Server"**.

3. **Open the Application**
   Navigate to `http://localhost:8080` (or the port specified by your development server) in your browser.

## ⚙️ Engineering Highlights & Design Decisions

### Why Vanilla JavaScript over Frameworks (React, Vue)?

* **Minimal Virtual DOM Overhead**: React and Vue diff their virtual DOM representations before writing changes. When animating arrays with 100+ elements mutating at 10-millisecond intervals, virtual DOM overhead introduces micro-stutter and frame drops.

* **Direct Ref Mutation**: Mutating direct element styles via `style.height` and class modifications avoids garbage collection cycles and guarantees steady 60 FPS transitions.

* **Zero Build Step**: Eliminates dependency vulnerabilities, `node_modules` overhead, and continuous deployment build times.

## 🔮 Future Roadmap

* \[ \] **Dual Visualizer Mode**: Side-by-side comparative execution between two algorithms running against identical data arrays.

* \[ \] **Custom Numerical Input**: Allow users to input comma-separated arrays to debug specific edge cases (e.g., negative numbers, duplicate values).

* \[ \] **Audio Synthesis Engine**: Audio API pitch-mapping where element values produce distinctive tone frequencies, illustrating auditory pitch ascending as order is restored.

* \[ \] **Extended Non-Comparison Sorts**: Implement Radix Sort, Bucket Sort, and Counting Sort.

* \[ \] **Step-by-Step Playback**: Include "Step Forward", "Step Backward", and "Pause" debugging capabilities.

## 📄 License

This project is licensed under the **MIT License**. You are free to inspect, modify, fork, and distribute this software for educational and personal use. See the [LICENSE](LICENSE) file for complete details.

## 👨‍💻 Author & Contact

**Developed with focus on Data Structures & Algorithms, Systems Clarity, and Web Performance.**

* **Live URL:** <https://dsasortingtechnique.netlify.app>

* **GitHub Profile:** [@]https://github.com/RS-Priyanshu


*(If you find this project helpful for interview prep or teaching DSA, please consider giving this repository a ⭐!)*