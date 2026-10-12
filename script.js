// Algorithm Database with Descriptions and Python Code
    const algorithmsDB = {
        bubble: {
            name: "Bubble Sort",
            description: "Bubble Sort is the simplest sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates the list is sorted. It's called Bubble Sort because smaller elements 'bubble' to the top of the list.",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(1)",
            bestCase: "O(n) - when array is already sorted",
            worstCase: "O(n²) - when array is reverse sorted",
            steps: [
                    "Start from the first element, compare each adjacent pair",
                    "If the left element is greater than the right, swap them",
                    "After each complete pass, the largest element 'bubbles up' to the end",
                    "Repeat until no swaps are needed"
                ],
            pythonCode: `def bubble_sort(arr):
    """
    Bubble Sort Algorithm
    Time Complexity: O(n²)
    Space Complexity: O(1)
    """
    n = len(arr)
    for i in range(n - 1):
        # Flag to optimize if array becomes sorted
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr`
        },
        selection: {
            name: "Selection Sort",
            description: "Selection Sort divides the array into a sorted and an unsorted region. It repeatedly selects the smallest (or largest) element from the unsorted region and swaps it with the first unsorted element, growing the sorted region by one. This algorithm makes the minimum number of swaps (n-1) among all sorting algorithms.",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(1)",
            bestCase: "O(n²) - always performs n² comparisons",
            worstCase: "O(n²)",
            steps: [
                    "Find the minimum element in the unsorted portion",
                    "Swap it with the first unsorted element",
                    "Expand the sorted portion by one",
                    "Repeat until entire array is sorted"
                ],
            pythonCode: `def selection_sort(arr):
    """
    Selection Sort Algorithm
    Time Complexity: O(n²)
    Space Complexity: O(1)
    Makes minimum number of swaps (n-1)
    """
    n = len(arr)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`
        },
        insertion: {
            name: "Insertion Sort",
            description: "Insertion Sort builds the final sorted array one element at a time. It works similarly to sorting playing cards in your hand - you pick a card and insert it into its correct position among the already sorted cards. It's efficient for small datasets and nearly sorted arrays.",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(1)",
            bestCase: "O(n) - when array is already sorted",
            worstCase: "O(n²) - when array is reverse sorted",
            steps: [
                    "Start with the second element as the 'key'",
                    "Compare key with previous elements",
                    "Shift larger elements to the right",
                    "Insert key in its correct position"
                ],
            pythonCode: `def insertion_sort(arr):
    """
    Insertion Sort Algorithm
    Time Complexity: O(n²)
    Space Complexity: O(1)
    Efficient for small or nearly sorted arrays
    """
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr`
        },
        merge: {
            name: "Merge Sort",
            description: "Merge Sort is a divide-and-conquer algorithm that divides the array into two halves, recursively sorts them, and then merges the sorted halves. It's a stable sorting algorithm with consistent O(n log n) performance regardless of the input distribution. It's widely used for sorting linked lists and external sorting.",
            timeComplexity: "O(n log n)",
            spaceComplexity: "O(n)",
            bestCase: "O(n log n) - always performs n log n operations",
            worstCase: "O(n log n)",
            steps: [
                    "Divide array into two halves recursively",
                    "Sort each half independently",
                    "Merge the two sorted halves back together",
                    "Continue until fully sorted"
                ],
            pythonCode: `def merge_sort(arr):
    """
    Merge Sort Algorithm (Divide and Conquer)
    Time Complexity: O(n log n)
    Space Complexity: O(n)
    """
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result`
        },
        quick: {
            name: "Quick Sort",
            description: "Quick Sort is a divide-and-conquer algorithm that picks a 'pivot' element and partitions the array around it, placing smaller elements before and larger after. It then recursively sorts the sub-arrays. It's one of the fastest sorting algorithms in practice and is the default sorting algorithm in many programming languages.",
            timeComplexity: "O(n log n)",
            spaceComplexity: "O(log n)",
            bestCase: "O(n log n) - when pivot divides array evenly",
            worstCase: "O(n²) - when pivot is always smallest/largest",
            steps: [
                    "Choose a pivot element (often the last element)",
                    "Partition: place elements smaller than pivot left, larger right",
                    "Recursively sort the left and right partitions",
                ],
            pythonCode: `def quick_sort(arr, low=0, high=None):
    """
    Quick Sort Algorithm (Divide and Conquer)
    Time Complexity: O(n log n) average, O(n²) worst
    Space Complexity: O(log n)
    """
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
    return arr

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1`
        },
        heap: {
            name: "Heap Sort",
            description: "Heap Sort uses a binary heap data structure. It first builds a max-heap from the array, then repeatedly extracts the maximum element from the heap and places it at the end of the array. It combines the advantages of merge sort (good time complexity) and insertion sort (in-place sorting).",
            timeComplexity: "O(n log n)",
            spaceComplexity: "O(1)",
            bestCase: "O(n log n)",
            worstCase: "O(n log n)",
            steps: [
                    "Build a max-heap from the array",
                    "Swap root (largest) with last element",
                    "Reduce heap size and heapify root",
                    "Repeat until heap is empty"
                ],
            pythonCode: `def heap_sort(arr):
    """
    Heap Sort Algorithm
    Time Complexity: O(n log n)
    Space Complexity: O(1)
    In-place sorting algorithm using heap data structure
    """
    n = len(arr)
    
    # Build max heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    
    # Extract elements from heap
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)
    return arr

def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    
    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right
    
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)`
        },
        counting: {
            name: "Counting Sort",
            description: "Counting Sort is a non-comparison sorting algorithm that sorts integers by counting the number of occurrences of each unique element. It uses a counting array to store frequencies and then reconstructs the sorted array. It's extremely efficient when the range of input values is small.",
            timeComplexity: "O(n + k)",
            spaceComplexity: "O(k)",
            bestCase: "O(n + k)",
            worstCase: "O(n + k)",
            steps: [
                    "Find the range of input values",
                    "Count occurrences of each value",
                    "Compute cumulative counts",
                    "Build output array using cumulative counts"
                ],
            pythonCode: `def counting_sort(arr):
    """
    Counting Sort Algorithm (Non-comparison based)
    Time Complexity: O(n + k) where k is range of input
    Space Complexity: O(k)
    Efficient when range of input values is small
    """
    if not arr:
        return arr
    
    max_val = max(arr)
    min_val = min(arr)
    range_val = max_val - min_val + 1
    
    count = [0] * range_val
    output = [0] * len(arr)
    
    # Count occurrences
    for num in arr:
        count[num - min_val] += 1
    
    # Cumulative sum
    for i in range(1, len(count)):
        count[i] += count[i - 1]
    
    # Build output array
    for i in range(len(arr) - 1, -1, -1):
        output[count[arr[i] - min_val] - 1] = arr[i]
        count[arr[i] - min_val] -= 1
    
    return output`
        },
        radix: {
            name: "Radix Sort",
            description: "Radix Sort processes digits individually, using a stable sort (like counting sort) to sort by each digit from least significant to most significant. It's particularly efficient for sorting integers with a fixed number of digits and works well for large datasets with small digit lengths.",
            timeComplexity: "O(d·(n + k))",
            spaceComplexity: "O(n + k)",
            bestCase: "O(d·(n + k))",
            worstCase: "O(d·(n + k))",
            steps: [
                    "Find the maximum number of digits",
                    "Sort by each digit using a stable sort",
                    "Start from least significant digit",
                    "Continue until all digits are processed"
                ],
            pythonCode: `def radix_sort(arr):
    """
    Radix Sort Algorithm
    Time Complexity: O(d * (n + k)) where d is number of digits
    Space Complexity: O(n + k)
    """
    if not arr:
        return arr
    
    max_num = max(arr)
    exp = 1
    
    while max_num // exp > 0:
        counting_sort_by_digit(arr, exp)
        exp *= 10
    return arr

def counting_sort_by_digit(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10
    
    for i in range(n):
        digit = (arr[i] // exp) % 10
        count[digit] += 1
    
    for i in range(1, 10):
        count[i] += count[i - 1]
    
    for i in range(n - 1, -1, -1):
        digit = (arr[i] // exp) % 10
        output[count[digit] - 1] = arr[i]
        count[digit] -= 1
    
    for i in range(n):
        arr[i] = output[i]`
        },
        bucket: {
            name: "Bucket Sort",
            description: "Bucket Sort distributes elements into a number of buckets, sorts each bucket individually (often using insertion sort), then concatenates the results. It works best when the input is uniformly distributed over a range.",
            timeComplexity: "O(n + k)",
            spaceComplexity: "O(n + k)",
            bestCase: "O(n + k)",
            worstCase: "O(n²)",
            steps: [
                    "Create empty buckets",
                    "Distribute elements into buckets based on value range",
                    "Sort each bucket (using insertion sort)",
                    "Concatenate all sorted buckets"
                ],
            pythonCode: `def bucket_sort(arr, bucket_count=10):
    """
    Bucket Sort Algorithm
    Time Complexity: O(n + k) average, O(n²) worst
    Space Complexity: O(n + k)
    """
    if not arr:
        return arr
    
    max_val = max(arr)
    min_val = min(arr)
    range_val = max_val - min_val + 1
    bucket_size = range_val / bucket_count
    
    buckets = [[] for _ in range(bucket_count)]
    
    for num in arr:
        index = int((num - min_val) / bucket_size)
        if index == bucket_count:
            index -= 1
        buckets[index].append(num)
    
    result = []
    for bucket in buckets:
        result.extend(sorted(bucket))
    
    return result`
        },
        shell: {
            name: "Shell Sort",
            description: "Shell Sort is an optimization of insertion sort that allows swapping of far-apart elements. It uses a gap sequence to sort elements at specific intervals, gradually reducing the gap until it becomes 1, at which point it performs a regular insertion sort.",
            timeComplexity: "O(n^(3/2))",
            spaceComplexity: "O(1)",
            bestCase: "O(n log n)",
            worstCase: "O(n²)",
            steps: [
                    "Choose a gap sequence (starting with n/2)",
                    "Sort elements at current gap using insertion sort",
                    "Reduce gap and repeat",
                    "Final gap of 1 performs regular insertion sort"
                ],
            pythonCode: `def shell_sort(arr):
    """
    Shell Sort Algorithm
    Time Complexity: O(n^(3/2)) average
    Space Complexity: O(1)
    """
    n = len(arr)
    gap = n // 2
    
    while gap > 0:
        for i in range(gap, n):
            temp = arr[i]
            j = i
            
            while j >= gap and arr[j - gap] > temp:
                arr[j] = arr[j - gap]
                j -= gap
            
            arr[j] = temp
        
        gap //= 2
    
    return arr`
        },
        comb: {
            name: "Comb Sort",
            description: "Comb Sort improves on bubble sort by eliminating small values at the end of the array using a gap larger than 1. The gap starts as the array length and shrinks by a factor of 1.3 each iteration until it becomes 1, at which point it performs a bubble sort pass.",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(1)",
            bestCase: "O(n log n)",
            worstCase: "O(n²)",
            steps: [
                    "Start with gap = array length / 1.3",
                    "Compare and swap elements with current gap",
                    "Shrink gap and repeat",
                    "Finish with bubble sort (gap=1)"
                ],
            pythonCode: `def comb_sort(arr):
    """
    Comb Sort Algorithm
    Time Complexity: O(n²) worst, O(n log n) best
    Space Complexity: O(1)
    """
    n = len(arr)
    gap = n
    shrink = 1.3
    swapped = True
    
    while gap > 1 or swapped:
        gap = max(1, int(gap / shrink))
        swapped = False
        
        for i in range(n - gap):
            if arr[i] > arr[i + gap]:
                arr[i], arr[i + gap] = arr[i + gap], arr[i]
                swapped = True
    
    return arr`
        }
    };

    // DOM Elements
    const canvas = document.getElementById('sortCanvas');
    const ctx = canvas.getContext('2d');
    const algoSelect = document.getElementById('algoSelect');
    const sizeSlider = document.getElementById('sizeSlider');
    const sizeValue = document.getElementById('sizeValue');
    const speedSlider = document.getElementById('speedSlider');
    const speedValue = document.getElementById('speedValue');
    const genRandomBtn = document.getElementById('genRandomBtn');
    const applyCustomBtn = document.getElementById('applyCustomBtn');
    const customArrayInput = document.getElementById('customArrayInput');
    const startSortBtn = document.getElementById('startSortBtn');
    const algoNameSpan = document.getElementById('algoName');
    const execTimeSpan = document.getElementById('execTime');
    const arraySizeStatSpan = document.getElementById('arraySizeStat');
    const comparisonsSpan = document.getElementById('comparisons');
    const swapsSpan = document.getElementById('swaps');
    const algoStepsList = document.getElementById('algoStepsList');

    // State
    let array = [];
    let arraySize = 50;
    let sortInProgress = false;
    let animationDelay = 30;
    let sortedSet = new Set();
    let comparingIndices = new Set();
    let swappingIndices = new Set();
    let comparisons = 0;
    let swaps = 0;

    // Update Algorithm Info Section
    function updateAlgorithmInfo(algorithmId) {
        const algo = algorithmsDB[algorithmId];
        document.getElementById('algoTitle').textContent = algo.name;
        document.getElementById('algoDesc').textContent = algo.description;
        document.getElementById('timeComplexityDisplay').textContent = `Time: ${algo.timeComplexity}`;
        document.getElementById('spaceComplexityDisplay').textContent = `Space: ${algo.spaceComplexity}`;
        document.getElementById('bestCaseDisplay').textContent = `Best: ${algo.bestCase}`;
        document.getElementById('worstCaseDisplay').textContent = `Worst: ${algo.worstCase}`;
        document.getElementById('pythonCode').textContent = algo.pythonCode;
        algoNameSpan.textContent = algo.name;

        // Render "How it works" steps
        if (algoStepsList) {
            algoStepsList.innerHTML = (algo.steps || [])
                .map(step => `<li>${step}</li>`)
                .join('');
        }
    }

    // Helper Functions
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    function drawArray(highlightCompare = [], highlightSwap = []) {
        if (!canvas || !ctx) return;
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        canvas.width = w;
        canvas.height = h;
        const n = array.length;
        if (n === 0) return;
        
        const barWidth = Math.max(2, (w / n) * 0.85);
        const maxVal = Math.max(...array, 1);
        const baseX = (w - (barWidth * n)) / 2;
        
        for (let i = 0; i < n; i++) {
            let barHeight = (array[i] / maxVal) * (h - 60);
            barHeight = Math.max(4, barHeight);
            const x = baseX + i * barWidth;
            const y = h - barHeight - 20;
            
            let color = '#1e90ff';
            if (swappingIndices.has(i) || highlightSwap.includes(i)) color = '#ff3366';
            else if (comparingIndices.has(i) || highlightCompare.includes(i)) color = '#ffd966';
            else if (sortedSet.has(i)) color = '#2ecc71';
            
            ctx.fillStyle = color;
            ctx.fillRect(x, y, barWidth - 1, barHeight);
        }
    }

    function resetStats() {
        comparisons = 0;
        swaps = 0;
        comparisonsSpan.textContent = '0';
        swapsSpan.textContent = '0';
    }

    async function swapVisual(i, j) {
        swaps++;
        swapsSpan.textContent = swaps;
        swappingIndices.add(i);
        swappingIndices.add(j);
        drawArray([], [i, j]);
        await wait(animationDelay);
        [array[i], array[j]] = [array[j], array[i]];
        drawArray([], [i, j]);
        await wait(animationDelay / 2);
        swappingIndices.delete(i);
        swappingIndices.delete(j);
        drawArray();
    }

    async function compareVisual(i, j) {
        comparisons++;
        comparisonsSpan.textContent = comparisons;
        comparingIndices.add(i);
        comparingIndices.add(j);
        drawArray([i, j], []);
        await wait(animationDelay);
        comparingIndices.delete(i);
        comparingIndices.delete(j);
        drawArray();
        return array[i] > array[j];
    }

    // Sorting Algorithms with Visualization
    async function bubbleSortVisual() {
        const n = array.length;
        for (let i = 0; i < n - 1; i++) {
            let swapped = false;
            for (let j = 0; j < n - i - 1; j++) {
                await compareVisual(j, j + 1);
                if (array[j] > array[j + 1]) {
                    await swapVisual(j, j + 1);
                    swapped = true;
                }
            }
            sortedSet.add(n - i - 1);
            drawArray();
            if (!swapped) break;
        }
        sortedSet.add(0);
    }

    async function selectionSortVisual() {
        const n = array.length;
        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < n; j++) {
                await compareVisual(j, minIdx);
                if (array[j] < array[minIdx]) {
                    minIdx = j;
                }
            }
            if (minIdx !== i) {
                await swapVisual(i, minIdx);
            }
            sortedSet.add(i);
            drawArray();
        }
        sortedSet.add(n - 1);
    }

    async function insertionSortVisual() {
        const n = array.length;
        for (let i = 1; i < n; i++) {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > key) {
                await compareVisual(j, j + 1);
                array[j + 1] = array[j];
                drawArray();
                await wait(animationDelay);
                j--;
            }
            array[j + 1] = key;
            drawArray();
            await wait(animationDelay);
        }
        for (let i = 0; i < n; i++) sortedSet.add(i);
    }

    async function mergeSortVisual(left = 0, right = array.length - 1) {
        if (left >= right) return;
        const mid = Math.floor((left + right) / 2);
        await mergeSortVisual(left, mid);
        await mergeSortVisual(mid + 1, right);
        await merge(left, mid, right);
    }

    async function merge(left, mid, right) {
        const leftArr = array.slice(left, mid + 1);
        const rightArr = array.slice(mid + 1, right + 1);
        let i = 0, j = 0, k = left;
        
        while (i < leftArr.length && j < rightArr.length) {
            await compareVisual(left + i, mid + 1 + j);
            if (leftArr[i] <= rightArr[j]) {
                array[k] = leftArr[i];
                i++;
            } else {
                array[k] = rightArr[j];
                j++;
            }
            drawArray();
            await wait(animationDelay);
            k++;
        }
        
        while (i < leftArr.length) {
            array[k] = leftArr[i];
            i++;
            k++;
            drawArray();
            await wait(animationDelay);
        }
        
        while (j < rightArr.length) {
            array[k] = rightArr[j];
            j++;
            k++;
            drawArray();
            await wait(animationDelay);
        }
        
        for (let idx = left; idx <= right; idx++) {
            sortedSet.add(idx);
        }
        drawArray();
    }

    async function quickSortVisual(low = 0, high = array.length - 1) {
        if (low < high) {
            const pi = await partition(low, high);
            await quickSortVisual(low, pi - 1);
            await quickSortVisual(pi + 1, high);
        } else if (low === high) {
            sortedSet.add(low);
            drawArray();
        }
    }

    async function partition(low, high) {
        const pivot = array[high];
        let i = low - 1;
        
        for (let j = low; j < high; j++) {
            await compareVisual(j, high);
            if (array[j] <= pivot) {
                i++;
                await swapVisual(i, j);
            }
        }
        await swapVisual(i + 1, high);
        return i + 1;
    }

    async function heapSortVisual() {
        const n = array.length;
        
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            await heapify(n, i);
        }
        
        for (let i = n - 1; i > 0; i--) {
            await swapVisual(0, i);
            sortedSet.add(i);
            await heapify(i, 0);
        }
        sortedSet.add(0);
    }

    async function heapify(n, i) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        
        if (left < n && array[left] > array[largest]) largest = left;
        if (right < n && array[right] > array[largest]) largest = right;
        
        if (largest !== i) {
            await swapVisual(i, largest);
            await heapify(n, largest);
        }
    }

    function countingSortVisual() {
        return new Promise((resolve) => {
            const max = Math.max(...array);
            const min = Math.min(...array);
            const range = max - min + 1;
            const count = new Array(range).fill(0);
            const output = new Array(array.length);
            
            for (let i = 0; i < array.length; i++) {
                count[array[i] - min]++;
                comparisons++;
                comparisonsSpan.textContent = comparisons;
            }
            
            for (let i = 1; i < count.length; i++) {
                count[i] += count[i - 1];
            }
            
            for (let i = array.length - 1; i >= 0; i--) {
                output[count[array[i] - min] - 1] = array[i];
                count[array[i] - min]--;
            }
            
            (async () => {
                for (let i = 0; i < output.length; i++) {
                    array[i] = output[i];
                    drawArray();
                    await wait(animationDelay / 2);
                }
                for (let i = 0; i < array.length; i++) sortedSet.add(i);
                drawArray();
                resolve();
            })();
        });
    }

    function radixSortVisual() {
        return new Promise(async (resolve) => {
            const max = Math.max(...array);
            let exp = 1;
            
            while (Math.floor(max / exp) > 0) {
                await countingSortByDigit(exp);
                exp *= 10;
            }
            for (let i = 0; i < array.length; i++) sortedSet.add(i);
            drawArray();
            resolve();
        });
    }

    async function countingSortByDigit(exp) {
        const n = array.length;
        const output = new Array(n);
        const count = new Array(10).fill(0);
        
        for (let i = 0; i < n; i++) {
            const digit = Math.floor(array[i] / exp) % 10;
            count[digit]++;
            comparisons++;
            comparisonsSpan.textContent = comparisons;
        }
        
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
        
        for (let i = n - 1; i >= 0; i--) {
            const digit = Math.floor(array[i] / exp) % 10;
            output[count[digit] - 1] = array[i];
            count[digit]--;
        }
        
        for (let i = 0; i < n; i++) {
            array[i] = output[i];
            drawArray();
            await wait(animationDelay / 3);
        }
    }

    function bucketSortVisual() {
        return new Promise(async (resolve) => {
            const bucketCount = 10;
            const max = Math.max(...array);
            const min = Math.min(...array);
            const range = max - min + 1;
            const bucketSize = range / bucketCount;
            const buckets = Array.from({ length: bucketCount }, () => []);
            
            for (let i = 0; i < array.length; i++) {
                let index = Math.floor((array[i] - min) / bucketSize);
                if (index === bucketCount) index--;
                buckets[index].push(array[i]);
                comparisons++;
                comparisonsSpan.textContent = comparisons;
            }
            
            const result = [];
            for (let i = 0; i < buckets.length; i++) {
                buckets[i].sort((a, b) => a - b);
                result.push(...buckets[i]);
            }
            
            for (let i = 0; i < result.length; i++) {
                array[i] = result[i];
                drawArray();
                await wait(animationDelay / 2);
            }
            for (let i = 0; i < array.length; i++) sortedSet.add(i);
            drawArray();
            resolve();
        });
    }

    async function shellSortVisual() {
        const n = array.length;
        let gap = Math.floor(n / 2);
        
        while (gap > 0) {
            for (let i = gap; i < n; i++) {
                const temp = array[i];
                let j = i;
                
                while (j >= gap && array[j - gap] > temp) {
                    await compareVisual(j, j - gap);
                    array[j] = array[j - gap];
                    drawArray();
                    await wait(animationDelay);
                    j -= gap;
                }
                array[j] = temp;
                drawArray();
                await wait(animationDelay);
            }
            gap = Math.floor(gap / 2);
        }
        for (let i = 0; i < n; i++) sortedSet.add(i);
        drawArray();
    }

    async function combSortVisual() {
        const n = array.length;
        let gap = n;
        const shrink = 1.3;
        let swapped = true;
        
        while (gap > 1 || swapped) {
            gap = Math.max(1, Math.floor(gap / shrink));
            swapped = false;
            
            for (let i = 0; i + gap < n; i++) {
                await compareVisual(i, i + gap);
                if (array[i] > array[i + gap]) {
                    await swapVisual(i, i + gap);
                    swapped = true;
                }
            }
        }
        for (let i = 0; i < n; i++) sortedSet.add(i);
        drawArray();
    }

    // Main sort runner
    async function runSort() {
        if (sortInProgress) return;
        sortInProgress = true;
        startSortBtn.disabled = true;
        genRandomBtn.disabled = true;
        applyCustomBtn.disabled = true;
        algoSelect.disabled = true;
        sizeSlider.disabled = true;
        
        sortedSet.clear();
        resetStats();
        drawArray();
        const startTime = performance.now();
        
        const algorithm = algoSelect.value;
        
        try {
            switch (algorithm) {
                case 'bubble': await bubbleSortVisual(); break;
                case 'selection': await selectionSortVisual(); break;
                case 'insertion': await insertionSortVisual(); break;
                case 'merge': await mergeSortVisual(); break;
                case 'quick': await quickSortVisual(); break;
                case 'heap': await heapSortVisual(); break;
                case 'counting': await countingSortVisual(); break;
                case 'radix': await radixSortVisual(); break;
                case 'bucket': await bucketSortVisual(); break;
                case 'shell': await shellSortVisual(); break;
                case 'comb': await combSortVisual(); break;
            }
            
            for (let i = 0; i < array.length; i++) sortedSet.add(i);
            drawArray();
        } catch (error) {
            console.error('Sorting error:', error);
        }
        
        const endTime = performance.now();
        execTimeSpan.textContent = `${(endTime - startTime).toFixed(2)} ms`;
        
        sortInProgress = false;
        startSortBtn.disabled = false;
        genRandomBtn.disabled = false;
        applyCustomBtn.disabled = false;
        algoSelect.disabled = false;
        sizeSlider.disabled = false;
    }

    // Array management
    function generateRandomArray(size) {
        return Array.from({ length: size }, () => Math.floor(Math.random() * 90) + 10);
    }

    function setNewArray(newArr) {
        array = [...newArr];
        sortedSet.clear();
        comparingIndices.clear();
        swappingIndices.clear();
        resetStats();
        drawArray();
        arraySizeStatSpan.textContent = array.length;
    }

    function refreshArrayFromSize() {
        const newSize = parseInt(sizeSlider.value);
        arraySize = Math.min(400, Math.max(10, newSize));
        sizeValue.textContent = arraySize;
        const fresh = generateRandomArray(arraySize);
        setNewArray(fresh);
    }

    function parseCustomArray(str) {
        const parts = str.split(',').map(s => parseInt(s.trim(), 10)).filter(v => !isNaN(v));
        return parts.length >= 2 ? parts : null;
    }

    // Event listeners
    sizeSlider.addEventListener('input', () => {
        if (!sortInProgress) refreshArrayFromSize();
    });
    
    genRandomBtn.addEventListener('click', () => {
        if (!sortInProgress) refreshArrayFromSize();
    });
    
    applyCustomBtn.addEventListener('click', () => {
        if (sortInProgress) return;
        const parsed = parseCustomArray(customArrayInput.value);
        if (parsed && parsed.length >= 2 && parsed.length <= 500) {
            setNewArray(parsed);
            arraySize = parsed.length;
            sizeSlider.value = arraySize;
            sizeValue.textContent = arraySize;
        } else {
            alert('Enter valid comma-separated numbers (min 2 values, max 500)');
        }
    });
    
    speedSlider.addEventListener('input', () => {
        animationDelay = parseInt(speedSlider.value);
        speedValue.textContent = `${animationDelay} ms`;
    });
    
    algoSelect.addEventListener('change', () => {
        updateAlgorithmInfo(algoSelect.value);
    });
    
    startSortBtn.addEventListener('click', runSort);
    
    // Initialize
    animationDelay = parseInt(speedSlider.value);
    refreshArrayFromSize();
    updateAlgorithmInfo('bubble');
    drawArray();