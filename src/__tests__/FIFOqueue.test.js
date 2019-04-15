import FIFOqueue from '../components/FIFOqueue';

/***************************************
 // Queue of People
 // first in the queue will be the
 // first out of the queue
 ***************************************/
describe('Test FIFO queue', function() {
  it('tests FIFO queue add and pop', () => {
    const line = new FIFOqueue();
    expect(line).not.toBe(null);
    expect(line.queue.length).toBe(0);
    expect(line.addToQueue("Susie")).toBe(true);
    expect(line.queue[0]).toBe("Susie");
    expect(line.queue.length).toBe(1);
    expect(line.addToQueue("James")).toBe(true);
    expect(line.queue.length).toBe(2);
    expect(line.addToQueue("Chris")).toBe(true);
    expect(line.queue.length).toBe(3);
    expect(line.addToQueue("Anna")).toBe(true);
    expect(line.queue.length).toBe(4);
    expect(line.queue[1]).toBe("James");
    expect(line.queue[2]).toBe("Chris");
    expect(line.queue[3]).toBe("Anna");
    expect(line.firstFromQueue()).toBe("Susie");
    expect(line.queue.length).toBe(3);
    expect(line.firstFromQueue()).toBe("James");
    expect(line.queue.length).toBe(2);
    expect(line.firstFromQueue()).toBe("Chris");
    expect(line.queue.length).toBe(1);
    expect(line.firstFromQueue()).toBe("Anna");
    expect(line.queue.length).toBe(0);
    expect(line.firstFromQueue()).toBe("empty");
  });
})