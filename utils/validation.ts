import { GoalInput } from '../types';

const requiredFieldsMessage = 'This field is required';

export const validateGoal = ({
  name,
  target,
  deadline,
}: GoalInput): { name?: string; target?: string; deadline?: string } => {
  const errors: { name?: string; target?: string; deadline?: string } = {};

  if (!name) {
    errors.name = requiredFieldsMessage;
  }

  if (!target) {
    errors.target = requiredFieldsMessage;
  }

  if (!deadline) {
    errors.deadline = requiredFieldsMessage;
  }

  return errors;
};

export const validateLogin = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): { email?: string; password?: string } => {
  const errors: { email?: string; password?: string } = {};

  if (!email) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Invalid email format';
  }

  if (!password) {
    errors.password = 'Password is required';
  }

  return errors;
};