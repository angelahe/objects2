import LIFOqueue from '../components/LIFOqueue';

/***************************************
 // Sardines - a hide and seek LIFO queue
 // rules: you hide in a closet
 // as others find you, they hide in the
 // closet with you and they push you further in
 // when the game is done and everyone has
 // found you, the last person to find you
 // comes out of the closet first
 ***************************************/
describe('Test LIFO queue', function() {
  it('tests LIFO queue add and pop', () => {
    const closet = new LIFOqueue();
    expect(closet).not.toBe(null);
    expect(closet.queue.length).toBe(0);
    //put the hider in the closet
    expect(closet.addToQueue("Susie")).toBe(true);
    expect(closet.queue[0]).toBe("Susie");
    expect(closet.queue.length).toBe(1);
    //found you!  add the first seeker to the closet
    expect(closet.addToQueue("James")).toBe(true);
    expect(closet.queue.length).toBe(2);
    expect(closet.addToQueue("Chris")).toBe(true);
    expect(closet.queue.length).toBe(3);
    expect(closet.addToQueue("Anna")).toBe(true);
    expect(closet.queue.length).toBe(4);
    expect(closet.queue[1]).toBe("James");
    expect(closet.queue[2]).toBe("Chris");
    expect(closet.queue[3]).toBe("Anna");
    //everyone found you!  now everyone out of the closet!
    expect(closet.popFromQueue()).toBe("Anna");
    expect(closet.queue.length).toBe(3);
    expect(closet.popFromQueue()).toBe("Chris");
    expect(closet.queue.length).toBe(2);
    expect(closet.popFromQueue()).toBe("James");
    expect(closet.queue.length).toBe(1);
    expect(closet.popFromQueue()).toBe("Susie");
    expect(closet.queue.length).toBe(0);
    expect(closet.popFromQueue()).toBe("empty");
  });
})