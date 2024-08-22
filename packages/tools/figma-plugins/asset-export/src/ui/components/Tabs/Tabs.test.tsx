import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tabs from './Tabs';

describe('Tabs Component', () => {
  it('should render without crashing', () => {
    const setActiveTab = jest.fn();
    render(<Tabs activeTab='export' setActiveTab={setActiveTab} />);
    expect(screen.getByText('Export')).toBeInTheDocument();
    expect(screen.getByText('Tools')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('should activate the correct tab', () => {
    const setActiveTab = jest.fn();
    render(<Tabs activeTab='export' setActiveTab={setActiveTab} />);
    expect(screen.getByText('Export')).toHaveClass('active');
    expect(screen.getByText('Tools')).not.toHaveClass('active');
    expect(screen.getByText('Settings')).not.toHaveClass('active');
  });

  it('should call setActiveTab with correct tab name when a tab is clicked', async () => {
    const setActiveTab = jest.fn();
    const user = userEvent.setup();
    render(<Tabs activeTab='export' setActiveTab={setActiveTab} />);
    await user.click(screen.getByText('Tools'));
    expect(setActiveTab).toHaveBeenCalled();
  });
});
