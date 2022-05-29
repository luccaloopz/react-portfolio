import React, { useState } from 'react';

export default function portfolioHeader() {

    return (
        <>
            {/* calls on Navigation component which does the work of switching the pages along with including the actual Bootstrap NavBar */}
            <Navigation/>
        </>
    );
}