/// <reference lib="webworker" />

export type ChronoAction = 'start' | 'stop' | 'reset';
const date = new Date(0, 0, 0, 0, 0, 0, 0);
let timeout: ReturnType<typeof setInterval> | null = null;

addEventListener('message', ({ data }: { data: ChronoAction }) => {
  if (data === 'start' && timeout === null) {
    timeout = setInterval(() => {
      date.setMilliseconds(date.getMilliseconds() + 10);
      postMessage(date);
    }, 10);
  } else if (data === 'stop' && timeout !== null) {
    clearInterval(timeout);
    timeout = null;
  } else if (data === 'reset') {
    if (timeout !== null) {
      clearInterval(timeout);
      timeout = null;
    }
    date.setHours(0, 0, 0, 0);
    postMessage(date);
  }
});
