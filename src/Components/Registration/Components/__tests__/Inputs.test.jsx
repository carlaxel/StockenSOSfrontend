import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { renderPrice } from '../Inputs';

describe('renderPrice', () => {
  let originalDate;
  
  beforeEach(() => {
    originalDate = global.Date;
  });

  afterEach(() => {
    global.Date = originalDate;
  });

  const mockDate = (isoDate) => {
    const mockDate = new Date(isoDate);
    global.Date = class extends Date {
      constructor() {
        return mockDate;
      }
    };
  };

  describe('before T-shirt cutoff date (Aug 15 2024)', () => {
    beforeEach(() => {
      mockDate('2024-08-14T12:00:00Z');
    });

    it('should charge 1200 for long race without shirts', () => {
      const form = { race: 'lång' };
      expect(renderPrice(form)).toBe(1200);
    });

    it('should charge 800 for medium race without shirts', () => {
      const form = { race: 'mellan' };
      expect(renderPrice(form)).toBe(800);
    });
  });

  describe('after T-shirt cutoff date (Aug 15 2024)', () => {
    beforeEach(() => {
      mockDate('2024-08-16T12:00:00Z');
    });

    it('should charge correct amount for long race with one shirt', () => {
      const form = { race: 'lång', shirt1: 'Herr M' };
      expect(renderPrice(form)).toBe(1450); // 1200 + 250
    });

    it('should charge correct amount for long race with two shirts', () => {
      const form = { race: 'lång', shirt1: 'Herr M', shirt2: 'Dam M' };
      expect(renderPrice(form)).toBe(1700); // 1200 + 500
    });

    it('should charge correct amount for medium race with two shirts', () => {
      const form = { race: 'mellan', shirt1: 'Herr M', shirt2: 'Dam M' };
      expect(renderPrice(form)).toBe(1300); // 800 + 500
    });
  });
}); 