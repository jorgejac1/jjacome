import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shouldSuppressClick } from '../lib/swipe.ts';
test('keyboard activation survives a preceding swipe',()=>assert.equal(shouldSuppressClick(0,1500,1100),false));
test('immediate compatibility pointer click is suppressed',()=>assert.equal(shouldSuppressClick(1,1500,1100),true));
test('later intentional pointer activation is not suppressed',()=>assert.equal(shouldSuppressClick(1,1500,1501),false));
test('a click without a swipe proceeds',()=>assert.equal(shouldSuppressClick(1,0,1000),false));
