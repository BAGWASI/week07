import { describe, it, expect } from 'vitest';

// Temporary test used to demonstrate that a failing frontend
// test prevents the build-and-push stage from running (Task 7.2C).
describe('CI gate demonstration', () => {
  it('fails deliberately', () => {
    expect(1).toBe(2);
  });
});