//import "@testing-library/jest-dom";

import { config } from 'dotenv';

// Load .env file
config({ path: '.env' });

// Mock import.meta.env for Jest
Object.defineProperty(global, 'import', {
  value: {
    meta: {
      env: {
        VITE_API_KEY: process.env.VITE_API_KEY || 'test-api-key',
      },
    },
  },
  writable: true,
});

// Extend Jest with @testing-library/jest-dom matchers
import '@testing-library/jest-dom';
