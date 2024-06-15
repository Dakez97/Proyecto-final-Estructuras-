class Queue 
{
    constructor() 
    {
        this.items = [];
    }

    enqueue(element) 
    {
        this.items.push(element);
    }

    dequeue() 
    {
        if (this.isEmpty()) 
            {
                return "Queue is empty";
            }
        return this.items.shift();
    }

    isEmpty() 
    {
        return this.items.length === 0;
    }

    getQueue() 
    {
        return this.items;
    }
}

const queue = new Queue();

function renderQueue() 
{
    const queueContainer = document.getElementById('queue');
    queueContainer.innerHTML = '';
    const elements = queue.getQueue();
    elements.forEach(element => 
        {
        const div = document.createElement('div');
        div.className = 'queue-element';
        div.innerText = element;
        queueContainer.appendChild(div);
        });
}

function enqueue() 
{
    const input = document.getElementById('enqueueInput');
    const value = input.value;
    if (value) 
        {
            queue.enqueue(value);
            input.value = '';
            renderQueue();
        }
}

function dequeue() 
{
    queue.dequeue();
    renderQueue();
}

renderQueue();
