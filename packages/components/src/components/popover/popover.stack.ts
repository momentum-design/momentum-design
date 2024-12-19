import type Popover from './popover.component';

class PopoverStack {
  private stack: Popover[] = [];

  push(popover: Popover) {
    this.stack.push(popover);
  }

  pop(): Popover | undefined {
    return this.stack.pop();
  }

  peek(): Popover | undefined {
    return this.stack[this.stack.length - 1];
  }

  remove(popover: Popover) {
    this.stack = this.stack.filter((item) => item !== popover);
  }

  clear() {
    this.stack = [];
  }
}

export const popoverStack = new PopoverStack();
