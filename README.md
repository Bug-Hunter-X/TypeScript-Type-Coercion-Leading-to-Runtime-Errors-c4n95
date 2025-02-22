# TypeScript Type Coercion Bug

This repository demonstrates a subtle bug in TypeScript related to type coercion.  The `add` function is designed to add two numbers, but due to TypeScript's leniency in certain type checking scenarios, it compiles without error even when passed incompatible types.  This leads to a runtime error that is not easily caught during development.

The solution demonstrates how to improve type safety using type guards or more restrictive type definitions to prevent this kind of runtime error. 