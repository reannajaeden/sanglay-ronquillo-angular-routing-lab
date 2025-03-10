import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const AdminGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = false; // Change this logic as needed
  return isAuthenticated;
};
