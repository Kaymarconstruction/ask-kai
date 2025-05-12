Here’s the initial draft for calculations.md:


---

calculations.md – Material Calculations Specifications

Overview

This document outlines all current and planned calculation requirements for the Ask Kai Quote Generator and Material Estimator. These will be implemented progressively using a Supabase calculations table or directly via code logic as needed.


---

1. General Calculations

Calculation	Formula / Logic	Notes

Board Quantity	(Deck Width × Deck Length) ÷ (Board Width + Gap)	Include board gap (default to 4mm if unspecified).
Joist Spacing	Fixed Values: 400mm or 450mm	User selection required.
Post Height	Pergola Height + Embedment Depth	Embedment based on code requirements.
Rafter Length Skillion	Pergola Width	Straight span.
Rafter Length Pitched	Half Width + Pythagoras Theorem	Rafter Length = √(half span² + height²). Add 200mm overhang if Colorbond or Polycarbonate.
Roof Sheet Amount	Pergola Length / Sheet Coverage Width	E.g., 760mm for Colorbond.
Ridge Beam Length	Pergola Length	
Ridge Cap Length	Pergola Length	
Collar Ties	Posts Interval	One tie per post location on pitched roof.
Barge Board Length	Pergola Width (each side)	Skillion only.
Roof Batten Spacing	Calculated based on Roofing Type	Will use building code defaults.



---

2. Calculation Categories

Category	Calculations Involved

Decking	Board Quantity, Joist Spacing, Subfloor Timber
Pergola	Rafter Length, Post Height, Roof Sheet Amount, Barge Length, Collar Ties, Roof Batten Size



---

3. Future Calculations

Calculation	Status	Notes

Concrete Volume	Planned	For stump/post holes.
Fixings Estimation	Planned	Nails, screws, etc.
Waste Allowance	Planned	Default to 10% unless specified.



---

4. Calculations API Schema (Supabase Table Example)

Column Name	Type	Description

id	UUID	Primary Key
project_type	TEXT	e.g., decking, pergola
region	TEXT	AUS, US, UK, etc.
formula	JSONB	Calculation logic
description	TEXT	Human-readable explanation
created_at	TIMESTAMP	Auto-generated



---

Would you like me to add a JSON example for how the formula field in Supabase could look?

