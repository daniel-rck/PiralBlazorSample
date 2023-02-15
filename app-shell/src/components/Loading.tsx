import { Spinner, SpinnerSize } from '@fluentui/react';
import React from 'react';

export const Loading: React.FC = () => <Spinner className="m-5" size={SpinnerSize.large} />;
