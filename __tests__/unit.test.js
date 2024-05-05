// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test("phone number true1", () => {
  expect(isPhoneNumber('111 111-1111')).toBe(true);
});
test("phone number true2", () => {
  expect(isPhoneNumber('(999) 111-1111')).toBe(true);
});
test("phone number false1", () => {
  expect(isPhoneNumber('111')).toBe(false);
});
test("phone number false2", () => {
  expect(isPhoneNumber('(999) 111-111')).toBe(false);
});

test("email true1", () => {
  expect(isEmail('w@w.ww')).toBe(true);
});
test("email true2", () => {
  expect(isEmail('q@google.com')).toBe(true);
});
test("email false1", () => {
  expect(isEmail('1')).toBe(false);
});
test("email false2", () => {
  expect(isStrongPassword('(999) 111-111')).toBe(false);
});

test("password true1", () => {
  expect(isStrongPassword('w_w_ww')).toBe(true);
});
test("password true2", () => {
  expect(isStrongPassword('q_google_com')).toBe(true);
});
test("password false1", () => {
  expect(isStrongPassword('1')).toBe(false);
});
test("password false2", () => {
  expect(isStrongPassword('(999) 111-111')).toBe(false);
});

test("date true1", () => {
  expect(isDate('1/1/1111')).toBe(true);
});
test("date true2", () => {
  expect(isDate('99/99/9999')).toBe(true);
});
test("date false1", () => {
  expect(isDate('1')).toBe(false);
});
test("date false2", () => {
  expect(isDate('(999) 111-111')).toBe(false);
});

test("hex true1", () => {
  expect(isHexColor('ffffff')).toBe(true);
});
test("hex true2", () => {
  expect(isHexColor('a0a0a0')).toBe(true);
});
test("hex false1", () => {
  expect(isHexColor('1')).toBe(false);
});
test("hex false2", () => {
  expect(isHexColor('(999) 111-111')).toBe(false);
});