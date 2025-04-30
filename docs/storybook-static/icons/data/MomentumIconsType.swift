import Foundation

@objc public enum MomentumIconsType: Int, CaseIterable {
    // swiftlint:disable:next identifier_name
    case _invalid

    // unhandledCase will be handled by the default case below
    // We need a default case to prevent the Xcode11 error: "the compiler is unable to check that this switch is exhaustive in reasonable time"
    // We need at least one unhandled case to avoid the warning: "Default will never be executed"
    case unhandledCase

    case accessibilityBold
    case accessibilityLight
    case accessibilityRegular
    case accessoriesBold
    case accessoriesFilled
    case accessoriesLight
    case accessoriesRegular
    case accordianBold
    case accordianLight
    case accordianRegular
    case activePresenceSmallFilled
    case activeSpeakerAlertBold
    case activeSpeakerAlertLight
    case activeSpeakerAlertRegular
    case activeSpeakerBold
    case activeSpeakerLight
    case activeSpeakerLockBold
    case activeSpeakerLockLight
    case activeSpeakerLockRegular
    case activeSpeakerRegular
    case addOptionBold
    case addOptionLight
    case addOptionRegular
    case addPhotoBold
    case addPhotoLight
    case addPhotoRegular
    case addPollBold
    case addPollLight
    case addPollRegular
    case addQuestionBold
    case addQuestionLight
    case addQuestionRegular
    case addVideoMarkerBold
    case addVideoMarkerLight
    case addVideoMarkerRegular
    case adjustAudioBold
    case adjustAudioLight
    case adjustAudioRegular
    case adjustBold
    case adjustFilled
    case adjustHorizontalBold
    case adjustHorizontalFilled
    case adjustHorizontalLight
    case adjustHorizontalRegular
    case adjustLight
    case adjustMicrophoneBold
    case adjustMicrophoneLight
    case adjustMicrophoneRegular
    case adjustRegular
    case adjustVideoBold
    case adjustVideoLight
    case adjustVideoRegular
    case adminBold
    case adminFilled
    case adminLight
    case adminRegular
    case advanceScheduleBold
    case advanceScheduleLight
    case advanceScheduleRegular
    case advancedNoiseRemovalBold
    case advancedNoiseRemovalLight
    case advancedNoiseRemovalRegular
    case agentUniqueCodeBold
    case agentUniqueCodeLight
    case agentUniqueCodeRegular
    case airplayBold
    case airplayLight
    case airplayRegular
    case alarmBold
    case alarmFilled
    case alarmLight
    case alarmRegular
    case alertActiveBold
    case alertActiveFilled
    case alertActiveLight
    case alertActiveRegular
    case alertBold
    case alertFilled
    case alertLight
    case alertMutedBold
    case alertMutedFilled
    case alertMutedLight
    case alertMutedRegular
    case alertRegular
    case alignBold
    case alignBottomBold
    case alignBottomFilled
    case alignBottomLight
    case alignBottomRegular
    case alignFilled
    case alignHorizontalCenterBold
    case alignHorizontalCenterFilled
    case alignHorizontalCenterLight
    case alignHorizontalCenterRegular
    case alignLeftBold
    case alignLeftFilled
    case alignLeftLight
    case alignLeftRegular
    case alignLight
    case alignRegular
    case alignRightBold
    case alignRightFilled
    case alignRightLight
    case alignRightRegular
    case alignTopBold
    case alignTopFilled
    case alignTopLight
    case alignTopRegular
    case alignVerticalCenterBold
    case alignVerticalCenterFilled
    case alignVerticalCenterLight
    case alignVerticalCenterRegular
    case allowToAnnotateBold
    case allowToAnnotateLight
    case allowToAnnotateRegular
    case alternateResponseBold
    case alternateResponseLight
    case alternateResponseRegular
    case analogHeadsetBold
    case analogHeadsetLight
    case analogHeadsetRegular
    case analysisBold
    case analysisFilled
    case analysisLight
    case analysisRegular
    case annotateBold
    case annotateFilled
    case annotateLight
    case annotateRegular
    case announcementBold
    case announcementFilled
    case announcementLight
    case announcementMutedBold
    case announcementMutedFilled
    case announcementMutedLight
    case announcementMutedRegular
    case announcementRegular
    case appPushBold
    case appPushLight
    case appPushRegular
    case appearanceBold
    case appearanceLight
    case appearanceRegular
    case applauseBold
    case applauseLight
    case applauseRegular
    case appleBold
    case appleFilled
    case appleLight
    case appleRegular
    case applicationBold
    case applicationLight
    case applicationPanelBold
    case applicationPanelLight
    case applicationPanelRegular
    case applicationRegular
    case applicationsBold
    case applicationsFilled
    case applicationsLight
    case applicationsRegular
    case approvalPendingBold
    case approvalPendingLight
    case approvalPendingRegular
    case approvalsBold
    case approvalsLight
    case approvalsRegular
    case appsBold
    case appsFilled
    case appsLight
    case appsRegular
    case archiveBold
    case archiveFilled
    case archiveLight
    case archiveRegular
    case areaChartBold
    case areaChartFilled
    case areaChartLight
    case areaChartRegular
    case areaSelectorBold
    case areaSelectorLight
    case areaSelectorRegular
    case arrowCircleDownBold
    case arrowCircleDownFilled
    case arrowCircleDownLight
    case arrowCircleDownRegular
    case arrowCircleLeftBold
    case arrowCircleLeftFilled
    case arrowCircleLeftLight
    case arrowCircleLeftRegular
    case arrowCircleRightBold
    case arrowCircleRightFilled
    case arrowCircleRightLight
    case arrowCircleRightRegular
    case arrowCircleUpBold
    case arrowCircleUpFilled
    case arrowCircleUpLight
    case arrowCircleUpRegular
    case arrowDownBold
    case arrowDownFilled
    case arrowDownLight
    case arrowDownRegular
    case arrowLeftBold
    case arrowLeftFilled
    case arrowLeftLight
    case arrowLeftRegular
    case arrowPointerCursorLight
    case arrowRightBold
    case arrowRightFilled
    case arrowRightLight
    case arrowRightRegular
    case arrowTailDownBold
    case arrowTailDownLight
    case arrowTailDownRegular
    case arrowTailUpBold
    case arrowTailUpLight
    case arrowTailUpRegular
    case arrowUpBold
    case arrowUpFilled
    case arrowUpLight
    case arrowUpRegular
    case askForHelpBold
    case askForHelpFilled
    case askForHelpLight
    case askForHelpRegular
    case assetsBold
    case assetsFilled
    case assetsLight
    case assetsRegular
    case assignHostBold
    case assignHostLight
    case assignHostRegular
    case assignPrivilegeBold
    case assignPrivilegeFilled
    case assignPrivilegeLight
    case assignPrivilegeRegular
    case attachmentBold
    case attachmentLight
    case attachmentRegular
    case attendantConsoleBold
    case attendantConsoleFilled
    case attendantConsoleLight
    case attendantConsoleRegular
    case audioBroadcastBold
    case audioBroadcastLight
    case audioBroadcastRegular
    case audioCallBold
    case audioCallFilled
    case audioCallLight
    case audioCallRegular
    case audioEnhancementBold
    case audioEnhancementFilled
    case audioEnhancementLight
    case audioEnhancementRegular
    case audioOnlyBold
    case audioOnlyLight
    case audioOnlyRegular
    case audioOptAllBold
    case audioOptAllLight
    case audioOptAllRegular
    case autoDetectionBold
    case autoDetectionLight
    case autoDetectionRegular
    case automationBold
    case automationLight
    case automationRegular
    case awayCallingPresenceBold
    case awayCallingPresenceFilled
    case awayCallingPresenceLight
    case awayCallingPresenceRegular
    case backBold
    case backLight
    case backRegular
    case backToFullScreenBold
    case backToFullScreenLight
    case backToFullScreenRegular
    case backToTopBold
    case backToTopLight
    case backToTopRegular
    case backlightBold
    case backlightLight
    case backlightRegular
    case backspaceBold
    case backspaceLight
    case backspaceRegular
    case backupDataBold
    case backupDataLight
    case backupDataRegular
    case barcodeBold
    case barcodeLight
    case barcodeRegular
    case batteryChargingBold
    case batteryChargingLight
    case batteryChargingRegular
    case batteryEmptyBold
    case batteryEmptyLight
    case batteryEmptyRegular
    case batteryHighBold
    case batteryHighLight
    case batteryHighRegular
    case batteryLowBold
    case batteryLowLight
    case batteryLowRegular
    case batteryMediumBold
    case batteryMediumLight
    case batteryMediumRegular
    case bitmojiConnectBold
    case bitmojiConnectLight
    case bitmojiConnectRegular
    case bitmojiConnectedBold
    case bitmojiConnectedFilled
    case bitmojiConnectedLight
    case bitmojiConnectedRegular
    case blindTransferBold
    case blindTransferLight
    case blindTransferRegular
    case blockQuoteBold
    case blockQuoteLight
    case blockQuoteRegular
    case blockedBold
    case blockedFilled
    case blockedLight
    case blockedRegular
    case bluetoothBold
    case bluetoothFilled
    case bluetoothLight
    case bluetoothMutedBold
    case bluetoothMutedLight
    case bluetoothMutedRegular
    case bluetoothRegular
    case boldBold
    case boldFilled
    case boldLight
    case boldRegular
    case bookmarkBold
    case bookmarkLight
    case bookmarkRegular
    case botBold
    case botCustomerAssistantBold
    case botCustomerAssistantLight
    case botCustomerAssistantRegular
    case botExpertAssistantBold
    case botExpertAssistantLight
    case botExpertAssistantRegular
    case botLight
    case botRegular
    case boxBold
    case boxLight
    case boxRegular
    case breakoutSessionBold
    case breakoutSessionFilled
    case breakoutSessionLight
    case breakoutSessionRegular
    case brightnessAutoBold
    case brightnessAutoLight
    case brightnessAutoRegular
    case brightnessBold
    case brightnessHighBold
    case brightnessHighLight
    case brightnessHighRegular
    case brightnessLight
    case brightnessLowBold
    case brightnessLowLight
    case brightnessLowRegular
    case brightnessRegular
    case brokenFileBold
    case brokenFileFilled
    case brokenFileLight
    case brokenFileRegular
    case browserBold
    case browserLight
    case browserRegular
    case busyPresenceBold
    case busyPresenceLight
    case busyPresenceRegular
    case buttonCursorBold
    case buttonCursorLight
    case buttonCursorRegular
    case calendarAddBold
    case calendarAddFilled
    case calendarAddLight
    case calendarAddRegular
    case calendarDayBold
    case calendarDayFilled
    case calendarDayLight
    case calendarDayRegular
    case calendarEmptyBold
    case calendarEmptyFilled
    case calendarEmptyLight
    case calendarEmptyRegular
    case calendarExternalBold
    case calendarExternalLight
    case calendarExternalRegular
    case calendarFilterBold
    case calendarFilterLight
    case calendarFilterRegular
    case calendarMonthBold
    case calendarMonthFilled
    case calendarMonthLight
    case calendarMonthMoreBold
    case calendarMonthMoreLight
    case calendarMonthMoreRegular
    case calendarMonthRegular
    case calendarTodayBold
    case calendarTodayLight
    case calendarTodayRegular
    case calendarWeekBold
    case calendarWeekFilled
    case calendarWeekLight
    case calendarWeekRegular
    case calendarWeekViewBold
    case calendarWeekViewFilled
    case calendarWeekViewLight
    case calendarWeekViewRegular
    case calendarWorkWeekBold
    case calendarWorkWeekFilled
    case calendarWorkWeekLight
    case calendarWorkWeekRegular
    case callBargeBold
    case callBargeFilled
    case callBargeLight
    case callBargeRegular
    case callBargeSilentBold
    case callBargeSilentLight
    case callBargeSilentRegular
    case callForwardSettingsBold
    case callForwardSettingsFilled
    case callForwardSettingsLight
    case callForwardSettingsRegular
    case callGroupPickupBold
    case callGroupPickupFilled
    case callGroupPickupLight
    case callGroupPickupRegular
    case callHandlingBold
    case callHandlingLight
    case callHandlingRegular
    case callHoldBold
    case callHoldFilled
    case callHoldLight
    case callHoldRegular
    case callIncomingBold
    case callIncomingLight
    case callIncomingRegular
    case callListBold
    case callListLight
    case callListRegular
    case callMergeBold
    case callMergeLight
    case callMergeRegular
    case callMissedBold
    case callMissedFilled
    case callMissedLight
    case callMissedRegular
    case callMoreBold
    case callMoreLight
    case callMoreRegular
    case callOutgoingBold
    case callOutgoingLight
    case callOutgoingRegular
    case callPickupBold
    case callPickupFilled
    case callPickupLight
    case callPickupOtherBold
    case callPickupOtherFilled
    case callPickupOtherLight
    case callPickupOtherRegular
    case callPickupRegular
    case callPrivateBold
    case callPrivateFilled
    case callPrivateLight
    case callPrivateRegular
    case callRemoteBold
    case callRemoteFilled
    case callRemoteLight
    case callRemoteRegular
    case callRequestBold
    case callRequestFilled
    case callRequestLight
    case callRequestRegular
    case callReturnBold
    case callReturnFilled
    case callReturnLight
    case callReturnRegular
    case callRoomBold
    case callRoomLight
    case callRoomRegular
    case callSettingsBold
    case callSettingsLight
    case callSettingsRegular
    case callSplitBold
    case callSplitLight
    case callSplitRegular
    case callSwapBold
    case callSwapLight
    case callSwapRegular
    case callVoicemailBold
    case callVoicemailLight
    case callVoicemailRegular
    case callrateBold
    case callrateLight
    case callrateRegular
    case cameraAuxBold
    case cameraAuxFilled
    case cameraAuxLight
    case cameraAuxRegular
    case cameraBold
    case cameraFilled
    case cameraLight
    case cameraMutedBold
    case cameraMutedCircleFilled
    case cameraMutedFilled
    case cameraMutedLight
    case cameraMutedRegular
    case cameraOnBold
    case cameraOnFilled
    case cameraOnLight
    case cameraOnRegular
    case cameraPhotoBold
    case cameraPhotoFilled
    case cameraPhotoLight
    case cameraPhotoRegular
    case cameraPresenceBold
    case cameraPresenceFilled
    case cameraPresenceLight
    case cameraPresenceRegular
    case cameraRegular
    case cameraSwapBold
    case cameraSwapLight
    case cameraSwapRegular
    case campaignManagementBold
    case campaignManagementLight
    case campaignManagementRegular
    case cancelBold
    case cancelLight
    case cancelRegular
    case capsLockBold
    case capsLockLight
    case capsLockRegular
    case captureRewindBold
    case captureRewindLight
    case captureRewindRegular
    case caroselBold
    case caroselLight
    case caroselRegular
    case carouselTextBold
    case carouselTextLight
    case carouselTextRegular
    case cellularBold
    case cellularLight
    case cellularRegular
    case centerAlignedBold
    case centerAlignedLight
    case centerAlignedRegular
    case centerBold
    case centerLight
    case centerRegular
    case certificateBold
    case certificateInvalidBold
    case certificateInvalidLight
    case certificateInvalidRegular
    case certificateLight
    case certificateRegular
    case certifiedBold
    case certifiedLight
    case certifiedRegular
    case chPSearchBold
    case chPSearchLight
    case chPSearchRegular
    case channelUssdBold
    case channelUssdLight
    case channelUssdRegular
    case chatBold
    case chatFilled
    case chatGroupBold
    case chatGroupFilled
    case chatGroupLight
    case chatGroupRegular
    case chatLight
    case chatMuteBold
    case chatMuteLight
    case chatMuteRegular
    case chatOutboundFilled
    case chatRegular
    case checkBold
    case checkCircleBadgeFilled
    case checkCircleBold
    case checkCircleFilled
    case checkCircleLight
    case checkCircleRegular
    case checkLight
    case checkRegular
    case checkboxGroupBold
    case checkboxGroupLight
    case checkboxGroupRegular
    case cleanUpBold
    case cleanUpLight
    case cleanUpRegular
    case clearBadgeFilled
    case clearBold
    case clearFilled
    case clearLight
    case clearRegular
    case closeSpaceBold
    case closeSpaceLight
    case closeSpaceRegular
    case closedCaptionBadgeBold
    case closedCaptionBadgeFilled
    case closedCaptionBadgeLight
    case closedCaptionBadgeRegular
    case closedCaptionsBold
    case closedCaptionsFilled
    case closedCaptionsLight
    case closedCaptionsRegular
    case cloudBold
    case cloudDownloadBold
    case cloudDownloadLight
    case cloudDownloadRegular
    case cloudFilled
    case cloudFrameBold
    case cloudFrameFilled
    case cloudFrameLight
    case cloudFrameRegular
    case cloudLight
    case cloudMutedBold
    case cloudMutedFilled
    case cloudMutedLight
    case cloudMutedRegular
    case cloudRegular
    case cloudUploadBold
    case cloudUploadLight
    case cloudUploadRegular
    case codeBlockBold
    case codeBlockLight
    case codeBlockRegular
    case coffeeBold
    case coffeeLight
    case coffeeRegular
    case colorBold
    case colorFilled
    case colorLight
    case colorRegular
    case colourPaletteBold
    case colourPaletteFilled
    case colourPaletteLight
    case colourPaletteRegular
    case commentingBold
    case commentingFilled
    case commentingLight
    case commentingRegular
    case companyBold
    case companyLight
    case companyRegular
    case completedByBaseBold
    case completedByBaseLight
    case completedByBaseRegular
    case completedByTimeBold
    case completedByTimeLight
    case completedByTimeRegular
    case computerBold
    case computerLight
    case computerRegular
    case conciergeBold
    case conciergeLight
    case conciergeRegular
    case conditionalBlockBold
    case conditionalBlockLight
    case conditionalBlockRegular
    case connectBold
    case connectLight
    case connectRegular
    case contactCardBold
    case contactCardFilled
    case contactCardLight
    case contactCardRegular
    case contactsBold
    case contactsFilled
    case contactsLight
    case contactsRegular
    case contentDownloadBold
    case contentDownloadFilled
    case contentDownloadLight
    case contentDownloadRegular
    case contentShareBold
    case contentShareLight
    case contentShareRegular
    case contrastBold
    case contrastLight
    case contrastRegular
    case copyBold
    case copyLight
    case copyRegular
    case cpuBold
    case cpuLight
    case cpuRegular
    case createAGroupBold
    case createAGroupFilled
    case createAGroupLight
    case createAGroupRegular
    case cropBold
    case cropLight
    case cropRegular
    case cucmConnectionBold
    case cucmConnectionLight
    case cucmConnectionRegular
    case customCodeEditorBold
    case customCodeEditorLight
    case customCodeEditorRegular
    case dailyRecurringScheduleBold
    case dailyRecurringScheduleLight
    case dailyRecurringScheduleRegular
    case dashboardBold
    case dashboardFilled
    case dashboardLight
    case dashboardRegular
    case dataManagementBold
    case dataManagementFilled
    case dataManagementLight
    case dataManagementRegular
    case dataRangeSelectionBold
    case dataRangeSelectionFilled
    case dataRangeSelectionLight
    case dataRangeSelectionRegular
    case declineBold
    case declineFilled
    case declineLight
    case declineRegular
    case dectHandsetBold
    case dectHandsetFilled
    case dectHandsetLight
    case dectHandsetRegular
    case deleteBold
    case deleteFilled
    case deleteLight
    case deleteRegular
    case deploymentEvaluationProgressBold
    case deploymentEvaluationProgressLight
    case deploymentEvaluationProgressRegular
    case deploymentProgressBold
    case deploymentProgressLight
    case deploymentProgressRegular
    case deploymentRecurringBold
    case deploymentRecurringLight
    case deploymentRecurringRegular
    case deploymentWinnerPendingBold
    case deploymentWinnerPendingLight
    case deploymentWinnerPendingRegular
    case deskPhoneBold
    case deskPhoneFilled
    case deskPhoneLight
    case deskPhoneRegular
    case deskPhoneWarningBold
    case deskPhoneWarningLight
    case deskPhoneWarningRegular
    case deviceConnectionBold
    case deviceConnectionFilled
    case deviceConnectionLight
    case deviceConnectionRegular
    case deviceInRoomBold
    case deviceInRoomEndBold
    case deviceInRoomEndLight
    case deviceInRoomEndRegular
    case deviceInRoomFilled
    case deviceInRoomLight
    case deviceInRoomRegular
    case deviceMutedBold
    case deviceMutedLight
    case deviceMutedRegular
    case devicePolicyControllerBold
    case devicePolicyControllerLight
    case devicePolicyControllerRegular
    case diagnosticsBold
    case diagnosticsLight
    case diagnosticsRegular
    case dialpadBold
    case dialpadLight
    case dialpadRegular
    case directionalPadBold
    case directionalPadFilled
    case directionalPadLight
    case directionalPadRegular
    case directoryBold
    case directoryLight
    case directoryRegular
    case disappearingPenBold
    case disappearingPenLight
    case disappearingPenRegular
    case discBold
    case discConnectedBold
    case discConnectedLight
    case discConnectedRegular
    case discLight
    case discRegular
    case disconnectBold
    case disconnectFilled
    case disconnectLight
    case disconnectRegular
    case dislikeBold
    case dislikeFilled
    case dislikeLight
    case dislikeRegular
    case displayBold
    case displayInputBold
    case displayInputLight
    case displayInputRegular
    case displayLight
    case displayRegular
    case displayWarningBold
    case displayWarningLight
    case displayWarningRegular
    case distributeHorizontalBold
    case distributeHorizontalFilled
    case distributeHorizontalLight
    case distributeHorizontalRegular
    case distributeVerticallyBold
    case distributeVerticallyFilled
    case distributeVerticallyLight
    case distributeVerticallyRegular
    case dndPresenceBadgeFilled
    case dndPresenceBold
    case dndPresenceFilled
    case dndPresenceLight
    case dndPresenceRegular
    case dockWindowBold
    case dockWindowLight
    case dockWindowRegular
    case documentBold
    case documentCameraBold
    case documentCameraDisconnectedBold
    case documentCameraDisconnectedLight
    case documentCameraDisconnectedRegular
    case documentCameraLight
    case documentCameraRegular
    case documentCreateBold
    case documentCreateFilled
    case documentCreateLight
    case documentCreateRegular
    case documentFilled
    case documentLight
    case documentMoveBold
    case documentMoveFilled
    case documentMoveLight
    case documentMoveRegular
    case documentRegular
    case documentShareBold
    case documentShareFilled
    case documentShareLight
    case documentShareRegular
    case doneAllBold
    case doneAllLight
    case doneAllRegular
    case donutChartBold
    case donutChartFilled
    case donutChartLight
    case donutChartRegular
    case downloadBold
    case downloadFilled
    case downloadLight
    case downloadRegular
    case draftBold
    case draftFilled
    case draftIndicatorBold
    case draftIndicatorSmallFilled
    case draftLight
    case draftRegular
    case dragBold
    case dragLight
    case dragRegular
    case draggerHorizontalBold
    case draggerHorizontalLight
    case draggerHorizontalRegular
    case draggerVerticalBold
    case draggerVerticalLight
    case draggerVerticalRegular
    case driveModeBold
    case driveModeLight
    case driveModeRegular
    case dropdownBold
    case dropdownLight
    case dropdownRegular
    case dxEightyBold
    case dxEightyFilled
    case dxEightyLight
    case dxEightyRegular
    case dxSeventyBold
    case dxSeventyLight
    case dxSeventyRegular
    case editBold
    case editFilled
    case editLight
    case editRegular
    case editablePartialBold
    case editablePartialLight
    case editablePartialRegular
    case educationBold
    case educationFilled
    case educationLight
    case educationRegular
    case emailBold
    case emailDeliveredBold
    case emailDeliveredLight
    case emailDeliveredRegular
    case emailFailureBold
    case emailFailureLight
    case emailFailureRegular
    case emailFilled
    case emailInviteBold
    case emailInviteLight
    case emailInviteRegular
    case emailLight
    case emailOutgoingBold
    case emailOutgoingFilled
    case emailOutgoingLight
    case emailOutgoingRegular
    case emailReadBold
    case emailReadFilled
    case emailReadLight
    case emailReadRegular
    case emailRegular
    case emojiExcitedBold
    case emojiExcitedFilled
    case emojiExcitedLight
    case emojiExcitedRegular
    case emojiHappyBold
    case emojiHappyFilled
    case emojiHappyLight
    case emojiHappyRegular
    case emojiPassiveBold
    case emojiPassiveFilled
    case emojiPassiveLight
    case emojiPassiveRegular
    case emojiSadBold
    case emojiSadFilled
    case emojiSadLight
    case emojiSadRegular
    case emojiUnhappyBold
    case emojiUnhappyFilled
    case emojiUnhappyLight
    case emojiUnhappyRegular
    case encryptionCircleFilled
    case encryptionFilled
    case endRemoteDesktopControlBold
    case endRemoteDesktopControlLight
    case endRemoteDesktopControlRegular
    case endToEndEncryptionCircleFilled
    case endToEndEncryptionFilled
    case endpointBlockedBold
    case endpointBlockedLight
    case endpointBlockedRegular
    case endpointBold
    case endpointGTwoBold
    case endpointGTwoLight
    case endpointGTwoRegular
    case endpointGTwoSeventyBold
    case endpointGTwoSeventyDualBold
    case endpointGTwoSeventyDualLight
    case endpointGTwoSeventyDualRegular
    case endpointGTwoSeventyLight
    case endpointGTwoSeventyRegular
    case endpointGTwoStandBold
    case endpointGTwoStandLight
    case endpointGTwoStandRegular
    case endpointLight
    case endpointMxEightHundredBold
    case endpointMxEightHundredDualBold
    case endpointMxEightHundredDualLight
    case endpointMxEightHundredDualRegular
    case endpointMxEightHundredLight
    case endpointMxEightHundredRegular
    case endpointRegular
    case endpointStandBold
    case endpointStandFilled
    case endpointStandLight
    case endpointStandRegular
    case endpointWarningBold
    case endpointWarningLight
    case endpointWarningRegular
    case enterBold
    case enterLight
    case enterRegular
    case enterRoomBold
    case enterRoomFilled
    case enterRoomLight
    case enterRoomRegular
    case eraserBold
    case eraserFilled
    case eraserLight
    case eraserRegular
    case errorLegacyBadgeFilled
    case errorLegacyBold
    case errorLegacyFilled
    case errorLegacyLight
    case errorLegacyRegular
    case ethernetBold
    case ethernetFilled
    case ethernetLight
    case ethernetRegular
    case exchangeBold
    case exchangeLight
    case exchangeRegular
    case exclamationBold
    case exclamationLight
    case exclamationRegular
    case excludeBold
    case excludeLight
    case excludeRegular
    case existingTargetGroupBold
    case existingTargetGroupLight
    case existingTargetGroupRegular
    case exitRoomBold
    case exitRoomLight
    case exitRoomRegular
    case exploreBold
    case exploreLight
    case exploreRegular
    case exportBold
    case exportLight
    case exportRegular
    case extensionMobilityBold
    case extensionMobilityLight
    case extensionMobilityRegular
    case externalMessageBold
    case externalMessageLight
    case externalMessageRegular
    case externalUserBold
    case externalUserLight
    case externalUserRegular
    case familyFontBold
    case familyFontLight
    case familyFontRegular
    case fastForwardBold
    case fastForwardLight
    case fastForwardRegular
    case favoriteBold
    case favoriteFilled
    case favoriteLight
    case favoriteRegular
    case favoritesBold
    case favoritesFilled
    case favoritesLight
    case favoritesRegular
    case fbwBold
    case fbwFilled
    case fbwLight
    case fbwRegular
    case ffwBold
    case ffwFilled
    case ffwLight
    case ffwRegular
    case fileAnalysisBold
    case fileAnalysisFilled
    case fileAnalysisLight
    case fileAnalysisRegular
    case fileAnnotationBold
    case fileAnnotationFilled
    case fileAnnotationLight
    case fileAnnotationRegular
    case fileAudioBold
    case fileAudioFilled
    case fileAudioLight
    case fileAudioRegular
    case fileBugBold
    case fileBugFilled
    case fileBugLight
    case fileBugRegular
    case fileCodeBold
    case fileCodeFilled
    case fileCodeLight
    case fileCodeRegular
    case fileDashboardBold
    case fileDashboardFilled
    case fileDashboardLight
    case fileDashboardRegular
    case fileExcelBold
    case fileExcelFilled
    case fileExcelLight
    case fileExcelRegular
    case fileGraphBold
    case fileGraphFilled
    case fileGraphLight
    case fileGraphRegular
    case fileImageBold
    case fileImageFilled
    case fileImageLight
    case fileImageNoneBold
    case fileImageNoneLight
    case fileImageNoneRegular
    case fileImageRegular
    case fileJsBold
    case fileJsFilled
    case fileJsLight
    case fileJsRegular
    case fileKeynoteBold
    case fileKeynoteFilled
    case fileKeynoteLight
    case fileKeynoteRegular
    case fileLockedBold
    case fileLockedFilled
    case fileLockedLight
    case fileLockedRegular
    case fileMissingBold
    case fileMissingFilled
    case fileMissingLight
    case fileMissingRegular
    case fileMusicBold
    case fileMusicFilled
    case fileMusicLight
    case fileMusicRegular
    case fileOnenoteBold
    case fileOnenoteFilled
    case fileOnenoteLight
    case fileOnenoteRegular
    case filePdfBold
    case filePdfFilled
    case filePdfLight
    case filePdfRegular
    case filePowerpointBold
    case filePowerpointFilled
    case filePowerpointLight
    case filePowerpointRegular
    case fileSpreadsheetBold
    case fileSpreadsheetFilled
    case fileSpreadsheetLight
    case fileSpreadsheetRegular
    case fileTextBold
    case fileTextFilled
    case fileTextLight
    case fileTextRegular
    case fileThreeDBold
    case fileThreeDFilled
    case fileThreeDLight
    case fileThreeDRegular
    case fileVectorBold
    case fileVectorFilled
    case fileVectorLight
    case fileVectorRegular
    case fileVideoBold
    case fileVideoFilled
    case fileVideoLight
    case fileVideoRegular
    case fileWordBold
    case fileWordFilled
    case fileWordLight
    case fileWordRegular
    case fileXmlBold
    case fileXmlFilled
    case fileXmlLight
    case fileXmlRegular
    case fileZipBold
    case fileZipFilled
    case fileZipLight
    case fileZipRegular
    case filesBold
    case filesFilled
    case filesLight
    case filesRegular
    case fillColourBold
    case fillColourFilled
    case fillColourLight
    case fillColourRegular
    case filterBold
    case filterCircleBold
    case filterCircleFilled
    case filterCircleLight
    case filterCircleRegular
    case filterLight
    case filterRegular
    case fitToWidthBold
    case fitToWidthLight
    case fitToWidthRegular
    case fitToWindowExpandBold
    case fitToWindowExpandLight
    case fitToWindowExpandRegular
    case fitToWindowShrinkBold
    case fitToWindowShrinkLight
    case fitToWindowShrinkRegular
    case flagBold
    case flagCircleBold
    case flagCircleFilled
    case flagCircleLight
    case flagCircleRegular
    case flagFilled
    case flagLight
    case flagRegular
    case folderBold
    case folderEditBold
    case folderEditLight
    case folderEditRegular
    case folderLight
    case folderLockBold
    case folderLockLight
    case folderLockRegular
    case folderRegular
    case folderViewBold
    case folderViewLight
    case folderViewRegular
    case followUpBold
    case followUpLight
    case followUpRegular
    case foodBold
    case foodFilled
    case foodLight
    case foodRegular
    case formatBold
    case formatDefaultAppBold
    case formatDefaultAppFilled
    case formatDefaultAppLight
    case formatDefaultAppRegular
    case formatLight
    case formatPanelControlBarBold
    case formatPanelControlBarLight
    case formatPanelControlBarRegular
    case formatPanelControlDownBold
    case formatPanelControlDownLight
    case formatPanelControlDownRegular
    case formatPanelControlLeftBold
    case formatPanelControlLeftLight
    case formatPanelControlLeftRegular
    case formatPanelControlRightBold
    case formatPanelControlRightLight
    case formatPanelControlRightRegular
    case formatPanelControlUpBold
    case formatPanelControlUpDownBold
    case formatPanelControlUpDownLight
    case formatPanelControlUpDownRegular
    case formatPanelControlUpLight
    case formatPanelControlUpRegular
    case formatRegular
    case formatViewMixedBold
    case formatViewMixedLight
    case formatViewMixedRegular
    case forwardMessageBold
    case forwardMessageFilled
    case forwardMessageLight
    case forwardMessageRegular
    case forwardTenSecBold
    case forwardTenSecLight
    case forwardTenSecRegular
    case fourColumnBold
    case fourColumnLight
    case fourColumnRegular
    case fourWayNavigationBold
    case fourWayNavigationLight
    case fourWayNavigationRegular
    case frequencyCappingBold
    case frequencyCappingLight
    case frequencyCappingRegular
    case fulfillmentBold
    case fulfillmentLight
    case fulfillmentRegular
    case fullscreenBold
    case fullscreenExitBold
    case fullscreenExitLight
    case fullscreenExitRegular
    case fullscreenLight
    case fullscreenRegular
    case genericDeviceVideoBadgeFilled
    case genericDeviceVideoBold
    case genericDeviceVideoFilled
    case genericDeviceVideoLight
    case genericDeviceVideoRegular
    case gifBold
    case gifFilled
    case gifHorizontalBold
    case gifHorizontalFilled
    case gifHorizontalLight
    case gifHorizontalRegular
    case gifLight
    case gifRegular
    case giftBold
    case giftFilled
    case giftLight
    case giftRegular
    case greenLeafBold
    case greenLeafFilled
    case greenLeafLight
    case greenLeafRegular
    case greenRoomBold
    case greenRoomFilled
    case greenRoomLight
    case greenRoomRegular
    case guestIssuerBold
    case guestIssuerLight
    case guestIssuerRegular
    case guideBold
    case guideLight
    case guideRegular
    case handPointerBold
    case handPointerLight
    case handPointerRegular
    case handlerBold
    case handlerHorizontalBold
    case handlerHorizontalLight
    case handlerHorizontalRegular
    case handlerLight
    case handlerRegular
    case handsetAlertBold
    case handsetAlertFilled
    case handsetAlertLight
    case handsetAlertRegular
    case handsetBold
    case handsetDownSlashBold
    case handsetDownSlashFilled
    case handsetDownSlashLight
    case handsetDownSlashRegular
    case handsetFilled
    case handsetLight
    case handsetMutedBold
    case handsetMutedFilled
    case handsetMutedLight
    case handsetMutedRegular
    case handsetRegular
    case handsetsArrowLeftBold
    case handsetsArrowLeftLight
    case handsetsArrowLeftRegular
    case handshakeBold
    case handshakeLight
    case handshakeRegular
    case headingOneBold
    case headingOneLight
    case headingOneRegular
    case headingThreeBold
    case headingThreeLight
    case headingThreeRegular
    case headingTwoBold
    case headingTwoLight
    case headingTwoRegular
    case headphonesBold
    case headphonesFilled
    case headphonesLight
    case headphonesMutedBold
    case headphonesMutedFilled
    case headphonesMutedLight
    case headphonesMutedRegular
    case headphonesRegular
    case headsetAlertBold
    case headsetAlertLight
    case headsetAlertRegular
    case headsetArrowDownBold
    case headsetArrowDownFilled
    case headsetArrowDownLight
    case headsetArrowDownRegular
    case headsetBold
    case headsetFilled
    case headsetLight
    case headsetMutedBold
    case headsetMutedLight
    case headsetMutedRegular
    case headsetPrivateBold
    case headsetPrivateLight
    case headsetPrivateRegular
    case headsetRegular
    case hearingBold
    case hearingImpairedBold
    case hearingImpairedLight
    case hearingImpairedRegular
    case hearingLight
    case hearingRegular
    case helpBold
    case helpCircleBold
    case helpCircleFilled
    case helpCircleLight
    case helpCircleRegular
    case helpLight
    case helpRegular
    case helpdeskBold
    case helpdeskFilled
    case helpdeskLight
    case helpdeskRegular
    case hideBold
    case hideFilled
    case hideLight
    case hideRegular
    case homeBold
    case homeFilled
    case homeLight
    case homeRegular
    case horizontalLineBold
    case horizontalLineLight
    case horizontalLineRegular
    case hotelingBold
    case hotelingFilled
    case hotelingLight
    case hotelingRegular
    case humidityBold
    case humidityLight
    case humidityRegular
    case huntGroupBold
    case huntGroupFilled
    case huntGroupLight
    case huntGroupRegular
    case idleBold
    case idleFilled
    case idleLight
    case idleRegular
    case immediateBold
    case immediateFilled
    case immediateLight
    case immediateRegular
    case importBold
    case importLight
    case importRegular
    case inCommonBold
    case inCommonLight
    case inCommonRegular
    case inboxBold
    case inboxFilled
    case inboxLight
    case inboxRegular
    case includeBold
    case includeLight
    case includeRegular
    case incognitoBold
    case incognitoFilled
    case incognitoLight
    case incognitoRegular
    case incomingCallLegacyBold
    case incomingCallLegacyFilled
    case incomingCallLegacyLight
    case incomingCallLegacyRegular
    case indentDecreaseBold
    case indentDecreaseLight
    case indentDecreaseRegular
    case indentIncreaseBold
    case indentIncreaseLight
    case indentIncreaseRegular
    case infoBadgeFilled
    case infoCircleBold
    case infoCircleFilled
    case infoCircleLight
    case infoCircleRegular
    case infoCircleTwoBold
    case infoCircleTwoFilled
    case infoCircleTwoLight
    case infoCircleTwoRegular
    case inputBold
    case inputDisconnectedBold
    case inputDisconnectedLight
    case inputDisconnectedRegular
    case inputLight
    case inputRegular
    case instantScheduleBold
    case instantScheduleFilled
    case instantScheduleLight
    case instantScheduleRegular
    case integrationsBold
    case integrationsLight
    case integrationsRegular
    case intelligentRoutingBold
    case intelligentRoutingLight
    case intelligentRoutingRegular
    case interactionBold
    case interactionFilled
    case interactionLight
    case interactionRegular
    case invitedUserBold
    case invitedUserLight
    case invitedUserRegular
    case italicBold
    case italicFilled
    case italicLight
    case italicRegular
    case joinAudioBold
    case joinAudioFilled
    case joinAudioLight
    case joinAudioRegular
    case keepInTouchBold
    case keepInTouchFilled
    case keepInTouchLight
    case keepInTouchRegular
    case keyboardBold
    case keyboardCloseBold
    case keyboardCloseLight
    case keyboardCloseRegular
    case keyboardLight
    case keyboardRegular
    case languageBold
    case languageFilled
    case languageLight
    case languageRegular
    case laptopBold
    case laptopDisconnectedBold
    case laptopDisconnectedLight
    case laptopDisconnectedRegular
    case laptopFilled
    case laptopLight
    case laptopRegular
    case laserPointerBold
    case laserPointerFilled
    case laserPointerLight
    case laserPointerRegular
    case launchBold
    case launchLight
    case launchRegular
    case layoutSideBySideVerticalBold
    case layoutSideBySideVerticalFilled
    case layoutSideBySideVerticalLight
    case layoutSideBySideVerticalRegular
    case leaveBreakoutSessionBold
    case leaveBreakoutSessionLight
    case leaveBreakoutSessionRegular
    case leaveDeviceBold
    case leaveDeviceLight
    case leaveDeviceRegular
    case likeBold
    case likeFilled
    case likeLight
    case likeRegular
    case linkBold
    case linkLight
    case linkRegular
    case listBulletedBold
    case listBulletedLight
    case listBulletedRegular
    case listMenuBold
    case listMenuLight
    case listMenuRegular
    case listNumberedBold
    case listNumberedLight
    case listNumberedRegular
    case liveBold
    case liveFilled
    case liveLight
    case liveRegular
    case locationBold
    case locationFilled
    case locationLight
    case locationRegular
    case longTextBoxBold
    case longTextBoxLight
    case longTextBoxRegular
    case lowerHandBold
    case lowerHandLight
    case lowerHandRegular
    case magicPenBold
    case magicPenFilled
    case magicPenLight
    case magicPenRegular
    case markAsUnreadBold
    case markAsUnreadLight
    case markAsUnreadRegular
    case markdownBold
    case markdownFilled
    case markdownLight
    case markdownRegular
    case markerBold
    case markerFilled
    case markerLight
    case markerRegular
    case maximizeBold
    case maximizeLight
    case maximizeRegular
    case mediaPlayerBold
    case mediaPlayerLight
    case mediaPlayerRegular
    case mediaQualityGoodBold
    case mediaQualityGoodFilled
    case mediaQualityGoodLight
    case mediaQualityGoodRegular
    case mediaQualityPoorBold
    case mediaQualityPoorFilled
    case mediaQualityPoorLight
    case mediaQualityPoorRegular
    case mediaQualityUnstableBold
    case mediaQualityUnstableFilled
    case mediaQualityUnstableLight
    case mediaQualityUnstableRegular
    case meetBold
    case meetEndBold
    case meetEndLight
    case meetEndRegular
    case meetFilled
    case meetLight
    case meetRegular
    case meetingSummaryBold
    case meetingSummaryFilled
    case meetingSummaryLight
    case meetingSummaryRegular
    case meetingsBold
    case meetingsFilled
    case meetingsFocusMonthBold
    case meetingsFocusMonthLight
    case meetingsFocusMonthRegular
    case meetingsFocusOneDayBold
    case meetingsFocusOneDayLight
    case meetingsFocusOneDayRegular
    case meetingsFocusThreeDayBold
    case meetingsFocusThreeDayLight
    case meetingsFocusThreeDayRegular
    case meetingsFocusUpcomingBold
    case meetingsFocusUpcomingLight
    case meetingsFocusUpcomingRegular
    case meetingsLight
    case meetingsPresenceBadgeFilled
    case meetingsPresenceBold
    case meetingsPresenceFilled
    case meetingsPresenceLight
    case meetingsPresenceRegular
    case meetingsRegular
    case meetingsTeamBold
    case meetingsTeamFilled
    case meetingsTeamLight
    case meetingsTeamNewBold
    case meetingsTeamNewLight
    case meetingsTeamNewRegular
    case meetingsTeamRegular
    case mentionBold
    case mentionLight
    case mentionRegular
    case messageQueingBold
    case messageQueingLight
    case messageQueingRegular
    case microphoneBold
    case microphoneFilled
    case microphoneHardMutedBold
    case microphoneHardMutedCircleFilled
    case microphoneHardMutedLight
    case microphoneHardMutedRegular
    case microphoneLight
    case microphoneMusicModeBold
    case microphoneMusicModeLight
    case microphoneMusicModeOnBold
    case microphoneMusicModeOnLight
    case microphoneMusicModeOnRegular
    case microphoneMusicModeRegular
    case microphoneMutedBold
    case microphoneMutedCircleFilled
    case microphoneMutedFilled
    case microphoneMutedLight
    case microphoneMutedRegular
    case microphoneOnBold
    case microphoneOnLight
    case microphoneOnRegular
    case microphoneOptAllBold
    case microphoneOptAllLight
    case microphoneOptAllMutedBold
    case microphoneOptAllMutedLight
    case microphoneOptAllMutedRegular
    case microphoneOptAllOnBold
    case microphoneOptAllOnLight
    case microphoneOptAllOnRegular
    case microphoneOptAllRegular
    case microphoneOptMeBold
    case microphoneOptMeLight
    case microphoneOptMeMutedBold
    case microphoneOptMeMutedLight
    case microphoneOptMeMutedRegular
    case microphoneOptMeOnBold
    case microphoneOptMeOnLight
    case microphoneOptMeOnRegular
    case microphoneOptMeRegular
    case microphoneRegular
    case mindMapBold
    case mindMapLight
    case mindMapRegular
    case minimizeBold
    case minimizeLight
    case minimizeRegular
    case minusBold
    case minusLight
    case minusRegular
    case mirrorBold
    case mirrorFilled
    case mirrorLight
    case mirrorRegular
    case mmsFilled
    case moderatorBold
    case moderatorLight
    case moderatorRegular
    case monitoringBold
    case monitoringLight
    case monitoringRegular
    case monthlyRecurringScheduleNodeBold
    case monthlyRecurringScheduleNodeLight
    case monthlyRecurringScheduleNodeRegular
    case moreAdrBold
    case moreAdrLight
    case moreAdrRegular
    case moreBold
    case moreCircleBold
    case moreCircleFilled
    case moreCircleLight
    case moreCircleRegular
    case moreLight
    case moreRegular
    case mouseCursorBold
    case mouseCursorLight
    case mouseCursorRegular
    case moveCallInAdrBold
    case moveCallInAdrLight
    case moveCallInAdrRegular
    case moveCallInIphBold
    case moveCallInIphLight
    case moveCallInIphRegular
    case moveCallInLaptopBold
    case moveCallInLaptopLight
    case moveCallInLaptopRegular
    case moveCallInOutAdrBold
    case moveCallInOutAdrLight
    case moveCallInOutAdrRegular
    case moveCallInOutIphBold
    case moveCallInOutIphLight
    case moveCallInOutIphRegular
    case moveCallInTabletBold
    case moveCallInTabletLight
    case moveCallInTabletRegular
    case moveCallOutAdrBold
    case moveCallOutAdrLight
    case moveCallOutAdrRegular
    case moveCallOutIphBold
    case moveCallOutIphLight
    case moveCallOutIphRegular
    case moveCallOutLaptopBold
    case moveCallOutLaptopLight
    case moveCallOutLaptopRegular
    case moveCallOutTabletBold
    case moveCallOutTabletLight
    case moveCallOutTabletRegular
    case moveToScreenBold
    case moveToScreenLight
    case moveToScreenRegular
    case multilineChartBold
    case multilineChartFilled
    case multilineChartLight
    case multilineChartRegular
    case multimediaBold
    case multimediaFilled
    case multimediaLight
    case multimediaRegular
    case multipledDevicesBold
    case multipledDevicesLight
    case multipledDevicesRegular
    case musicModeCircleBold
    case musicModeCircleFilled
    case musicModeCircleLight
    case musicModeCircleRegular
    case musicNoteBold
    case musicNoteFilled
    case musicNoteLight
    case musicNoteRegular
    case muteOnEntryBold
    case muteOnEntryFilled
    case muteOnEntryLight
    case muteOnEntryRegular
    case newManagerBold
    case newManagerLight
    case newManagerRegular
    case newTitleBold
    case newTitleLight
    case newTitleRegular
    case newVoicemailBold
    case newVoicemailLight
    case newVoicemailRegular
    case newWhiteboardBold
    case newWhiteboardLight
    case newWhiteboardRegular
    case nextBold
    case nextLight
    case nextRegular
    case noDevicesBold
    case noDevicesLight
    case noDevicesRegular
    case noiseDetectedCanceledFilled
    case noiseDetectedFilled
    case noiseNoneCanceledFilled
    case noiseNoneFilled
    case noiseRemovalBold
    case noiseRemovalLight
    case noiseRemovalRegular
    case noteBold
    case noteLight
    case notePptBold
    case notePptLight
    case notePptRegular
    case noteRegular
    case notesBold
    case notesFilled
    case notesLight
    case notesRegular
    case numberBold
    case numberLight
    case numberRegular
    case oldRemoteBold
    case oldRemoteLight
    case oldRemoteRegular
    case oldTouchBold
    case oldTouchLight
    case oldTouchRegular
    case oneColumnBold
    case oneColumnLight
    case oneColumnRegular
    case oneTimeBold
    case oneTimeLight
    case oneTimeRegular
    case openInFolderBold
    case openInFolderLight
    case openInFolderRegular
    case openPagesBold
    case openPagesLight
    case openPagesRegular
    case otherNumberBold
    case otherNumberFilled
    case otherNumberLight
    case otherNumberRegular
    case otherNumberWarningBold
    case otherNumberWarningLight
    case otherNumberWarningRegular
    case outgoingCallLegacyBold
    case outgoingCallLegacyFilled
    case outgoingCallLegacyLight
    case outgoingCallLegacyRegular
    case overflowLeftBold
    case overflowLeftLight
    case overflowLeftRegular
    case overflowRightBold
    case overflowRightLight
    case overflowRightRegular
    case pairedCameraBold
    case pairedCameraLight
    case pairedCameraRegular
    case pairedDeviceBold
    case pairedDeviceLight
    case pairedDeviceRegular
    case pairedHandsetBold
    case pairedHandsetLight
    case pairedHandsetRegular
    case pairingBold
    case pairingLight
    case pairingRegular
    case parkedBold
    case parkedFilled
    case parkedLight
    case parkedRegular
    case parseBold
    case parseLight
    case parseRegular
    case partialBold
    case partialLight
    case partialRegular
    case participantAddBold
    case participantAddLight
    case participantAddRegular
    case participantBlockedBold
    case participantBlockedLight
    case participantBlockedRegular
    case participantBold
    case participantFilled
    case participantLight
    case participantListBold
    case participantListFilled
    case participantListLight
    case participantListRegular
    case participantRegular
    case participantRemoveBold
    case participantRemoveLight
    case participantRemoveRegular
    case participantUnknownBold
    case participantUnknownLight
    case participantUnknownRegular
    case passMouseBold
    case passMouseLight
    case passMouseRegular
    case pauseBadgeFilled
    case pauseBold
    case pauseFilled
    case pauseLight
    case pauseRegular
    case peopleAddBold
    case peopleAddFilled
    case peopleAddLight
    case peopleAddRegular
    case peopleBold
    case peopleCircleBold
    case peopleCircleFilled
    case peopleCircleLight
    case peopleCircleRegular
    case peopleFilled
    case peopleInsightsBold
    case peopleInsightsFilled
    case peopleInsightsLight
    case peopleInsightsRegular
    case peopleLight
    case peopleRegular
    case phoneAlertBold
    case phoneAlertLight
    case phoneAlertRegular
    case phoneBadgeFilled
    case phoneBold
    case phoneFilled
    case phoneLight
    case phoneMutedBold
    case phoneMutedLight
    case phoneMutedRegular
    case phonePrivateBold
    case phonePrivateLight
    case phonePrivateRegular
    case phoneRegular
    case phoneReplyAllBold
    case phoneReplyAllLight
    case phoneReplyAllRegular
    case phoneReplyBold
    case phoneReplyLight
    case phoneReplyRegular
    case pickerBold
    case pickerLight
    case pickerRegular
    case pieChartBold
    case pieChartFilled
    case pieChartLight
    case pieChartRegular
    case pinBold
    case pinFilled
    case pinLight
    case pinListActivityBold
    case pinListActivityLight
    case pinListActivityRegular
    case pinListBold
    case pinListLight
    case pinListRegular
    case pinMutedBold
    case pinMutedFilled
    case pinMutedLight
    case pinMutedRegular
    case pinRegular
    case pipBold
    case pipEnterBold
    case pipEnterLight
    case pipEnterRegular
    case pipExitBold
    case pipExitLight
    case pipExitRegular
    case pipFilled
    case pipLight
    case pipRegular
    case placeholderBold
    case placeholderFilled
    case placeholderLight
    case placeholderRegular
    case playBold
    case playCircleBold
    case playCircleFilled
    case playCircleLight
    case playCircleRegular
    case playFilled
    case playLight
    case playRegular
    case plugAcBold
    case plugAcLight
    case plugAcRegular
    case plusBold
    case plusCircleBold
    case plusCircleFilled
    case plusCircleLight
    case plusCircleRegular
    case plusLight
    case plusRegular
    case pmrBold
    case pmrFilled
    case pmrLight
    case pmrRegular
    case pollBold
    case pollFilled
    case pollLight
    case pollRegular
    case popInBold
    case popInLight
    case popInRegular
    case popOutBold
    case popOutLight
    case popOutRegular
    case popUpBold
    case popUpLight
    case popUpRegular
    case portraitLandscapeBold
    case portraitLandscapeLight
    case portraitLandscapeRegular
    case potentialFraudBold
    case potentialFraudFilled
    case potentialFraudLight
    case potentialFraudRegular
    case powerAcBold
    case powerAcLight
    case powerAcRegular
    case powerBold
    case powerLight
    case powerRegular
    case preHeaderBold
    case preHeaderLight
    case preHeaderRegular
    case premiumBold
    case premiumLight
    case premiumRegular
    case presentationBold
    case presentationLight
    case presentationRegular
    case preventDownloadBold
    case preventDownloadFilled
    case preventDownloadLight
    case preventDownloadRegular
    case primaryParticipantBold
    case primaryParticipantLight
    case primaryParticipantRegular
    case printBold
    case printLight
    case printRegular
    case priorityBadgeFilled
    case priorityCircleBold
    case priorityCircleFilled
    case priorityCircleLight
    case priorityCircleRegular
    case priorityCircleTwoBold
    case priorityCircleTwoFilled
    case priorityCircleTwoLight
    case priorityCircleTwoRegular
    case priorityWaveBold
    case priorityWaveLight
    case priorityWaveRegular
    case privacyCircleBold
    case privacyCircleFilled
    case privacyCircleLight
    case privacyCircleRegular
    case privateBold
    case privateCircleBold
    case privateCircleFilled
    case privateCircleLight
    case privateCircleRegular
    case privateLight
    case privateMeetingBold
    case privateMeetingLight
    case privateMeetingRegular
    case privateRegular
    case productDemoBold
    case productDemoLight
    case productDemoRegular
    case proximityBold
    case proximityLight
    case proximityMutedBold
    case proximityMutedLight
    case proximityMutedRegular
    case proximityRegular
    case proximityVideoBold
    case proximityVideoLight
    case proximityVideoRegular
    case ptoPresenceBold
    case ptoPresenceFilled
    case ptoPresenceLight
    case ptoPresenceRegular
    case pullCallBold
    case pullCallFilled
    case pullCallLight
    case pullCallRegular
    case qABold
    case qALight
    case qARegular
    case qrCodeBold
    case qrCodeLight
    case qrCodeRegular
    case qrCodeScanBold
    case qrCodeScanLight
    case qrCodeScanRegular
    case qualityBold
    case qualityLight
    case qualityRegular
    case queueContactBold
    case queueContactFilled
    case queueContactLight
    case queueContactRegular
    case quietBold
    case quietHoursPresenceBold
    case quietHoursPresenceFilled
    case quietHoursPresenceLight
    case quietHoursPresenceRegular
    case quietLight
    case quietRegular
    case radioButtonGroupBold
    case radioButtonGroupLight
    case radioButtonGroupRegular
    case raiseHandBold
    case raiseHandCircleFilled
    case raiseHandFilled
    case raiseHandLight
    case raiseHandRegular
    case ramBold
    case ramLight
    case ramRegular
    case reactionsBold
    case reactionsFilled
    case reactionsLight
    case reactionsRegular
    case reactivateBold
    case reactivateLight
    case reactivateRegular
    case receiveVoiceBold
    case receiveVoiceFilled
    case receiveVoiceLight
    case receiveVoiceRegular
    case recentsBold
    case recentsFilled
    case recentsLight
    case recentsPresenceBadgeFilled
    case recentsPresenceBold
    case recentsPresenceFilled
    case recentsPresenceLight
    case recentsPresenceRegular
    case recentsRegular
    case recordActiveBadgeFilled
    case recordActiveBold
    case recordActiveFilled
    case recordActiveLight
    case recordActiveRegular
    case recordBold
    case recordFilled
    case recordLight
    case recordPausedBadgeFilled
    case recordPausedBold
    case recordPausedFilled
    case recordPausedLight
    case recordPausedRegular
    case recordRegular
    case recurringBold
    case recurringLight
    case recurringOffBold
    case recurringOffLight
    case recurringOffRegular
    case recurringRegular
    case redoBold
    case redoLight
    case redoRegular
    case refreshBold
    case refreshLight
    case refreshRegular
    case remoteDesktopControlBold
    case remoteDesktopControlFilled
    case remoteDesktopControlLight
    case remoteDesktopControlRegular
    case removeBold
    case removeFilled
    case removeLight
    case removeRegular
    case replyBold
    case replyFilled
    case replyLight
    case replyListBold
    case replyListLight
    case replyListRegular
    case replyPrivatelyBold
    case replyPrivatelyLight
    case replyPrivatelyRegular
    case replyRegular
    case resetBold
    case resetLight
    case resetRegular
    case resizeCornerBold
    case resizeCornerLight
    case resizeCornerRegular
    case responsiveMobileBold
    case responsiveMobileLight
    case responsiveMobileRegular
    case restartBold
    case restartLight
    case restartRegular
    case retrieveCallBold
    case retrieveCallFilled
    case retrieveCallLight
    case retrieveCallRegular
    case returnBold
    case returnLight
    case returnRegular
    case rewindTenSecBold
    case rewindTenSecLight
    case rewindTenSecRegular
    case ringtoneBold
    case ringtoneLight
    case ringtoneRegular
    case roomCalendarBold
    case roomCalendarLight
    case roomCalendarRegular
    case roomLightsBold
    case roomLightsFilled
    case roomLightsLight
    case roomLightsRegular
    case rotateContentBold
    case rotateContentFilled
    case rotateContentLight
    case rotateContentRegular
    case rssBold
    case rssFilled
    case rssLight
    case rssRegular
    case ruleBasedBold
    case ruleBasedLight
    case ruleBasedRegular
    case runningApplicationBold
    case runningApplicationFilled
    case runningApplicationLight
    case runningApplicationRegular
    case saveBold
    case saveLight
    case saveRegular
    case saveTranscriptBold
    case saveTranscriptFilled
    case saveTranscriptLight
    case saveTranscriptRegular
    case scanBold
    case scanLight
    case scanRegular
    case scheduleSendBold
    case scheduleSendFilled
    case scheduleSendLight
    case scheduleSendRegular
    case scheduleWinnerBold
    case scheduleWinnerFilled
    case scheduleWinnerLight
    case scheduleWinnerRegular
    case schedulerAvailableBold
    case schedulerAvailableLight
    case schedulerAvailableRegular
    case schedulerNotWorkingHoursBold
    case schedulerNotWorkingHoursLight
    case schedulerNotWorkingHoursRegular
    case schedulerUnavailableBold
    case schedulerUnavailableLight
    case schedulerUnavailableRegular
    case schedulerUnknownBold
    case schedulerUnknownLight
    case schedulerUnknownRegular
    case screenshotBold
    case screenshotDocBold
    case screenshotDocFilled
    case screenshotDocLight
    case screenshotDocRegular
    case screenshotLight
    case screenshotRegular
    case searchBold
    case searchFilled
    case searchLight
    case searchRegular
    case secondaryArrowBold
    case secondaryArrowLight
    case secondaryArrowRegular
    case secureCallLockBold
    case secureCallLockFilled
    case secureCallLockLight
    case secureCallLockRegular
    case secureCallShieldBold
    case secureCallShieldFilled
    case secureCallShieldLight
    case secureCallShieldRegular
    case secureCircleBold
    case secureCircleFilled
    case secureCircleLight
    case secureCircleRegular
    case secureLockBold
    case secureLockFilled
    case secureLockLight
    case secureLockRegular
    case segmentExcludeFilled
    case segmentFilterFilled
    case segmentIncludeFilled
    case selectAllBold
    case selectAllFilled
    case selectAllLight
    case selectAllRegular
    case selectionBold
    case selectionFilled
    case selectionLight
    case selectionRegular
    case sendBold
    case sendDigitsBold
    case sendDigitsFilled
    case sendDigitsLight
    case sendDigitsRegular
    case sendFilled
    case sendLight
    case sendRegular
    case sendVoiceBold
    case sendVoiceFilled
    case sendVoiceLight
    case sendVoiceRegular
    case serverBold
    case serverErrorBold
    case serverErrorLight
    case serverErrorRegular
    case serverLight
    case serverRegular
    case servicesBold
    case servicesLight
    case servicesRegular
    case setVariableBold
    case setVariableLight
    case setVariableRegular
    case settingsBold
    case settingsFilled
    case settingsLight
    case settingsRegular
    case setupAssistantBold
    case setupAssistantLight
    case setupAssistantRegular
    case sftpBold
    case sftpLight
    case sftpRegular
    case shapeCircleBold
    case shapeCircleFilled
    case shapeCircleLight
    case shapeCircleMdFilled
    case shapeCircleRegular
    case shapeCircleSmFilled
    case shapeDiagonalLineBold
    case shapeDiagonalLineLight
    case shapeDiagonalLineRegular
    case shapeDiamondBold
    case shapeDiamondFilled
    case shapeDiamondLight
    case shapeDiamondRegular
    case shapeOvalBold
    case shapeOvalLight
    case shapeOvalRegular
    case shapeSquareBold
    case shapeSquareFilled
    case shapeSquareLight
    case shapeSquareRegular
    case shapeTriangleBold
    case shapeTriangleFilled
    case shapeTriangleLight
    case shapeTriangleRegular
    case shapesBold
    case shapesFilled
    case shapesLight
    case shapesRegular
    case shareCNativeAdrBold
    case shareCNativeAdrFilled
    case shareCNativeAdrLight
    case shareCNativeAdrRegular
    case shareCNativeIphBold
    case shareCNativeIphLight
    case shareCNativeIphRegular
    case shareContentOnDeviceBold
    case shareContentOnDeviceLight
    case shareContentOnDeviceRegular
    case shareScreenAddBold
    case shareScreenAddLight
    case shareScreenAddRegular
    case shareScreenBadgeFilled
    case shareScreenBold
    case shareScreenFilled
    case shareScreenLight
    case shareScreenRegular
    case shareSpaceBold
    case shareSpaceLight
    case shareSpaceRegular
    case shieldBold
    case shieldLight
    case shieldRegular
    case shoppingCartBold
    case shoppingCartFilled
    case shoppingCartLight
    case shoppingCartRegular
    case shortTextBoxBold
    case shortTextBoxLight
    case shortTextBoxRegular
    case showBold
    case showFilled
    case showLight
    case showRegular
    case signInBold
    case signInFilled
    case signInForcedBold
    case signInForcedLight
    case signInForcedRegular
    case signInLight
    case signInRegular
    case signLangIntBold
    case signLangIntLight
    case signLangIntRegular
    case signOutBold
    case signOutLight
    case signOutRegular
    case signalFourBold
    case signalFourLight
    case signalFourRegular
    case signalOneBold
    case signalOneLight
    case signalOneRegular
    case signalThreeBold
    case signalThreeLight
    case signalThreeRegular
    case signalTwoBold
    case signalTwoLight
    case signalTwoRegular
    case signalZeroBold
    case signalZeroLight
    case signalZeroRegular
    case simplePromotionBold
    case simplePromotionLight
    case simplePromotionRegular
    case singleNumberReachBold
    case singleNumberReachLight
    case singleNumberReachRegular
    case sipRegistrationInProgressBold
    case sipRegistrationInProgressFilled
    case sipRegistrationInProgressLight
    case sipRegistrationInProgressRegular
    case skipBold
    case skipBwBold
    case skipBwFilled
    case skipBwLight
    case skipBwRegular
    case skipFwBold
    case skipFwFilled
    case skipFwLight
    case skipFwRegular
    case skipLight
    case skipRegular
    case smartAudioBold
    case smartAudioLight
    case smartAudioRegular
    case smsFilled
    case smsInboundBold
    case smsInboundLight
    case smsInboundRegular
    case smsMessageBold
    case smsMessageFilled
    case smsMessageLight
    case smsMessageRegular
    case smsOutgoingFilled
    case smsUnreadBold
    case smsUnreadLight
    case smsUnreadRegular
    case sortAscendingBold
    case sortAscendingLight
    case sortAscendingRegular
    case sortDescendingBold
    case sortDescendingLight
    case sortDescendingRegular
    case soundDefaultBold
    case soundDefaultLight
    case soundDefaultRegular
    case sparkleBold
    case sparkleFilled
    case sparkleLight
    case sparkleRegular
    case speakerBold
    case speakerDisconnectedBold
    case speakerDisconnectedFilled
    case speakerDisconnectedLight
    case speakerDisconnectedRegular
    case speakerFilled
    case speakerLight
    case speakerMutedBold
    case speakerMutedFilled
    case speakerMutedLight
    case speakerMutedRegular
    case speakerOffBold
    case speakerOffFilled
    case speakerOffLight
    case speakerOffRegular
    case speakerOnBold
    case speakerOnLight
    case speakerOnRegular
    case speakerRegular
    case speakerTurnDownBold
    case speakerTurnDownFilled
    case speakerTurnDownLight
    case speakerTurnDownRegular
    case speakerTurnUpBold
    case speakerTurnUpFilled
    case speakerTurnUpLight
    case speakerTurnUpRegular
    case speedDialBold
    case speedDialFilled
    case speedDialLight
    case speedDialRegular
    case spellCheckerBold
    case spellCheckerLight
    case spellCheckerRegular
    case splitViewBold
    case splitViewLight
    case splitViewRegular
    case stackedAreaChartBold
    case stackedAreaChartFilled
    case stackedAreaChartFullBold
    case stackedAreaChartFullFilled
    case stackedAreaChartFullLight
    case stackedAreaChartFullRegular
    case stackedAreaChartLight
    case stackedAreaChartRegular
    case stackedBarChartBold
    case stackedBarChartFilled
    case stackedBarChartFullBold
    case stackedBarChartFullFilled
    case stackedBarChartFullLight
    case stackedBarChartFullRegular
    case stackedBarChartLight
    case stackedBarChartRegular
    case startChatBold
    case startChatLight
    case startChatRegular
    case stethoscopeBold
    case stethoscopeLight
    case stethoscopeRegular
    case stickersBold
    case stickersLight
    case stickersRegular
    case stickiesBold
    case stickiesLight
    case stickiesRegular
    case stopBold
    case stopCircleBold
    case stopCircleFilled
    case stopCircleLight
    case stopCircleRegular
    case stopContentShareBold
    case stopContentShareLight
    case stopContentShareRegular
    case stopFilled
    case stopLight
    case stopRegular
    case storedInfoBold
    case storedInfoFilled
    case storedInfoLight
    case storedInfoRegular
    case streamingBold
    case streamingLight
    case streamingRegular
    case strikethroughBold
    case strikethroughFilled
    case strikethroughLight
    case strikethroughRegular
    case studioModeBold
    case studioModeLight
    case studioModeRegular
    case subscriptBold
    case subscriptLight
    case subscriptRegular
    case superscriptBold
    case superscriptLight
    case superscriptRegular
    case surveyBold
    case surveyFilled
    case surveyLight
    case surveyRegular
    case sxEightyCodecBold
    case sxEightyCodecLight
    case sxEightyCodecRegular
    case sxTenBold
    case sxTenLight
    case sxTenRegular
    case sxTwentyBold
    case sxTwentyLight
    case sxTwentyRegular
    case tableBold
    case tableLight
    case tableRegular
    case tabletBold
    case tabletLight
    case tabletRegular
    case tabsBold
    case tabsLight
    case tabsRegular
    case tagBold
    case tagLight
    case tagRegular
    case tapBold
    case tapFilled
    case tapLight
    case tapRegular
    case telepresenceAlertBold
    case telepresenceAlertLight
    case telepresenceAlertMutedBold
    case telepresenceAlertMutedLight
    case telepresenceAlertMutedRegular
    case telepresenceAlertRegular
    case telepresenceBold
    case telepresenceIxFiveThousandBold
    case telepresenceIxFiveThousandLight
    case telepresenceIxFiveThousandRegular
    case telepresenceLight
    case telepresenceMutedBold
    case telepresenceMutedLight
    case telepresenceMutedRegular
    case telepresencePrivateBold
    case telepresencePrivateLight
    case telepresencePrivateRegular
    case telepresenceRegular
    case temperatureBold
    case temperatureLight
    case temperatureRegular
    case testTubeBold
    case testTubeFilled
    case testTubeLight
    case testTubeRegular
    case textAlignCenterBold
    case textAlignCenterFilled
    case textAlignCenterLight
    case textAlignCenterRegular
    case textAlignLeftBold
    case textAlignLeftFilled
    case textAlignLeftLight
    case textAlignLeftRegular
    case textAlignRightBold
    case textAlignRightFilled
    case textAlignRightLight
    case textAlignRightRegular
    case textBold
    case textBoxCursorLight
    case textCodeBlockBold
    case textCodeBlockLight
    case textCodeBlockRegular
    case textHighlightBold
    case textHighlightFilled
    case textHighlightLight
    case textHighlightRegular
    case textLight
    case textRegular
    case threeColumnBold
    case threeColumnLight
    case threeColumnRegular
    case threeDObjectBold
    case threeDObjectLight
    case threeDObjectRegular
    case timeExclusionBold
    case timeExclusionLight
    case timeExclusionRegular
    case tooFastBold
    case tooFastLight
    case tooFastRegular
    case tooSlowBold
    case tooSlowLight
    case tooSlowRegular
    case toolsBold
    case toolsFilled
    case toolsLight
    case toolsRegular
    case touchTenBold
    case touchTenLight
    case touchTenRegular
    case transcriptBold
    case transcriptFilled
    case transcriptLight
    case transcriptRegular
    case translateBold
    case translateLight
    case translateRegular
    case translateUndoBold
    case translateUndoLight
    case translateUndoRegular
    case trendingBold
    case trendingDownBold
    case trendingDownFilled
    case trendingDownLight
    case trendingDownRegular
    case trendingFilled
    case trendingLight
    case trendingRegular
    case trimBold
    case trimLight
    case trimRegular
    case twoColumnBold
    case twoColumnLight
    case twoColumnRegular
    case twoWayVoiceStreamBold
    case twoWayVoiceStreamFilled
    case twoWayVoiceStreamLight
    case twoWayVoiceStreamRegular
    case ucmCloudBold
    case ucmCloudLight
    case ucmCloudRegular
    case unblockBold
    case unblockFilled
    case unblockLight
    case unblockRegular
    case underlineBold
    case underlineFilled
    case underlineLight
    case underlineRegular
    case undoBold
    case undoLight
    case undoRegular
    case unlinkBold
    case unlinkLight
    case unlinkRegular
    case unreadBold
    case unreadFilled
    case unreadLight
    case unreadRegular
    case unsecureUnlockedBold
    case unsecureUnlockedFilled
    case unsecureUnlockedLight
    case unsecureUnlockedRegular
    case unsortedBold
    case unsortedLight
    case unsortedRegular
    case updateFileShareBold
    case updateFileShareLight
    case updateFileShareRegular
    case uploadBold
    case uploadImageBold
    case uploadImageLight
    case uploadImageRegular
    case uploadLight
    case uploadRegular
    case urgentVoicemailBold
    case urgentVoicemailFilled
    case usbBold
    case usbHeadsetBold
    case usbHeadsetLight
    case usbHeadsetMutedBold
    case usbHeadsetMutedLight
    case usbHeadsetMutedRegular
    case usbHeadsetRegular
    case usbLight
    case usbRegular
    case userBold
    case userDeactivateBold
    case userDeactivateLight
    case userDeactivateRegular
    case userLight
    case userRegular
    case videoBlurBold
    case videoBlurFilled
    case videoBlurLight
    case videoBlurRegular
    case videoBold
    case videoEffectBold
    case videoEffectFilled
    case videoEffectLight
    case videoEffectRegular
    case videoFilled
    case videoLayoutBold
    case videoLayoutEqualBold
    case videoLayoutEqualDualBold
    case videoLayoutEqualDualLight
    case videoLayoutEqualDualRegular
    case videoLayoutEqualFilled
    case videoLayoutEqualLight
    case videoLayoutEqualRegular
    case videoLayoutFilled
    case videoLayoutLight
    case videoLayoutOverlayBold
    case videoLayoutOverlayFilled
    case videoLayoutOverlayLight
    case videoLayoutOverlayRegular
    case videoLayoutPresenterDominantBold
    case videoLayoutPresenterDominantLight
    case videoLayoutPresenterDominantRegular
    case videoLayoutProminentBold
    case videoLayoutProminentFilled
    case videoLayoutProminentLight
    case videoLayoutProminentRegular
    case videoLayoutRegular
    case videoLayoutShareDominantBold
    case videoLayoutShareDominantLight
    case videoLayoutShareDominantRegular
    case videoLayoutSingleBold
    case videoLayoutSingleFilled
    case videoLayoutSingleLight
    case videoLayoutSingleRegular
    case videoLayoutStackBold
    case videoLayoutStackFilled
    case videoLayoutStackLight
    case videoLayoutStackRegular
    case videoLayoutVideoDominantBold
    case videoLayoutVideoDominantFilled
    case videoLayoutVideoDominantLight
    case videoLayoutVideoDominantRegular
    case videoLight
    case videoPlusBold
    case videoPlusFilled
    case videoPlusLight
    case videoPlusRegular
    case videoRegular
    case videoSpeakerTrackBold
    case videoSpeakerTrackFilled
    case videoSpeakerTrackLight
    case videoSpeakerTrackRegular
    case viewAllBold
    case viewAllLight
    case viewAllRegular
    case viewListBold
    case viewListFilled
    case viewListLight
    case viewListRegular
    case viewStackedBold
    case viewStackedFilled
    case viewStackedLight
    case viewStackedRegular
    case viewThumbnailBold
    case viewThumbnailFilled
    case viewThumbnailLight
    case viewThumbnailRegular
    case visionproBold
    case visionproFilled
    case visionproLight
    case visionproMoveCallInBold
    case visionproMoveCallInFilled
    case visionproMoveCallInLight
    case visionproMoveCallInOutBold
    case visionproMoveCallInOutFilled
    case visionproMoveCallInOutLight
    case visionproMoveCallInOutRegular
    case visionproMoveCallInRegular
    case visionproMoveCallOutBold
    case visionproMoveCallOutFilled
    case visionproMoveCallOutLight
    case visionproMoveCallOutRegular
    case visionproRegular
    case voicemailBold
    case voicemailFilled
    case voicemailLight
    case voicemailRegular
    case vpnBold
    case vpnFilled
    case vpnLight
    case vpnRegular
    case vscBold
    case vscLight
    case vscRegular
    case waffleMenuBold
    case waffleMenuLight
    case waffleMenuRegular
    case waitingRoomBold
    case waitingRoomLight
    case waitingRoomRegular
    case wallpaperBold
    case wallpaperLight
    case wallpaperRegular
    case warningBadgeFilled
    case warningBold
    case warningFilled
    case warningLight
    case warningRegular
    case webexBoardBold
    case webexBoardLight
    case webexBoardRegular
    case webexCodecPlusBold
    case webexCodecPlusLight
    case webexCodecPlusRegular
    case webexDeskCameraBold
    case webexDeskCameraLight
    case webexDeskCameraRegular
    case webexMeetingsBold
    case webexMeetingsFilled
    case webexMeetingsLight
    case webexMeetingsRegular
    case webexQuadCameraBold
    case webexQuadCameraLight
    case webexQuadCameraRegular
    case webexRoomKitBold
    case webexRoomKitLight
    case webexRoomKitPlusBold
    case webexRoomKitPlusLight
    case webexRoomKitPlusRegular
    case webexRoomKitRegular
    case webexShareBold
    case webexShareLight
    case webexShareRegular
    case webexTeamsBold
    case webexTeamsFilled
    case webexTeamsLight
    case webexTeamsNewBold
    case webexTeamsNewFilled
    case webexTeamsNewLight
    case webexTeamsNewRegular
    case webexTeamsRegular
    case webexTeamsRemoveBold
    case webexTeamsRemoveLight
    case webexTeamsRemoveRegular
    case webinarBold
    case webinarFilled
    case webinarLight
    case webinarRegular
    case weeklyRecurringScheduleBold
    case weeklyRecurringScheduleLight
    case weeklyRecurringScheduleRegular
    case whisperAnnouncementBold
    case whisperAnnouncementFilled
    case whisperAnnouncementLight
    case whisperAnnouncementRegular
    case whisperCoachBold
    case whisperCoachFilled
    case whisperCoachLight
    case whisperCoachRegular
    case whiteboardBold
    case whiteboardContentBold
    case whiteboardContentFilled
    case whiteboardContentLight
    case whiteboardContentRegular
    case whiteboardFilled
    case whiteboardLight
    case whiteboardRegular
    case widgetBold
    case widgetFilled
    case widgetLight
    case widgetRegular
    case wifiBold
    case wifiErrorBold
    case wifiErrorLight
    case wifiErrorRegular
    case wifiLight
    case wifiRegular
    case wifiSignalGoodBold
    case wifiSignalGoodLight
    case wifiSignalGoodRegular
    case wifiSignalPoorBold
    case wifiSignalPoorLight
    case wifiSignalPoorRegular
    case wifiSignalUnstableBold
    case wifiSignalUnstableLight
    case wifiSignalUnstableRegular
    case windowCornerScrubBold
    case windowCornerScrubLight
    case windowCornerScrubRegular
    case windowRightCornerScrubBold
    case windowRightCornerScrubLight
    case windowRightCornerScrubRegular
    case windowVerticalScrubBold
    case windowVerticalScrubLight
    case windowVerticalScrubRegular
    case workflowDeploymentsBold
    case workflowDeploymentsFilled
    case workflowDeploymentsLight
    case workflowDeploymentsRegular
    case workphoneBold
    case workphoneLight
    case workphoneRegular
    case zoomInBold
    case zoomInLight
    case zoomInRegular
    case zoomOutBold
    case zoomOutLight
    case zoomOutRegular

    public var ligature: String {
        switch self {
        case ._invalid: return ""
        case .unhandledCase: return ""
        case .accessibilityBold: return "\u{f101}"
        case .accessibilityLight: return "\u{f102}"
        case .accessibilityRegular: return "\u{f103}"
        case .accessoriesBold: return "\u{f104}"
        case .accessoriesFilled: return "\u{f105}"
        case .accessoriesLight: return "\u{f106}"
        case .accessoriesRegular: return "\u{f107}"
        case .accordianBold: return "\u{f108}"
        case .accordianLight: return "\u{f109}"
        case .accordianRegular: return "\u{f10a}"
        case .activePresenceSmallFilled: return "\u{f10b}"
        case .activeSpeakerAlertBold: return "\u{f10c}"
        case .activeSpeakerAlertLight: return "\u{f10d}"
        case .activeSpeakerAlertRegular: return "\u{f10e}"
        case .activeSpeakerBold: return "\u{f10f}"
        case .activeSpeakerLight: return "\u{f110}"
        case .activeSpeakerLockBold: return "\u{f111}"
        case .activeSpeakerLockLight: return "\u{f112}"
        case .activeSpeakerLockRegular: return "\u{f113}"
        case .activeSpeakerRegular: return "\u{f114}"
        case .addOptionBold: return "\u{f115}"
        case .addOptionLight: return "\u{f116}"
        case .addOptionRegular: return "\u{f117}"
        case .addPhotoBold: return "\u{f118}"
        case .addPhotoLight: return "\u{f119}"
        case .addPhotoRegular: return "\u{f11a}"
        case .addPollBold: return "\u{f11b}"
        case .addPollLight: return "\u{f11c}"
        case .addPollRegular: return "\u{f11d}"
        case .addQuestionBold: return "\u{f11e}"
        case .addQuestionLight: return "\u{f11f}"
        case .addQuestionRegular: return "\u{f120}"
        case .addVideoMarkerBold: return "\u{f121}"
        case .addVideoMarkerLight: return "\u{f122}"
        case .addVideoMarkerRegular: return "\u{f123}"
        case .adjustAudioBold: return "\u{f124}"
        case .adjustAudioLight: return "\u{f125}"
        case .adjustAudioRegular: return "\u{f126}"
        case .adjustBold: return "\u{f127}"
        case .adjustFilled: return "\u{f128}"
        case .adjustHorizontalBold: return "\u{f129}"
        case .adjustHorizontalFilled: return "\u{f12a}"
        case .adjustHorizontalLight: return "\u{f12b}"
        case .adjustHorizontalRegular: return "\u{f12c}"
        case .adjustLight: return "\u{f12d}"
        case .adjustMicrophoneBold: return "\u{f12e}"
        case .adjustMicrophoneLight: return "\u{f12f}"
        case .adjustMicrophoneRegular: return "\u{f130}"
        case .adjustRegular: return "\u{f131}"
        case .adjustVideoBold: return "\u{f132}"
        case .adjustVideoLight: return "\u{f133}"
        case .adjustVideoRegular: return "\u{f134}"
        case .adminBold: return "\u{f135}"
        case .adminFilled: return "\u{f136}"
        case .adminLight: return "\u{f137}"
        case .adminRegular: return "\u{f138}"
        case .advanceScheduleBold: return "\u{f139}"
        case .advanceScheduleLight: return "\u{f13a}"
        case .advanceScheduleRegular: return "\u{f13b}"
        case .advancedNoiseRemovalBold: return "\u{f13c}"
        case .advancedNoiseRemovalLight: return "\u{f13d}"
        case .advancedNoiseRemovalRegular: return "\u{f13e}"
        case .agentUniqueCodeBold: return "\u{f13f}"
        case .agentUniqueCodeLight: return "\u{f140}"
        case .agentUniqueCodeRegular: return "\u{f141}"
        case .airplayBold: return "\u{f142}"
        case .airplayLight: return "\u{f143}"
        case .airplayRegular: return "\u{f144}"
        case .alarmBold: return "\u{f145}"
        case .alarmFilled: return "\u{f146}"
        case .alarmLight: return "\u{f147}"
        case .alarmRegular: return "\u{f148}"
        case .alertActiveBold: return "\u{f149}"
        case .alertActiveFilled: return "\u{f14a}"
        case .alertActiveLight: return "\u{f14b}"
        case .alertActiveRegular: return "\u{f14c}"
        case .alertBold: return "\u{f14d}"
        case .alertFilled: return "\u{f14e}"
        case .alertLight: return "\u{f14f}"
        case .alertMutedBold: return "\u{f150}"
        case .alertMutedFilled: return "\u{f151}"
        case .alertMutedLight: return "\u{f152}"
        case .alertMutedRegular: return "\u{f153}"
        case .alertRegular: return "\u{f154}"
        case .alignBold: return "\u{f155}"
        case .alignBottomBold: return "\u{f156}"
        case .alignBottomFilled: return "\u{f157}"
        case .alignBottomLight: return "\u{f158}"
        case .alignBottomRegular: return "\u{f159}"
        case .alignFilled: return "\u{f15a}"
        case .alignHorizontalCenterBold: return "\u{f15b}"
        case .alignHorizontalCenterFilled: return "\u{f15c}"
        case .alignHorizontalCenterLight: return "\u{f15d}"
        case .alignHorizontalCenterRegular: return "\u{f15e}"
        case .alignLeftBold: return "\u{f15f}"
        case .alignLeftFilled: return "\u{f160}"
        case .alignLeftLight: return "\u{f161}"
        case .alignLeftRegular: return "\u{f162}"
        case .alignLight: return "\u{f163}"
        case .alignRegular: return "\u{f164}"
        case .alignRightBold: return "\u{f165}"
        case .alignRightFilled: return "\u{f166}"
        case .alignRightLight: return "\u{f167}"
        case .alignRightRegular: return "\u{f168}"
        case .alignTopBold: return "\u{f169}"
        case .alignTopFilled: return "\u{f16a}"
        case .alignTopLight: return "\u{f16b}"
        case .alignTopRegular: return "\u{f16c}"
        case .alignVerticalCenterBold: return "\u{f16d}"
        case .alignVerticalCenterFilled: return "\u{f16e}"
        case .alignVerticalCenterLight: return "\u{f16f}"
        case .alignVerticalCenterRegular: return "\u{f170}"
        case .allowToAnnotateBold: return "\u{f171}"
        case .allowToAnnotateLight: return "\u{f172}"
        case .allowToAnnotateRegular: return "\u{f173}"
        case .alternateResponseBold: return "\u{f174}"
        case .alternateResponseLight: return "\u{f175}"
        case .alternateResponseRegular: return "\u{f176}"
        case .analogHeadsetBold: return "\u{f177}"
        case .analogHeadsetLight: return "\u{f178}"
        case .analogHeadsetRegular: return "\u{f179}"
        case .analysisBold: return "\u{f17a}"
        case .analysisFilled: return "\u{f17b}"
        case .analysisLight: return "\u{f17c}"
        case .analysisRegular: return "\u{f17d}"
        case .annotateBold: return "\u{f17e}"
        case .annotateFilled: return "\u{f17f}"
        case .annotateLight: return "\u{f180}"
        case .annotateRegular: return "\u{f181}"
        case .announcementBold: return "\u{f182}"
        case .announcementFilled: return "\u{f183}"
        case .announcementLight: return "\u{f184}"
        case .announcementMutedBold: return "\u{f185}"
        case .announcementMutedFilled: return "\u{f186}"
        case .announcementMutedLight: return "\u{f187}"
        case .announcementMutedRegular: return "\u{f188}"
        case .announcementRegular: return "\u{f189}"
        case .appPushBold: return "\u{f18a}"
        case .appPushLight: return "\u{f18b}"
        case .appPushRegular: return "\u{f18c}"
        case .appearanceBold: return "\u{f18d}"
        case .appearanceLight: return "\u{f18e}"
        case .appearanceRegular: return "\u{f18f}"
        case .applauseBold: return "\u{f190}"
        case .applauseLight: return "\u{f191}"
        case .applauseRegular: return "\u{f192}"
        case .appleBold: return "\u{f193}"
        case .appleFilled: return "\u{f194}"
        case .appleLight: return "\u{f195}"
        case .appleRegular: return "\u{f196}"
        case .applicationBold: return "\u{f197}"
        case .applicationLight: return "\u{f198}"
        case .applicationPanelBold: return "\u{f199}"
        case .applicationPanelLight: return "\u{f19a}"
        case .applicationPanelRegular: return "\u{f19b}"
        case .applicationRegular: return "\u{f19c}"
        case .applicationsBold: return "\u{f19d}"
        case .applicationsFilled: return "\u{f19e}"
        case .applicationsLight: return "\u{f19f}"
        case .applicationsRegular: return "\u{f1a0}"
        case .approvalPendingBold: return "\u{f1a1}"
        case .approvalPendingLight: return "\u{f1a2}"
        case .approvalPendingRegular: return "\u{f1a3}"
        case .approvalsBold: return "\u{f1a4}"
        case .approvalsLight: return "\u{f1a5}"
        case .approvalsRegular: return "\u{f1a6}"
        case .appsBold: return "\u{f1a7}"
        case .appsFilled: return "\u{f1a8}"
        case .appsLight: return "\u{f1a9}"
        case .appsRegular: return "\u{f1aa}"
        case .archiveBold: return "\u{f1ab}"
        case .archiveFilled: return "\u{f1ac}"
        case .archiveLight: return "\u{f1ad}"
        case .archiveRegular: return "\u{f1ae}"
        case .areaChartBold: return "\u{f1af}"
        case .areaChartFilled: return "\u{f1b0}"
        case .areaChartLight: return "\u{f1b1}"
        case .areaChartRegular: return "\u{f1b2}"
        case .areaSelectorBold: return "\u{f1b3}"
        case .areaSelectorLight: return "\u{f1b4}"
        case .areaSelectorRegular: return "\u{f1b5}"
        case .arrowCircleDownBold: return "\u{f1b6}"
        case .arrowCircleDownFilled: return "\u{f1b7}"
        case .arrowCircleDownLight: return "\u{f1b8}"
        case .arrowCircleDownRegular: return "\u{f1b9}"
        case .arrowCircleLeftBold: return "\u{f1ba}"
        case .arrowCircleLeftFilled: return "\u{f1bb}"
        case .arrowCircleLeftLight: return "\u{f1bc}"
        case .arrowCircleLeftRegular: return "\u{f1bd}"
        case .arrowCircleRightBold: return "\u{f1be}"
        case .arrowCircleRightFilled: return "\u{f1bf}"
        case .arrowCircleRightLight: return "\u{f1c0}"
        case .arrowCircleRightRegular: return "\u{f1c1}"
        case .arrowCircleUpBold: return "\u{f1c2}"
        case .arrowCircleUpFilled: return "\u{f1c3}"
        case .arrowCircleUpLight: return "\u{f1c4}"
        case .arrowCircleUpRegular: return "\u{f1c5}"
        case .arrowDownBold: return "\u{f1c6}"
        case .arrowDownFilled: return "\u{f1c7}"
        case .arrowDownLight: return "\u{f1c8}"
        case .arrowDownRegular: return "\u{f1c9}"
        case .arrowLeftBold: return "\u{f1ca}"
        case .arrowLeftFilled: return "\u{f1cb}"
        case .arrowLeftLight: return "\u{f1cc}"
        case .arrowLeftRegular: return "\u{f1cd}"
        case .arrowPointerCursorLight: return "\u{f1ce}"
        case .arrowRightBold: return "\u{f1cf}"
        case .arrowRightFilled: return "\u{f1d0}"
        case .arrowRightLight: return "\u{f1d1}"
        case .arrowRightRegular: return "\u{f1d2}"
        case .arrowTailDownBold: return "\u{f1d3}"
        case .arrowTailDownLight: return "\u{f1d4}"
        case .arrowTailDownRegular: return "\u{f1d5}"
        case .arrowTailUpBold: return "\u{f1d6}"
        case .arrowTailUpLight: return "\u{f1d7}"
        case .arrowTailUpRegular: return "\u{f1d8}"
        case .arrowUpBold: return "\u{f1d9}"
        case .arrowUpFilled: return "\u{f1da}"
        case .arrowUpLight: return "\u{f1db}"
        case .arrowUpRegular: return "\u{f1dc}"
        case .askForHelpBold: return "\u{f1dd}"
        case .askForHelpFilled: return "\u{f1de}"
        case .askForHelpLight: return "\u{f1df}"
        case .askForHelpRegular: return "\u{f1e0}"
        case .assetsBold: return "\u{f1e1}"
        case .assetsFilled: return "\u{f1e2}"
        case .assetsLight: return "\u{f1e3}"
        case .assetsRegular: return "\u{f1e4}"
        case .assignHostBold: return "\u{f1e5}"
        case .assignHostLight: return "\u{f1e6}"
        case .assignHostRegular: return "\u{f1e7}"
        case .assignPrivilegeBold: return "\u{f1e8}"
        case .assignPrivilegeFilled: return "\u{f1e9}"
        case .assignPrivilegeLight: return "\u{f1ea}"
        case .assignPrivilegeRegular: return "\u{f1eb}"
        case .attachmentBold: return "\u{f1ec}"
        case .attachmentLight: return "\u{f1ed}"
        case .attachmentRegular: return "\u{f1ee}"
        case .attendantConsoleBold: return "\u{f1ef}"
        case .attendantConsoleFilled: return "\u{f1f0}"
        case .attendantConsoleLight: return "\u{f1f1}"
        case .attendantConsoleRegular: return "\u{f1f2}"
        case .audioBroadcastBold: return "\u{f1f3}"
        case .audioBroadcastLight: return "\u{f1f4}"
        case .audioBroadcastRegular: return "\u{f1f5}"
        case .audioCallBold: return "\u{f1f6}"
        case .audioCallFilled: return "\u{f1f7}"
        case .audioCallLight: return "\u{f1f8}"
        case .audioCallRegular: return "\u{f1f9}"
        case .audioEnhancementBold: return "\u{f1fa}"
        case .audioEnhancementFilled: return "\u{f1fb}"
        case .audioEnhancementLight: return "\u{f1fc}"
        case .audioEnhancementRegular: return "\u{f1fd}"
        case .audioOnlyBold: return "\u{f1fe}"
        case .audioOnlyLight: return "\u{f1ff}"
        case .audioOnlyRegular: return "\u{f200}"
        case .audioOptAllBold: return "\u{f201}"
        case .audioOptAllLight: return "\u{f202}"
        case .audioOptAllRegular: return "\u{f203}"
        case .autoDetectionBold: return "\u{f204}"
        case .autoDetectionLight: return "\u{f205}"
        case .autoDetectionRegular: return "\u{f206}"
        case .automationBold: return "\u{f207}"
        case .automationLight: return "\u{f208}"
        case .automationRegular: return "\u{f209}"
        case .awayCallingPresenceBold: return "\u{f20a}"
        case .awayCallingPresenceFilled: return "\u{f20b}"
        case .awayCallingPresenceLight: return "\u{f20c}"
        case .awayCallingPresenceRegular: return "\u{f20d}"
        case .backBold: return "\u{f20e}"
        case .backLight: return "\u{f20f}"
        case .backRegular: return "\u{f210}"
        case .backToFullScreenBold: return "\u{f211}"
        case .backToFullScreenLight: return "\u{f212}"
        case .backToFullScreenRegular: return "\u{f213}"
        case .backToTopBold: return "\u{f214}"
        case .backToTopLight: return "\u{f215}"
        case .backToTopRegular: return "\u{f216}"
        case .backlightBold: return "\u{f217}"
        case .backlightLight: return "\u{f218}"
        case .backlightRegular: return "\u{f219}"
        case .backspaceBold: return "\u{f21a}"
        case .backspaceLight: return "\u{f21b}"
        case .backspaceRegular: return "\u{f21c}"
        case .backupDataBold: return "\u{f21d}"
        case .backupDataLight: return "\u{f21e}"
        case .backupDataRegular: return "\u{f21f}"
        case .barcodeBold: return "\u{f220}"
        case .barcodeLight: return "\u{f221}"
        case .barcodeRegular: return "\u{f222}"
        case .batteryChargingBold: return "\u{f223}"
        case .batteryChargingLight: return "\u{f224}"
        case .batteryChargingRegular: return "\u{f225}"
        case .batteryEmptyBold: return "\u{f226}"
        case .batteryEmptyLight: return "\u{f227}"
        case .batteryEmptyRegular: return "\u{f228}"
        case .batteryHighBold: return "\u{f229}"
        case .batteryHighLight: return "\u{f22a}"
        case .batteryHighRegular: return "\u{f22b}"
        case .batteryLowBold: return "\u{f22c}"
        case .batteryLowLight: return "\u{f22d}"
        case .batteryLowRegular: return "\u{f22e}"
        case .batteryMediumBold: return "\u{f22f}"
        case .batteryMediumLight: return "\u{f230}"
        case .batteryMediumRegular: return "\u{f231}"
        case .bitmojiConnectBold: return "\u{f232}"
        case .bitmojiConnectLight: return "\u{f233}"
        case .bitmojiConnectRegular: return "\u{f234}"
        case .bitmojiConnectedBold: return "\u{f235}"
        case .bitmojiConnectedFilled: return "\u{f236}"
        case .bitmojiConnectedLight: return "\u{f237}"
        case .bitmojiConnectedRegular: return "\u{f238}"
        case .blindTransferBold: return "\u{f239}"
        case .blindTransferLight: return "\u{f23a}"
        case .blindTransferRegular: return "\u{f23b}"
        case .blockQuoteBold: return "\u{f23c}"
        case .blockQuoteLight: return "\u{f23d}"
        case .blockQuoteRegular: return "\u{f23e}"
        case .blockedBold: return "\u{f23f}"
        case .blockedFilled: return "\u{f240}"
        case .blockedLight: return "\u{f241}"
        case .blockedRegular: return "\u{f242}"
        case .bluetoothBold: return "\u{f243}"
        case .bluetoothFilled: return "\u{f244}"
        case .bluetoothLight: return "\u{f245}"
        case .bluetoothMutedBold: return "\u{f246}"
        case .bluetoothMutedLight: return "\u{f247}"
        case .bluetoothMutedRegular: return "\u{f248}"
        case .bluetoothRegular: return "\u{f249}"
        case .boldBold: return "\u{f24a}"
        case .boldFilled: return "\u{f24b}"
        case .boldLight: return "\u{f24c}"
        case .boldRegular: return "\u{f24d}"
        case .bookmarkBold: return "\u{f24e}"
        case .bookmarkLight: return "\u{f24f}"
        case .bookmarkRegular: return "\u{f250}"
        case .botBold: return "\u{f251}"
        case .botCustomerAssistantBold: return "\u{f252}"
        case .botCustomerAssistantLight: return "\u{f253}"
        case .botCustomerAssistantRegular: return "\u{f254}"
        case .botExpertAssistantBold: return "\u{f255}"
        case .botExpertAssistantLight: return "\u{f256}"
        case .botExpertAssistantRegular: return "\u{f257}"
        case .botLight: return "\u{f258}"
        case .botRegular: return "\u{f259}"
        case .boxBold: return "\u{f25a}"
        case .boxLight: return "\u{f25b}"
        case .boxRegular: return "\u{f25c}"
        case .breakoutSessionBold: return "\u{f25d}"
        case .breakoutSessionFilled: return "\u{f25e}"
        case .breakoutSessionLight: return "\u{f25f}"
        case .breakoutSessionRegular: return "\u{f260}"
        case .brightnessAutoBold: return "\u{f261}"
        case .brightnessAutoLight: return "\u{f262}"
        case .brightnessAutoRegular: return "\u{f263}"
        case .brightnessBold: return "\u{f264}"
        case .brightnessHighBold: return "\u{f265}"
        case .brightnessHighLight: return "\u{f266}"
        case .brightnessHighRegular: return "\u{f267}"
        case .brightnessLight: return "\u{f268}"
        case .brightnessLowBold: return "\u{f269}"
        case .brightnessLowLight: return "\u{f26a}"
        case .brightnessLowRegular: return "\u{f26b}"
        case .brightnessRegular: return "\u{f26c}"
        case .brokenFileBold: return "\u{f26d}"
        case .brokenFileFilled: return "\u{f26e}"
        case .brokenFileLight: return "\u{f26f}"
        case .brokenFileRegular: return "\u{f270}"
        case .browserBold: return "\u{f271}"
        case .browserLight: return "\u{f272}"
        case .browserRegular: return "\u{f273}"
        case .busyPresenceBold: return "\u{f274}"
        case .busyPresenceLight: return "\u{f275}"
        case .busyPresenceRegular: return "\u{f276}"
        case .buttonCursorBold: return "\u{f277}"
        case .buttonCursorLight: return "\u{f278}"
        case .buttonCursorRegular: return "\u{f279}"
        case .calendarAddBold: return "\u{f27a}"
        case .calendarAddFilled: return "\u{f27b}"
        case .calendarAddLight: return "\u{f27c}"
        case .calendarAddRegular: return "\u{f27d}"
        case .calendarDayBold: return "\u{f27e}"
        case .calendarDayFilled: return "\u{f27f}"
        case .calendarDayLight: return "\u{f280}"
        case .calendarDayRegular: return "\u{f281}"
        case .calendarEmptyBold: return "\u{f282}"
        case .calendarEmptyFilled: return "\u{f283}"
        case .calendarEmptyLight: return "\u{f284}"
        case .calendarEmptyRegular: return "\u{f285}"
        case .calendarExternalBold: return "\u{f286}"
        case .calendarExternalLight: return "\u{f287}"
        case .calendarExternalRegular: return "\u{f288}"
        case .calendarFilterBold: return "\u{f289}"
        case .calendarFilterLight: return "\u{f28a}"
        case .calendarFilterRegular: return "\u{f28b}"
        case .calendarMonthBold: return "\u{f28c}"
        case .calendarMonthFilled: return "\u{f28d}"
        case .calendarMonthLight: return "\u{f28e}"
        case .calendarMonthMoreBold: return "\u{f28f}"
        case .calendarMonthMoreLight: return "\u{f290}"
        case .calendarMonthMoreRegular: return "\u{f291}"
        case .calendarMonthRegular: return "\u{f292}"
        case .calendarTodayBold: return "\u{f293}"
        case .calendarTodayLight: return "\u{f294}"
        case .calendarTodayRegular: return "\u{f295}"
        case .calendarWeekBold: return "\u{f296}"
        case .calendarWeekFilled: return "\u{f297}"
        case .calendarWeekLight: return "\u{f298}"
        case .calendarWeekRegular: return "\u{f299}"
        case .calendarWeekViewBold: return "\u{f29a}"
        case .calendarWeekViewFilled: return "\u{f29b}"
        case .calendarWeekViewLight: return "\u{f29c}"
        case .calendarWeekViewRegular: return "\u{f29d}"
        case .calendarWorkWeekBold: return "\u{f29e}"
        case .calendarWorkWeekFilled: return "\u{f29f}"
        case .calendarWorkWeekLight: return "\u{f2a0}"
        case .calendarWorkWeekRegular: return "\u{f2a1}"
        case .callBargeBold: return "\u{f2a2}"
        case .callBargeFilled: return "\u{f2a3}"
        case .callBargeLight: return "\u{f2a4}"
        case .callBargeRegular: return "\u{f2a5}"
        case .callBargeSilentBold: return "\u{f2a6}"
        case .callBargeSilentLight: return "\u{f2a7}"
        case .callBargeSilentRegular: return "\u{f2a8}"
        case .callForwardSettingsBold: return "\u{f2a9}"
        case .callForwardSettingsFilled: return "\u{f2aa}"
        case .callForwardSettingsLight: return "\u{f2ab}"
        case .callForwardSettingsRegular: return "\u{f2ac}"
        case .callGroupPickupBold: return "\u{f2ad}"
        case .callGroupPickupFilled: return "\u{f2ae}"
        case .callGroupPickupLight: return "\u{f2af}"
        case .callGroupPickupRegular: return "\u{f2b0}"
        case .callHandlingBold: return "\u{f2b1}"
        case .callHandlingLight: return "\u{f2b2}"
        case .callHandlingRegular: return "\u{f2b3}"
        case .callHoldBold: return "\u{f2b4}"
        case .callHoldFilled: return "\u{f2b5}"
        case .callHoldLight: return "\u{f2b6}"
        case .callHoldRegular: return "\u{f2b7}"
        case .callIncomingBold: return "\u{f2b8}"
        case .callIncomingLight: return "\u{f2b9}"
        case .callIncomingRegular: return "\u{f2ba}"
        case .callListBold: return "\u{f2bb}"
        case .callListLight: return "\u{f2bc}"
        case .callListRegular: return "\u{f2bd}"
        case .callMergeBold: return "\u{f2be}"
        case .callMergeLight: return "\u{f2bf}"
        case .callMergeRegular: return "\u{f2c0}"
        case .callMissedBold: return "\u{f2c1}"
        case .callMissedFilled: return "\u{f2c2}"
        case .callMissedLight: return "\u{f2c3}"
        case .callMissedRegular: return "\u{f2c4}"
        case .callMoreBold: return "\u{f2c5}"
        case .callMoreLight: return "\u{f2c6}"
        case .callMoreRegular: return "\u{f2c7}"
        case .callOutgoingBold: return "\u{f2c8}"
        case .callOutgoingLight: return "\u{f2c9}"
        case .callOutgoingRegular: return "\u{f2ca}"
        case .callPickupBold: return "\u{f2cb}"
        case .callPickupFilled: return "\u{f2cc}"
        case .callPickupLight: return "\u{f2cd}"
        case .callPickupOtherBold: return "\u{f2ce}"
        case .callPickupOtherFilled: return "\u{f2cf}"
        case .callPickupOtherLight: return "\u{f2d0}"
        case .callPickupOtherRegular: return "\u{f2d1}"
        case .callPickupRegular: return "\u{f2d2}"
        case .callPrivateBold: return "\u{f2d3}"
        case .callPrivateFilled: return "\u{f2d4}"
        case .callPrivateLight: return "\u{f2d5}"
        case .callPrivateRegular: return "\u{f2d6}"
        case .callRemoteBold: return "\u{f2d7}"
        case .callRemoteFilled: return "\u{f2d8}"
        case .callRemoteLight: return "\u{f2d9}"
        case .callRemoteRegular: return "\u{f2da}"
        case .callRequestBold: return "\u{f2db}"
        case .callRequestFilled: return "\u{f2dc}"
        case .callRequestLight: return "\u{f2dd}"
        case .callRequestRegular: return "\u{f2de}"
        case .callReturnBold: return "\u{f2df}"
        case .callReturnFilled: return "\u{f2e0}"
        case .callReturnLight: return "\u{f2e1}"
        case .callReturnRegular: return "\u{f2e2}"
        case .callRoomBold: return "\u{f2e3}"
        case .callRoomLight: return "\u{f2e4}"
        case .callRoomRegular: return "\u{f2e5}"
        case .callSettingsBold: return "\u{f2e6}"
        case .callSettingsLight: return "\u{f2e7}"
        case .callSettingsRegular: return "\u{f2e8}"
        case .callSplitBold: return "\u{f2e9}"
        case .callSplitLight: return "\u{f2ea}"
        case .callSplitRegular: return "\u{f2eb}"
        case .callSwapBold: return "\u{f2ec}"
        case .callSwapLight: return "\u{f2ed}"
        case .callSwapRegular: return "\u{f2ee}"
        case .callVoicemailBold: return "\u{f2ef}"
        case .callVoicemailLight: return "\u{f2f0}"
        case .callVoicemailRegular: return "\u{f2f1}"
        case .callrateBold: return "\u{f2f2}"
        case .callrateLight: return "\u{f2f3}"
        case .callrateRegular: return "\u{f2f4}"
        case .cameraAuxBold: return "\u{f2f5}"
        case .cameraAuxFilled: return "\u{f2f6}"
        case .cameraAuxLight: return "\u{f2f7}"
        case .cameraAuxRegular: return "\u{f2f8}"
        case .cameraBold: return "\u{f2f9}"
        case .cameraFilled: return "\u{f2fa}"
        case .cameraLight: return "\u{f2fb}"
        case .cameraMutedBold: return "\u{f2fc}"
        case .cameraMutedCircleFilled: return "\u{f2fd}"
        case .cameraMutedFilled: return "\u{f2fe}"
        case .cameraMutedLight: return "\u{f2ff}"
        case .cameraMutedRegular: return "\u{f300}"
        case .cameraOnBold: return "\u{f301}"
        case .cameraOnFilled: return "\u{f302}"
        case .cameraOnLight: return "\u{f303}"
        case .cameraOnRegular: return "\u{f304}"
        case .cameraPhotoBold: return "\u{f305}"
        case .cameraPhotoFilled: return "\u{f306}"
        case .cameraPhotoLight: return "\u{f307}"
        case .cameraPhotoRegular: return "\u{f308}"
        case .cameraPresenceBold: return "\u{f309}"
        case .cameraPresenceFilled: return "\u{f30a}"
        case .cameraPresenceLight: return "\u{f30b}"
        case .cameraPresenceRegular: return "\u{f30c}"
        case .cameraRegular: return "\u{f30d}"
        case .cameraSwapBold: return "\u{f30e}"
        case .cameraSwapLight: return "\u{f30f}"
        case .cameraSwapRegular: return "\u{f310}"
        case .campaignManagementBold: return "\u{f311}"
        case .campaignManagementLight: return "\u{f312}"
        case .campaignManagementRegular: return "\u{f313}"
        case .cancelBold: return "\u{f314}"
        case .cancelLight: return "\u{f315}"
        case .cancelRegular: return "\u{f316}"
        case .capsLockBold: return "\u{f317}"
        case .capsLockLight: return "\u{f318}"
        case .capsLockRegular: return "\u{f319}"
        case .captureRewindBold: return "\u{f31a}"
        case .captureRewindLight: return "\u{f31b}"
        case .captureRewindRegular: return "\u{f31c}"
        case .caroselBold: return "\u{f31d}"
        case .caroselLight: return "\u{f31e}"
        case .caroselRegular: return "\u{f31f}"
        case .carouselTextBold: return "\u{f320}"
        case .carouselTextLight: return "\u{f321}"
        case .carouselTextRegular: return "\u{f322}"
        case .cellularBold: return "\u{f323}"
        case .cellularLight: return "\u{f324}"
        case .cellularRegular: return "\u{f325}"
        case .centerAlignedBold: return "\u{f326}"
        case .centerAlignedLight: return "\u{f327}"
        case .centerAlignedRegular: return "\u{f328}"
        case .centerBold: return "\u{f329}"
        case .centerLight: return "\u{f32a}"
        case .centerRegular: return "\u{f32b}"
        case .certificateBold: return "\u{f32c}"
        case .certificateInvalidBold: return "\u{f32d}"
        case .certificateInvalidLight: return "\u{f32e}"
        case .certificateInvalidRegular: return "\u{f32f}"
        case .certificateLight: return "\u{f330}"
        case .certificateRegular: return "\u{f331}"
        case .certifiedBold: return "\u{f332}"
        case .certifiedLight: return "\u{f333}"
        case .certifiedRegular: return "\u{f334}"
        case .chPSearchBold: return "\u{f335}"
        case .chPSearchLight: return "\u{f336}"
        case .chPSearchRegular: return "\u{f337}"
        case .channelUssdBold: return "\u{f338}"
        case .channelUssdLight: return "\u{f339}"
        case .channelUssdRegular: return "\u{f33a}"
        case .chatBold: return "\u{f33b}"
        case .chatFilled: return "\u{f33c}"
        case .chatGroupBold: return "\u{f33d}"
        case .chatGroupFilled: return "\u{f33e}"
        case .chatGroupLight: return "\u{f33f}"
        case .chatGroupRegular: return "\u{f340}"
        case .chatLight: return "\u{f341}"
        case .chatMuteBold: return "\u{f342}"
        case .chatMuteLight: return "\u{f343}"
        case .chatMuteRegular: return "\u{f344}"
        case .chatOutboundFilled: return "\u{f345}"
        case .chatRegular: return "\u{f346}"
        case .checkBold: return "\u{f347}"
        case .checkCircleBadgeFilled: return "\u{f348}"
        case .checkCircleBold: return "\u{f349}"
        case .checkCircleFilled: return "\u{f34a}"
        case .checkCircleLight: return "\u{f34b}"
        case .checkCircleRegular: return "\u{f34c}"
        case .checkLight: return "\u{f34d}"
        case .checkRegular: return "\u{f34e}"
        case .checkboxGroupBold: return "\u{f34f}"
        case .checkboxGroupLight: return "\u{f350}"
        case .checkboxGroupRegular: return "\u{f351}"
        case .cleanUpBold: return "\u{f352}"
        case .cleanUpLight: return "\u{f353}"
        case .cleanUpRegular: return "\u{f354}"
        case .clearBadgeFilled: return "\u{f355}"
        case .clearBold: return "\u{f356}"
        case .clearFilled: return "\u{f357}"
        case .clearLight: return "\u{f358}"
        case .clearRegular: return "\u{f359}"
        case .closeSpaceBold: return "\u{f35a}"
        case .closeSpaceLight: return "\u{f35b}"
        case .closeSpaceRegular: return "\u{f35c}"
        case .closedCaptionBadgeBold: return "\u{f35d}"
        case .closedCaptionBadgeFilled: return "\u{f35e}"
        case .closedCaptionBadgeLight: return "\u{f35f}"
        case .closedCaptionBadgeRegular: return "\u{f360}"
        case .closedCaptionsBold: return "\u{f361}"
        case .closedCaptionsFilled: return "\u{f362}"
        case .closedCaptionsLight: return "\u{f363}"
        case .closedCaptionsRegular: return "\u{f364}"
        case .cloudBold: return "\u{f365}"
        case .cloudDownloadBold: return "\u{f366}"
        case .cloudDownloadLight: return "\u{f367}"
        case .cloudDownloadRegular: return "\u{f368}"
        case .cloudFilled: return "\u{f369}"
        case .cloudFrameBold: return "\u{f36a}"
        case .cloudFrameFilled: return "\u{f36b}"
        case .cloudFrameLight: return "\u{f36c}"
        case .cloudFrameRegular: return "\u{f36d}"
        case .cloudLight: return "\u{f36e}"
        case .cloudMutedBold: return "\u{f36f}"
        case .cloudMutedFilled: return "\u{f370}"
        case .cloudMutedLight: return "\u{f371}"
        case .cloudMutedRegular: return "\u{f372}"
        case .cloudRegular: return "\u{f373}"
        case .cloudUploadBold: return "\u{f374}"
        case .cloudUploadLight: return "\u{f375}"
        case .cloudUploadRegular: return "\u{f376}"
        case .codeBlockBold: return "\u{f377}"
        case .codeBlockLight: return "\u{f378}"
        case .codeBlockRegular: return "\u{f379}"
        case .coffeeBold: return "\u{f37a}"
        case .coffeeLight: return "\u{f37b}"
        case .coffeeRegular: return "\u{f37c}"
        case .colorBold: return "\u{f37d}"
        case .colorFilled: return "\u{f37e}"
        case .colorLight: return "\u{f37f}"
        case .colorRegular: return "\u{f380}"
        case .colourPaletteBold: return "\u{f381}"
        case .colourPaletteFilled: return "\u{f382}"
        case .colourPaletteLight: return "\u{f383}"
        case .colourPaletteRegular: return "\u{f384}"
        case .commentingBold: return "\u{f385}"
        case .commentingFilled: return "\u{f386}"
        case .commentingLight: return "\u{f387}"
        case .commentingRegular: return "\u{f388}"
        case .companyBold: return "\u{f389}"
        case .companyLight: return "\u{f38a}"
        case .companyRegular: return "\u{f38b}"
        case .completedByBaseBold: return "\u{f38c}"
        case .completedByBaseLight: return "\u{f38d}"
        case .completedByBaseRegular: return "\u{f38e}"
        case .completedByTimeBold: return "\u{f38f}"
        case .completedByTimeLight: return "\u{f390}"
        case .completedByTimeRegular: return "\u{f391}"
        case .computerBold: return "\u{f392}"
        case .computerLight: return "\u{f393}"
        case .computerRegular: return "\u{f394}"
        case .conciergeBold: return "\u{f395}"
        case .conciergeLight: return "\u{f396}"
        case .conciergeRegular: return "\u{f397}"
        case .conditionalBlockBold: return "\u{f398}"
        case .conditionalBlockLight: return "\u{f399}"
        case .conditionalBlockRegular: return "\u{f39a}"
        case .connectBold: return "\u{f39b}"
        case .connectLight: return "\u{f39c}"
        case .connectRegular: return "\u{f39d}"
        case .contactCardBold: return "\u{f39e}"
        case .contactCardFilled: return "\u{f39f}"
        case .contactCardLight: return "\u{f3a0}"
        case .contactCardRegular: return "\u{f3a1}"
        case .contactsBold: return "\u{f3a2}"
        case .contactsFilled: return "\u{f3a3}"
        case .contactsLight: return "\u{f3a4}"
        case .contactsRegular: return "\u{f3a5}"
        case .contentDownloadBold: return "\u{f3a6}"
        case .contentDownloadFilled: return "\u{f3a7}"
        case .contentDownloadLight: return "\u{f3a8}"
        case .contentDownloadRegular: return "\u{f3a9}"
        case .contentShareBold: return "\u{f3aa}"
        case .contentShareLight: return "\u{f3ab}"
        case .contentShareRegular: return "\u{f3ac}"
        case .contrastBold: return "\u{f3ad}"
        case .contrastLight: return "\u{f3ae}"
        case .contrastRegular: return "\u{f3af}"
        case .copyBold: return "\u{f3b0}"
        case .copyLight: return "\u{f3b1}"
        case .copyRegular: return "\u{f3b2}"
        case .cpuBold: return "\u{f3b3}"
        case .cpuLight: return "\u{f3b4}"
        case .cpuRegular: return "\u{f3b5}"
        case .createAGroupBold: return "\u{f3b6}"
        case .createAGroupFilled: return "\u{f3b7}"
        case .createAGroupLight: return "\u{f3b8}"
        case .createAGroupRegular: return "\u{f3b9}"
        case .cropBold: return "\u{f3ba}"
        case .cropLight: return "\u{f3bb}"
        case .cropRegular: return "\u{f3bc}"
        case .cucmConnectionBold: return "\u{f3bd}"
        case .cucmConnectionLight: return "\u{f3be}"
        case .cucmConnectionRegular: return "\u{f3bf}"
        case .customCodeEditorBold: return "\u{f3c0}"
        case .customCodeEditorLight: return "\u{f3c1}"
        case .customCodeEditorRegular: return "\u{f3c2}"
        case .dailyRecurringScheduleBold: return "\u{f3c3}"
        case .dailyRecurringScheduleLight: return "\u{f3c4}"
        case .dailyRecurringScheduleRegular: return "\u{f3c5}"
        case .dashboardBold: return "\u{f3c6}"
        case .dashboardFilled: return "\u{f3c7}"
        case .dashboardLight: return "\u{f3c8}"
        case .dashboardRegular: return "\u{f3c9}"
        case .dataManagementBold: return "\u{f3ca}"
        case .dataManagementFilled: return "\u{f3cb}"
        case .dataManagementLight: return "\u{f3cc}"
        case .dataManagementRegular: return "\u{f3cd}"
        case .dataRangeSelectionBold: return "\u{f3ce}"
        case .dataRangeSelectionFilled: return "\u{f3cf}"
        case .dataRangeSelectionLight: return "\u{f3d0}"
        case .dataRangeSelectionRegular: return "\u{f3d1}"
        case .declineBold: return "\u{f3d2}"
        case .declineFilled: return "\u{f3d3}"
        case .declineLight: return "\u{f3d4}"
        case .declineRegular: return "\u{f3d5}"
        case .dectHandsetBold: return "\u{f3d6}"
        case .dectHandsetFilled: return "\u{f3d7}"
        case .dectHandsetLight: return "\u{f3d8}"
        case .dectHandsetRegular: return "\u{f3d9}"
        case .deleteBold: return "\u{f3da}"
        case .deleteFilled: return "\u{f3db}"
        case .deleteLight: return "\u{f3dc}"
        case .deleteRegular: return "\u{f3dd}"
        case .deploymentEvaluationProgressBold: return "\u{f3de}"
        case .deploymentEvaluationProgressLight: return "\u{f3df}"
        case .deploymentEvaluationProgressRegular: return "\u{f3e0}"
        case .deploymentProgressBold: return "\u{f3e1}"
        case .deploymentProgressLight: return "\u{f3e2}"
        case .deploymentProgressRegular: return "\u{f3e3}"
        case .deploymentRecurringBold: return "\u{f3e4}"
        case .deploymentRecurringLight: return "\u{f3e5}"
        case .deploymentRecurringRegular: return "\u{f3e6}"
        case .deploymentWinnerPendingBold: return "\u{f3e7}"
        case .deploymentWinnerPendingLight: return "\u{f3e8}"
        case .deploymentWinnerPendingRegular: return "\u{f3e9}"
        case .deskPhoneBold: return "\u{f3ea}"
        case .deskPhoneFilled: return "\u{f3eb}"
        case .deskPhoneLight: return "\u{f3ec}"
        case .deskPhoneRegular: return "\u{f3ed}"
        case .deskPhoneWarningBold: return "\u{f3ee}"
        case .deskPhoneWarningLight: return "\u{f3ef}"
        case .deskPhoneWarningRegular: return "\u{f3f0}"
        case .deviceConnectionBold: return "\u{f3f1}"
        case .deviceConnectionFilled: return "\u{f3f2}"
        case .deviceConnectionLight: return "\u{f3f3}"
        case .deviceConnectionRegular: return "\u{f3f4}"
        case .deviceInRoomBold: return "\u{f3f5}"
        case .deviceInRoomEndBold: return "\u{f3f6}"
        case .deviceInRoomEndLight: return "\u{f3f7}"
        case .deviceInRoomEndRegular: return "\u{f3f8}"
        case .deviceInRoomFilled: return "\u{f3f9}"
        case .deviceInRoomLight: return "\u{f3fa}"
        case .deviceInRoomRegular: return "\u{f3fb}"
        case .deviceMutedBold: return "\u{f3fc}"
        case .deviceMutedLight: return "\u{f3fd}"
        case .deviceMutedRegular: return "\u{f3fe}"
        case .devicePolicyControllerBold: return "\u{f3ff}"
        case .devicePolicyControllerLight: return "\u{f400}"
        case .devicePolicyControllerRegular: return "\u{f401}"
        case .diagnosticsBold: return "\u{f402}"
        case .diagnosticsLight: return "\u{f403}"
        case .diagnosticsRegular: return "\u{f404}"
        case .dialpadBold: return "\u{f405}"
        case .dialpadLight: return "\u{f406}"
        case .dialpadRegular: return "\u{f407}"
        case .directionalPadBold: return "\u{f408}"
        case .directionalPadFilled: return "\u{f409}"
        case .directionalPadLight: return "\u{f40a}"
        case .directionalPadRegular: return "\u{f40b}"
        case .directoryBold: return "\u{f40c}"
        case .directoryLight: return "\u{f40d}"
        case .directoryRegular: return "\u{f40e}"
        case .disappearingPenBold: return "\u{f40f}"
        case .disappearingPenLight: return "\u{f410}"
        case .disappearingPenRegular: return "\u{f411}"
        case .discBold: return "\u{f412}"
        case .discConnectedBold: return "\u{f413}"
        case .discConnectedLight: return "\u{f414}"
        case .discConnectedRegular: return "\u{f415}"
        case .discLight: return "\u{f416}"
        case .discRegular: return "\u{f417}"
        case .disconnectBold: return "\u{f418}"
        case .disconnectFilled: return "\u{f419}"
        case .disconnectLight: return "\u{f41a}"
        case .disconnectRegular: return "\u{f41b}"
        case .dislikeBold: return "\u{f41c}"
        case .dislikeFilled: return "\u{f41d}"
        case .dislikeLight: return "\u{f41e}"
        case .dislikeRegular: return "\u{f41f}"
        case .displayBold: return "\u{f420}"
        case .displayInputBold: return "\u{f421}"
        case .displayInputLight: return "\u{f422}"
        case .displayInputRegular: return "\u{f423}"
        case .displayLight: return "\u{f424}"
        case .displayRegular: return "\u{f425}"
        case .displayWarningBold: return "\u{f426}"
        case .displayWarningLight: return "\u{f427}"
        case .displayWarningRegular: return "\u{f428}"
        case .distributeHorizontalBold: return "\u{f429}"
        case .distributeHorizontalFilled: return "\u{f42a}"
        case .distributeHorizontalLight: return "\u{f42b}"
        case .distributeHorizontalRegular: return "\u{f42c}"
        case .distributeVerticallyBold: return "\u{f42d}"
        case .distributeVerticallyFilled: return "\u{f42e}"
        case .distributeVerticallyLight: return "\u{f42f}"
        case .distributeVerticallyRegular: return "\u{f430}"
        case .dndPresenceBadgeFilled: return "\u{f431}"
        case .dndPresenceBold: return "\u{f432}"
        case .dndPresenceFilled: return "\u{f433}"
        case .dndPresenceLight: return "\u{f434}"
        case .dndPresenceRegular: return "\u{f435}"
        case .dockWindowBold: return "\u{f436}"
        case .dockWindowLight: return "\u{f437}"
        case .dockWindowRegular: return "\u{f438}"
        case .documentBold: return "\u{f439}"
        case .documentCameraBold: return "\u{f43a}"
        case .documentCameraDisconnectedBold: return "\u{f43b}"
        case .documentCameraDisconnectedLight: return "\u{f43c}"
        case .documentCameraDisconnectedRegular: return "\u{f43d}"
        case .documentCameraLight: return "\u{f43e}"
        case .documentCameraRegular: return "\u{f43f}"
        case .documentCreateBold: return "\u{f440}"
        case .documentCreateFilled: return "\u{f441}"
        case .documentCreateLight: return "\u{f442}"
        case .documentCreateRegular: return "\u{f443}"
        case .documentFilled: return "\u{f444}"
        case .documentLight: return "\u{f445}"
        case .documentMoveBold: return "\u{f446}"
        case .documentMoveFilled: return "\u{f447}"
        case .documentMoveLight: return "\u{f448}"
        case .documentMoveRegular: return "\u{f449}"
        case .documentRegular: return "\u{f44a}"
        case .documentShareBold: return "\u{f44b}"
        case .documentShareFilled: return "\u{f44c}"
        case .documentShareLight: return "\u{f44d}"
        case .documentShareRegular: return "\u{f44e}"
        case .doneAllBold: return "\u{f44f}"
        case .doneAllLight: return "\u{f450}"
        case .doneAllRegular: return "\u{f451}"
        case .donutChartBold: return "\u{f452}"
        case .donutChartFilled: return "\u{f453}"
        case .donutChartLight: return "\u{f454}"
        case .donutChartRegular: return "\u{f455}"
        case .downloadBold: return "\u{f456}"
        case .downloadFilled: return "\u{f457}"
        case .downloadLight: return "\u{f458}"
        case .downloadRegular: return "\u{f459}"
        case .draftBold: return "\u{f45a}"
        case .draftFilled: return "\u{f45b}"
        case .draftIndicatorBold: return "\u{f45c}"
        case .draftIndicatorSmallFilled: return "\u{f45d}"
        case .draftLight: return "\u{f45e}"
        case .draftRegular: return "\u{f45f}"
        case .dragBold: return "\u{f460}"
        case .dragLight: return "\u{f461}"
        case .dragRegular: return "\u{f462}"
        case .draggerHorizontalBold: return "\u{f463}"
        case .draggerHorizontalLight: return "\u{f464}"
        case .draggerHorizontalRegular: return "\u{f465}"
        case .draggerVerticalBold: return "\u{f466}"
        case .draggerVerticalLight: return "\u{f467}"
        case .draggerVerticalRegular: return "\u{f468}"
        case .driveModeBold: return "\u{f469}"
        case .driveModeLight: return "\u{f46a}"
        case .driveModeRegular: return "\u{f46b}"
        case .dropdownBold: return "\u{f46c}"
        case .dropdownLight: return "\u{f46d}"
        case .dropdownRegular: return "\u{f46e}"
        case .dxEightyBold: return "\u{f46f}"
        case .dxEightyFilled: return "\u{f470}"
        case .dxEightyLight: return "\u{f471}"
        case .dxEightyRegular: return "\u{f472}"
        case .dxSeventyBold: return "\u{f473}"
        case .dxSeventyLight: return "\u{f474}"
        case .dxSeventyRegular: return "\u{f475}"
        case .editBold: return "\u{f476}"
        case .editFilled: return "\u{f477}"
        case .editLight: return "\u{f478}"
        case .editRegular: return "\u{f479}"
        case .editablePartialBold: return "\u{f47a}"
        case .editablePartialLight: return "\u{f47b}"
        case .editablePartialRegular: return "\u{f47c}"
        case .educationBold: return "\u{f47d}"
        case .educationFilled: return "\u{f47e}"
        case .educationLight: return "\u{f47f}"
        case .educationRegular: return "\u{f480}"
        case .emailBold: return "\u{f481}"
        case .emailDeliveredBold: return "\u{f482}"
        case .emailDeliveredLight: return "\u{f483}"
        case .emailDeliveredRegular: return "\u{f484}"
        case .emailFailureBold: return "\u{f485}"
        case .emailFailureLight: return "\u{f486}"
        case .emailFailureRegular: return "\u{f487}"
        case .emailFilled: return "\u{f488}"
        case .emailInviteBold: return "\u{f489}"
        case .emailInviteLight: return "\u{f48a}"
        case .emailInviteRegular: return "\u{f48b}"
        case .emailLight: return "\u{f48c}"
        case .emailOutgoingBold: return "\u{f48d}"
        case .emailOutgoingFilled: return "\u{f48e}"
        case .emailOutgoingLight: return "\u{f48f}"
        case .emailOutgoingRegular: return "\u{f490}"
        case .emailReadBold: return "\u{f491}"
        case .emailReadFilled: return "\u{f492}"
        case .emailReadLight: return "\u{f493}"
        case .emailReadRegular: return "\u{f494}"
        case .emailRegular: return "\u{f495}"
        case .emojiExcitedBold: return "\u{f496}"
        case .emojiExcitedFilled: return "\u{f497}"
        case .emojiExcitedLight: return "\u{f498}"
        case .emojiExcitedRegular: return "\u{f499}"
        case .emojiHappyBold: return "\u{f49a}"
        case .emojiHappyFilled: return "\u{f49b}"
        case .emojiHappyLight: return "\u{f49c}"
        case .emojiHappyRegular: return "\u{f49d}"
        case .emojiPassiveBold: return "\u{f49e}"
        case .emojiPassiveFilled: return "\u{f49f}"
        case .emojiPassiveLight: return "\u{f4a0}"
        case .emojiPassiveRegular: return "\u{f4a1}"
        case .emojiSadBold: return "\u{f4a2}"
        case .emojiSadFilled: return "\u{f4a3}"
        case .emojiSadLight: return "\u{f4a4}"
        case .emojiSadRegular: return "\u{f4a5}"
        case .emojiUnhappyBold: return "\u{f4a6}"
        case .emojiUnhappyFilled: return "\u{f4a7}"
        case .emojiUnhappyLight: return "\u{f4a8}"
        case .emojiUnhappyRegular: return "\u{f4a9}"
        case .encryptionCircleFilled: return "\u{f4aa}"
        case .encryptionFilled: return "\u{f4ab}"
        case .endRemoteDesktopControlBold: return "\u{f4ac}"
        case .endRemoteDesktopControlLight: return "\u{f4ad}"
        case .endRemoteDesktopControlRegular: return "\u{f4ae}"
        case .endToEndEncryptionCircleFilled: return "\u{f4af}"
        case .endToEndEncryptionFilled: return "\u{f4b0}"
        case .endpointBlockedBold: return "\u{f4b1}"
        case .endpointBlockedLight: return "\u{f4b2}"
        case .endpointBlockedRegular: return "\u{f4b3}"
        case .endpointBold: return "\u{f4b4}"
        case .endpointGTwoBold: return "\u{f4b5}"
        case .endpointGTwoLight: return "\u{f4b6}"
        case .endpointGTwoRegular: return "\u{f4b7}"
        case .endpointGTwoSeventyBold: return "\u{f4b8}"
        case .endpointGTwoSeventyDualBold: return "\u{f4b9}"
        case .endpointGTwoSeventyDualLight: return "\u{f4ba}"
        case .endpointGTwoSeventyDualRegular: return "\u{f4bb}"
        case .endpointGTwoSeventyLight: return "\u{f4bc}"
        case .endpointGTwoSeventyRegular: return "\u{f4bd}"
        case .endpointGTwoStandBold: return "\u{f4be}"
        case .endpointGTwoStandLight: return "\u{f4bf}"
        case .endpointGTwoStandRegular: return "\u{f4c0}"
        case .endpointLight: return "\u{f4c1}"
        case .endpointMxEightHundredBold: return "\u{f4c2}"
        case .endpointMxEightHundredDualBold: return "\u{f4c3}"
        case .endpointMxEightHundredDualLight: return "\u{f4c4}"
        case .endpointMxEightHundredDualRegular: return "\u{f4c5}"
        case .endpointMxEightHundredLight: return "\u{f4c6}"
        case .endpointMxEightHundredRegular: return "\u{f4c7}"
        case .endpointRegular: return "\u{f4c8}"
        case .endpointStandBold: return "\u{f4c9}"
        case .endpointStandFilled: return "\u{f4ca}"
        case .endpointStandLight: return "\u{f4cb}"
        case .endpointStandRegular: return "\u{f4cc}"
        case .endpointWarningBold: return "\u{f4cd}"
        case .endpointWarningLight: return "\u{f4ce}"
        case .endpointWarningRegular: return "\u{f4cf}"
        case .enterBold: return "\u{f4d0}"
        case .enterLight: return "\u{f4d1}"
        case .enterRegular: return "\u{f4d2}"
        case .enterRoomBold: return "\u{f4d3}"
        case .enterRoomFilled: return "\u{f4d4}"
        case .enterRoomLight: return "\u{f4d5}"
        case .enterRoomRegular: return "\u{f4d6}"
        case .eraserBold: return "\u{f4d7}"
        case .eraserFilled: return "\u{f4d8}"
        case .eraserLight: return "\u{f4d9}"
        case .eraserRegular: return "\u{f4da}"
        case .errorLegacyBadgeFilled: return "\u{f4db}"
        case .errorLegacyBold: return "\u{f4dc}"
        case .errorLegacyFilled: return "\u{f4dd}"
        case .errorLegacyLight: return "\u{f4de}"
        case .errorLegacyRegular: return "\u{f4df}"
        case .ethernetBold: return "\u{f4e0}"
        case .ethernetFilled: return "\u{f4e1}"
        case .ethernetLight: return "\u{f4e2}"
        case .ethernetRegular: return "\u{f4e3}"
        case .exchangeBold: return "\u{f4e4}"
        case .exchangeLight: return "\u{f4e5}"
        case .exchangeRegular: return "\u{f4e6}"
        case .exclamationBold: return "\u{f4e7}"
        case .exclamationLight: return "\u{f4e8}"
        case .exclamationRegular: return "\u{f4e9}"
        case .excludeBold: return "\u{f4ea}"
        case .excludeLight: return "\u{f4eb}"
        case .excludeRegular: return "\u{f4ec}"
        case .existingTargetGroupBold: return "\u{f4ed}"
        case .existingTargetGroupLight: return "\u{f4ee}"
        case .existingTargetGroupRegular: return "\u{f4ef}"
        case .exitRoomBold: return "\u{f4f0}"
        case .exitRoomLight: return "\u{f4f1}"
        case .exitRoomRegular: return "\u{f4f2}"
        case .exploreBold: return "\u{f4f3}"
        case .exploreLight: return "\u{f4f4}"
        case .exploreRegular: return "\u{f4f5}"
        case .exportBold: return "\u{f4f6}"
        case .exportLight: return "\u{f4f7}"
        case .exportRegular: return "\u{f4f8}"
        case .extensionMobilityBold: return "\u{f4f9}"
        case .extensionMobilityLight: return "\u{f4fa}"
        case .extensionMobilityRegular: return "\u{f4fb}"
        case .externalMessageBold: return "\u{f4fc}"
        case .externalMessageLight: return "\u{f4fd}"
        case .externalMessageRegular: return "\u{f4fe}"
        case .externalUserBold: return "\u{f4ff}"
        case .externalUserLight: return "\u{f500}"
        case .externalUserRegular: return "\u{f501}"
        case .familyFontBold: return "\u{f502}"
        case .familyFontLight: return "\u{f503}"
        case .familyFontRegular: return "\u{f504}"
        case .fastForwardBold: return "\u{f505}"
        case .fastForwardLight: return "\u{f506}"
        case .fastForwardRegular: return "\u{f507}"
        case .favoriteBold: return "\u{f508}"
        case .favoriteFilled: return "\u{f509}"
        case .favoriteLight: return "\u{f50a}"
        case .favoriteRegular: return "\u{f50b}"
        case .favoritesBold: return "\u{f50c}"
        case .favoritesFilled: return "\u{f50d}"
        case .favoritesLight: return "\u{f50e}"
        case .favoritesRegular: return "\u{f50f}"
        case .fbwBold: return "\u{f510}"
        case .fbwFilled: return "\u{f511}"
        case .fbwLight: return "\u{f512}"
        case .fbwRegular: return "\u{f513}"
        case .ffwBold: return "\u{f514}"
        case .ffwFilled: return "\u{f515}"
        case .ffwLight: return "\u{f516}"
        case .ffwRegular: return "\u{f517}"
        case .fileAnalysisBold: return "\u{f518}"
        case .fileAnalysisFilled: return "\u{f519}"
        case .fileAnalysisLight: return "\u{f51a}"
        case .fileAnalysisRegular: return "\u{f51b}"
        case .fileAnnotationBold: return "\u{f51c}"
        case .fileAnnotationFilled: return "\u{f51d}"
        case .fileAnnotationLight: return "\u{f51e}"
        case .fileAnnotationRegular: return "\u{f51f}"
        case .fileAudioBold: return "\u{f520}"
        case .fileAudioFilled: return "\u{f521}"
        case .fileAudioLight: return "\u{f522}"
        case .fileAudioRegular: return "\u{f523}"
        case .fileBugBold: return "\u{f524}"
        case .fileBugFilled: return "\u{f525}"
        case .fileBugLight: return "\u{f526}"
        case .fileBugRegular: return "\u{f527}"
        case .fileCodeBold: return "\u{f528}"
        case .fileCodeFilled: return "\u{f529}"
        case .fileCodeLight: return "\u{f52a}"
        case .fileCodeRegular: return "\u{f52b}"
        case .fileDashboardBold: return "\u{f52c}"
        case .fileDashboardFilled: return "\u{f52d}"
        case .fileDashboardLight: return "\u{f52e}"
        case .fileDashboardRegular: return "\u{f52f}"
        case .fileExcelBold: return "\u{f530}"
        case .fileExcelFilled: return "\u{f531}"
        case .fileExcelLight: return "\u{f532}"
        case .fileExcelRegular: return "\u{f533}"
        case .fileGraphBold: return "\u{f534}"
        case .fileGraphFilled: return "\u{f535}"
        case .fileGraphLight: return "\u{f536}"
        case .fileGraphRegular: return "\u{f537}"
        case .fileImageBold: return "\u{f538}"
        case .fileImageFilled: return "\u{f539}"
        case .fileImageLight: return "\u{f53a}"
        case .fileImageNoneBold: return "\u{f53b}"
        case .fileImageNoneLight: return "\u{f53c}"
        case .fileImageNoneRegular: return "\u{f53d}"
        case .fileImageRegular: return "\u{f53e}"
        case .fileJsBold: return "\u{f53f}"
        case .fileJsFilled: return "\u{f540}"
        case .fileJsLight: return "\u{f541}"
        case .fileJsRegular: return "\u{f542}"
        case .fileKeynoteBold: return "\u{f543}"
        case .fileKeynoteFilled: return "\u{f544}"
        case .fileKeynoteLight: return "\u{f545}"
        case .fileKeynoteRegular: return "\u{f546}"
        case .fileLockedBold: return "\u{f547}"
        case .fileLockedFilled: return "\u{f548}"
        case .fileLockedLight: return "\u{f549}"
        case .fileLockedRegular: return "\u{f54a}"
        case .fileMissingBold: return "\u{f54b}"
        case .fileMissingFilled: return "\u{f54c}"
        case .fileMissingLight: return "\u{f54d}"
        case .fileMissingRegular: return "\u{f54e}"
        case .fileMusicBold: return "\u{f54f}"
        case .fileMusicFilled: return "\u{f550}"
        case .fileMusicLight: return "\u{f551}"
        case .fileMusicRegular: return "\u{f552}"
        case .fileOnenoteBold: return "\u{f553}"
        case .fileOnenoteFilled: return "\u{f554}"
        case .fileOnenoteLight: return "\u{f555}"
        case .fileOnenoteRegular: return "\u{f556}"
        case .filePdfBold: return "\u{f557}"
        case .filePdfFilled: return "\u{f558}"
        case .filePdfLight: return "\u{f559}"
        case .filePdfRegular: return "\u{f55a}"
        case .filePowerpointBold: return "\u{f55b}"
        case .filePowerpointFilled: return "\u{f55c}"
        case .filePowerpointLight: return "\u{f55d}"
        case .filePowerpointRegular: return "\u{f55e}"
        case .fileSpreadsheetBold: return "\u{f55f}"
        case .fileSpreadsheetFilled: return "\u{f560}"
        case .fileSpreadsheetLight: return "\u{f561}"
        case .fileSpreadsheetRegular: return "\u{f562}"
        case .fileTextBold: return "\u{f563}"
        case .fileTextFilled: return "\u{f564}"
        case .fileTextLight: return "\u{f565}"
        case .fileTextRegular: return "\u{f566}"
        case .fileThreeDBold: return "\u{f567}"
        case .fileThreeDFilled: return "\u{f568}"
        case .fileThreeDLight: return "\u{f569}"
        case .fileThreeDRegular: return "\u{f56a}"
        case .fileVectorBold: return "\u{f56b}"
        case .fileVectorFilled: return "\u{f56c}"
        case .fileVectorLight: return "\u{f56d}"
        case .fileVectorRegular: return "\u{f56e}"
        case .fileVideoBold: return "\u{f56f}"
        case .fileVideoFilled: return "\u{f570}"
        case .fileVideoLight: return "\u{f571}"
        case .fileVideoRegular: return "\u{f572}"
        case .fileWordBold: return "\u{f573}"
        case .fileWordFilled: return "\u{f574}"
        case .fileWordLight: return "\u{f575}"
        case .fileWordRegular: return "\u{f576}"
        case .fileXmlBold: return "\u{f577}"
        case .fileXmlFilled: return "\u{f578}"
        case .fileXmlLight: return "\u{f579}"
        case .fileXmlRegular: return "\u{f57a}"
        case .fileZipBold: return "\u{f57b}"
        case .fileZipFilled: return "\u{f57c}"
        case .fileZipLight: return "\u{f57d}"
        case .fileZipRegular: return "\u{f57e}"
        case .filesBold: return "\u{f57f}"
        case .filesFilled: return "\u{f580}"
        case .filesLight: return "\u{f581}"
        case .filesRegular: return "\u{f582}"
        case .fillColourBold: return "\u{f583}"
        case .fillColourFilled: return "\u{f584}"
        case .fillColourLight: return "\u{f585}"
        case .fillColourRegular: return "\u{f586}"
        case .filterBold: return "\u{f587}"
        case .filterCircleBold: return "\u{f588}"
        case .filterCircleFilled: return "\u{f589}"
        case .filterCircleLight: return "\u{f58a}"
        case .filterCircleRegular: return "\u{f58b}"
        case .filterLight: return "\u{f58c}"
        case .filterRegular: return "\u{f58d}"
        case .fitToWidthBold: return "\u{f58e}"
        case .fitToWidthLight: return "\u{f58f}"
        case .fitToWidthRegular: return "\u{f590}"
        case .fitToWindowExpandBold: return "\u{f591}"
        case .fitToWindowExpandLight: return "\u{f592}"
        case .fitToWindowExpandRegular: return "\u{f593}"
        case .fitToWindowShrinkBold: return "\u{f594}"
        case .fitToWindowShrinkLight: return "\u{f595}"
        case .fitToWindowShrinkRegular: return "\u{f596}"
        case .flagBold: return "\u{f597}"
        case .flagCircleBold: return "\u{f598}"
        case .flagCircleFilled: return "\u{f599}"
        case .flagCircleLight: return "\u{f59a}"
        case .flagCircleRegular: return "\u{f59b}"
        case .flagFilled: return "\u{f59c}"
        case .flagLight: return "\u{f59d}"
        case .flagRegular: return "\u{f59e}"
        case .folderBold: return "\u{f59f}"
        case .folderEditBold: return "\u{f5a0}"
        case .folderEditLight: return "\u{f5a1}"
        case .folderEditRegular: return "\u{f5a2}"
        case .folderLight: return "\u{f5a3}"
        case .folderLockBold: return "\u{f5a4}"
        case .folderLockLight: return "\u{f5a5}"
        case .folderLockRegular: return "\u{f5a6}"
        case .folderRegular: return "\u{f5a7}"
        case .folderViewBold: return "\u{f5a8}"
        case .folderViewLight: return "\u{f5a9}"
        case .folderViewRegular: return "\u{f5aa}"
        case .followUpBold: return "\u{f5ab}"
        case .followUpLight: return "\u{f5ac}"
        case .followUpRegular: return "\u{f5ad}"
        case .foodBold: return "\u{f5ae}"
        case .foodFilled: return "\u{f5af}"
        case .foodLight: return "\u{f5b0}"
        case .foodRegular: return "\u{f5b1}"
        case .formatBold: return "\u{f5b2}"
        case .formatDefaultAppBold: return "\u{f5b3}"
        case .formatDefaultAppFilled: return "\u{f5b4}"
        case .formatDefaultAppLight: return "\u{f5b5}"
        case .formatDefaultAppRegular: return "\u{f5b6}"
        case .formatLight: return "\u{f5b7}"
        case .formatPanelControlBarBold: return "\u{f5b8}"
        case .formatPanelControlBarLight: return "\u{f5b9}"
        case .formatPanelControlBarRegular: return "\u{f5ba}"
        case .formatPanelControlDownBold: return "\u{f5bb}"
        case .formatPanelControlDownLight: return "\u{f5bc}"
        case .formatPanelControlDownRegular: return "\u{f5bd}"
        case .formatPanelControlLeftBold: return "\u{f5be}"
        case .formatPanelControlLeftLight: return "\u{f5bf}"
        case .formatPanelControlLeftRegular: return "\u{f5c0}"
        case .formatPanelControlRightBold: return "\u{f5c1}"
        case .formatPanelControlRightLight: return "\u{f5c2}"
        case .formatPanelControlRightRegular: return "\u{f5c3}"
        case .formatPanelControlUpBold: return "\u{f5c4}"
        case .formatPanelControlUpDownBold: return "\u{f5c5}"
        case .formatPanelControlUpDownLight: return "\u{f5c6}"
        case .formatPanelControlUpDownRegular: return "\u{f5c7}"
        case .formatPanelControlUpLight: return "\u{f5c8}"
        case .formatPanelControlUpRegular: return "\u{f5c9}"
        case .formatRegular: return "\u{f5ca}"
        case .formatViewMixedBold: return "\u{f5cb}"
        case .formatViewMixedLight: return "\u{f5cc}"
        case .formatViewMixedRegular: return "\u{f5cd}"
        case .forwardMessageBold: return "\u{f5ce}"
        case .forwardMessageFilled: return "\u{f5cf}"
        case .forwardMessageLight: return "\u{f5d0}"
        case .forwardMessageRegular: return "\u{f5d1}"
        case .forwardTenSecBold: return "\u{f5d2}"
        case .forwardTenSecLight: return "\u{f5d3}"
        case .forwardTenSecRegular: return "\u{f5d4}"
        case .fourColumnBold: return "\u{f5d5}"
        case .fourColumnLight: return "\u{f5d6}"
        case .fourColumnRegular: return "\u{f5d7}"
        case .fourWayNavigationBold: return "\u{f5d8}"
        case .fourWayNavigationLight: return "\u{f5d9}"
        case .fourWayNavigationRegular: return "\u{f5da}"
        case .frequencyCappingBold: return "\u{f5db}"
        case .frequencyCappingLight: return "\u{f5dc}"
        case .frequencyCappingRegular: return "\u{f5dd}"
        case .fulfillmentBold: return "\u{f5de}"
        case .fulfillmentLight: return "\u{f5df}"
        case .fulfillmentRegular: return "\u{f5e0}"
        case .fullscreenBold: return "\u{f5e1}"
        case .fullscreenExitBold: return "\u{f5e2}"
        case .fullscreenExitLight: return "\u{f5e3}"
        case .fullscreenExitRegular: return "\u{f5e4}"
        case .fullscreenLight: return "\u{f5e5}"
        case .fullscreenRegular: return "\u{f5e6}"
        case .genericDeviceVideoBadgeFilled: return "\u{f5e7}"
        case .genericDeviceVideoBold: return "\u{f5e8}"
        case .genericDeviceVideoFilled: return "\u{f5e9}"
        case .genericDeviceVideoLight: return "\u{f5ea}"
        case .genericDeviceVideoRegular: return "\u{f5eb}"
        case .gifBold: return "\u{f5ec}"
        case .gifFilled: return "\u{f5ed}"
        case .gifHorizontalBold: return "\u{f5ee}"
        case .gifHorizontalFilled: return "\u{f5ef}"
        case .gifHorizontalLight: return "\u{f5f0}"
        case .gifHorizontalRegular: return "\u{f5f1}"
        case .gifLight: return "\u{f5f2}"
        case .gifRegular: return "\u{f5f3}"
        case .giftBold: return "\u{f5f4}"
        case .giftFilled: return "\u{f5f5}"
        case .giftLight: return "\u{f5f6}"
        case .giftRegular: return "\u{f5f7}"
        case .greenLeafBold: return "\u{f5f8}"
        case .greenLeafFilled: return "\u{f5f9}"
        case .greenLeafLight: return "\u{f5fa}"
        case .greenLeafRegular: return "\u{f5fb}"
        case .greenRoomBold: return "\u{f5fc}"
        case .greenRoomFilled: return "\u{f5fd}"
        case .greenRoomLight: return "\u{f5fe}"
        case .greenRoomRegular: return "\u{f5ff}"
        case .guestIssuerBold: return "\u{f600}"
        case .guestIssuerLight: return "\u{f601}"
        case .guestIssuerRegular: return "\u{f602}"
        case .guideBold: return "\u{f603}"
        case .guideLight: return "\u{f604}"
        case .guideRegular: return "\u{f605}"
        case .handPointerBold: return "\u{f606}"
        case .handPointerLight: return "\u{f607}"
        case .handPointerRegular: return "\u{f608}"
        case .handlerBold: return "\u{f609}"
        case .handlerHorizontalBold: return "\u{f60a}"
        case .handlerHorizontalLight: return "\u{f60b}"
        case .handlerHorizontalRegular: return "\u{f60c}"
        case .handlerLight: return "\u{f60d}"
        case .handlerRegular: return "\u{f60e}"
        case .handsetAlertBold: return "\u{f60f}"
        case .handsetAlertFilled: return "\u{f610}"
        case .handsetAlertLight: return "\u{f611}"
        case .handsetAlertRegular: return "\u{f612}"
        case .handsetBold: return "\u{f613}"
        case .handsetDownSlashBold: return "\u{f614}"
        case .handsetDownSlashFilled: return "\u{f615}"
        case .handsetDownSlashLight: return "\u{f616}"
        case .handsetDownSlashRegular: return "\u{f617}"
        case .handsetFilled: return "\u{f618}"
        case .handsetLight: return "\u{f619}"
        case .handsetMutedBold: return "\u{f61a}"
        case .handsetMutedFilled: return "\u{f61b}"
        case .handsetMutedLight: return "\u{f61c}"
        case .handsetMutedRegular: return "\u{f61d}"
        case .handsetRegular: return "\u{f61e}"
        case .handsetsArrowLeftBold: return "\u{f61f}"
        case .handsetsArrowLeftLight: return "\u{f620}"
        case .handsetsArrowLeftRegular: return "\u{f621}"
        case .handshakeBold: return "\u{f622}"
        case .handshakeLight: return "\u{f623}"
        case .handshakeRegular: return "\u{f624}"
        case .headingOneBold: return "\u{f625}"
        case .headingOneLight: return "\u{f626}"
        case .headingOneRegular: return "\u{f627}"
        case .headingThreeBold: return "\u{f628}"
        case .headingThreeLight: return "\u{f629}"
        case .headingThreeRegular: return "\u{f62a}"
        case .headingTwoBold: return "\u{f62b}"
        case .headingTwoLight: return "\u{f62c}"
        case .headingTwoRegular: return "\u{f62d}"
        case .headphonesBold: return "\u{f62e}"
        case .headphonesFilled: return "\u{f62f}"
        case .headphonesLight: return "\u{f630}"
        case .headphonesMutedBold: return "\u{f631}"
        case .headphonesMutedFilled: return "\u{f632}"
        case .headphonesMutedLight: return "\u{f633}"
        case .headphonesMutedRegular: return "\u{f634}"
        case .headphonesRegular: return "\u{f635}"
        case .headsetAlertBold: return "\u{f636}"
        case .headsetAlertLight: return "\u{f637}"
        case .headsetAlertRegular: return "\u{f638}"
        case .headsetArrowDownBold: return "\u{f639}"
        case .headsetArrowDownFilled: return "\u{f63a}"
        case .headsetArrowDownLight: return "\u{f63b}"
        case .headsetArrowDownRegular: return "\u{f63c}"
        case .headsetBold: return "\u{f63d}"
        case .headsetFilled: return "\u{f63e}"
        case .headsetLight: return "\u{f63f}"
        case .headsetMutedBold: return "\u{f640}"
        case .headsetMutedLight: return "\u{f641}"
        case .headsetMutedRegular: return "\u{f642}"
        case .headsetPrivateBold: return "\u{f643}"
        case .headsetPrivateLight: return "\u{f644}"
        case .headsetPrivateRegular: return "\u{f645}"
        case .headsetRegular: return "\u{f646}"
        case .hearingBold: return "\u{f647}"
        case .hearingImpairedBold: return "\u{f648}"
        case .hearingImpairedLight: return "\u{f649}"
        case .hearingImpairedRegular: return "\u{f64a}"
        case .hearingLight: return "\u{f64b}"
        case .hearingRegular: return "\u{f64c}"
        case .helpBold: return "\u{f64d}"
        case .helpCircleBold: return "\u{f64e}"
        case .helpCircleFilled: return "\u{f64f}"
        case .helpCircleLight: return "\u{f650}"
        case .helpCircleRegular: return "\u{f651}"
        case .helpLight: return "\u{f652}"
        case .helpRegular: return "\u{f653}"
        case .helpdeskBold: return "\u{f654}"
        case .helpdeskFilled: return "\u{f655}"
        case .helpdeskLight: return "\u{f656}"
        case .helpdeskRegular: return "\u{f657}"
        case .hideBold: return "\u{f658}"
        case .hideFilled: return "\u{f659}"
        case .hideLight: return "\u{f65a}"
        case .hideRegular: return "\u{f65b}"
        case .homeBold: return "\u{f65c}"
        case .homeFilled: return "\u{f65d}"
        case .homeLight: return "\u{f65e}"
        case .homeRegular: return "\u{f65f}"
        case .horizontalLineBold: return "\u{f660}"
        case .horizontalLineLight: return "\u{f661}"
        case .horizontalLineRegular: return "\u{f662}"
        case .hotelingBold: return "\u{f663}"
        case .hotelingFilled: return "\u{f664}"
        case .hotelingLight: return "\u{f665}"
        case .hotelingRegular: return "\u{f666}"
        case .humidityBold: return "\u{f667}"
        case .humidityLight: return "\u{f668}"
        case .humidityRegular: return "\u{f669}"
        case .huntGroupBold: return "\u{f66a}"
        case .huntGroupFilled: return "\u{f66b}"
        case .huntGroupLight: return "\u{f66c}"
        case .huntGroupRegular: return "\u{f66d}"
        case .idleBold: return "\u{f66e}"
        case .idleFilled: return "\u{f66f}"
        case .idleLight: return "\u{f670}"
        case .idleRegular: return "\u{f671}"
        case .immediateBold: return "\u{f672}"
        case .immediateFilled: return "\u{f673}"
        case .immediateLight: return "\u{f674}"
        case .immediateRegular: return "\u{f675}"
        case .importBold: return "\u{f676}"
        case .importLight: return "\u{f677}"
        case .importRegular: return "\u{f678}"
        case .inCommonBold: return "\u{f679}"
        case .inCommonLight: return "\u{f67a}"
        case .inCommonRegular: return "\u{f67b}"
        case .inboxBold: return "\u{f67c}"
        case .inboxFilled: return "\u{f67d}"
        case .inboxLight: return "\u{f67e}"
        case .inboxRegular: return "\u{f67f}"
        case .includeBold: return "\u{f680}"
        case .includeLight: return "\u{f681}"
        case .includeRegular: return "\u{f682}"
        case .incognitoBold: return "\u{f683}"
        case .incognitoFilled: return "\u{f684}"
        case .incognitoLight: return "\u{f685}"
        case .incognitoRegular: return "\u{f686}"
        case .incomingCallLegacyBold: return "\u{f687}"
        case .incomingCallLegacyFilled: return "\u{f688}"
        case .incomingCallLegacyLight: return "\u{f689}"
        case .incomingCallLegacyRegular: return "\u{f68a}"
        case .indentDecreaseBold: return "\u{f68b}"
        case .indentDecreaseLight: return "\u{f68c}"
        case .indentDecreaseRegular: return "\u{f68d}"
        case .indentIncreaseBold: return "\u{f68e}"
        case .indentIncreaseLight: return "\u{f68f}"
        case .indentIncreaseRegular: return "\u{f690}"
        case .infoBadgeFilled: return "\u{f691}"
        case .infoCircleBold: return "\u{f692}"
        case .infoCircleFilled: return "\u{f693}"
        case .infoCircleLight: return "\u{f694}"
        case .infoCircleRegular: return "\u{f695}"
        case .infoCircleTwoBold: return "\u{f696}"
        case .infoCircleTwoFilled: return "\u{f697}"
        case .infoCircleTwoLight: return "\u{f698}"
        case .infoCircleTwoRegular: return "\u{f699}"
        case .inputBold: return "\u{f69a}"
        case .inputDisconnectedBold: return "\u{f69b}"
        case .inputDisconnectedLight: return "\u{f69c}"
        case .inputDisconnectedRegular: return "\u{f69d}"
        case .inputLight: return "\u{f69e}"
        case .inputRegular: return "\u{f69f}"
        case .instantScheduleBold: return "\u{f6a0}"
        case .instantScheduleFilled: return "\u{f6a1}"
        case .instantScheduleLight: return "\u{f6a2}"
        case .instantScheduleRegular: return "\u{f6a3}"
        case .integrationsBold: return "\u{f6a4}"
        case .integrationsLight: return "\u{f6a5}"
        case .integrationsRegular: return "\u{f6a6}"
        case .intelligentRoutingBold: return "\u{f6a7}"
        case .intelligentRoutingLight: return "\u{f6a8}"
        case .intelligentRoutingRegular: return "\u{f6a9}"
        case .interactionBold: return "\u{f6aa}"
        case .interactionFilled: return "\u{f6ab}"
        case .interactionLight: return "\u{f6ac}"
        case .interactionRegular: return "\u{f6ad}"
        case .invitedUserBold: return "\u{f6ae}"
        case .invitedUserLight: return "\u{f6af}"
        case .invitedUserRegular: return "\u{f6b0}"
        case .italicBold: return "\u{f6b1}"
        case .italicFilled: return "\u{f6b2}"
        case .italicLight: return "\u{f6b3}"
        case .italicRegular: return "\u{f6b4}"
        case .joinAudioBold: return "\u{f6b5}"
        case .joinAudioFilled: return "\u{f6b6}"
        case .joinAudioLight: return "\u{f6b7}"
        case .joinAudioRegular: return "\u{f6b8}"
        case .keepInTouchBold: return "\u{f6b9}"
        case .keepInTouchFilled: return "\u{f6ba}"
        case .keepInTouchLight: return "\u{f6bb}"
        case .keepInTouchRegular: return "\u{f6bc}"
        case .keyboardBold: return "\u{f6bd}"
        case .keyboardCloseBold: return "\u{f6be}"
        case .keyboardCloseLight: return "\u{f6bf}"
        case .keyboardCloseRegular: return "\u{f6c0}"
        case .keyboardLight: return "\u{f6c1}"
        case .keyboardRegular: return "\u{f6c2}"
        case .languageBold: return "\u{f6c3}"
        case .languageFilled: return "\u{f6c4}"
        case .languageLight: return "\u{f6c5}"
        case .languageRegular: return "\u{f6c6}"
        case .laptopBold: return "\u{f6c7}"
        case .laptopDisconnectedBold: return "\u{f6c8}"
        case .laptopDisconnectedLight: return "\u{f6c9}"
        case .laptopDisconnectedRegular: return "\u{f6ca}"
        case .laptopFilled: return "\u{f6cb}"
        case .laptopLight: return "\u{f6cc}"
        case .laptopRegular: return "\u{f6cd}"
        case .laserPointerBold: return "\u{f6ce}"
        case .laserPointerFilled: return "\u{f6cf}"
        case .laserPointerLight: return "\u{f6d0}"
        case .laserPointerRegular: return "\u{f6d1}"
        case .launchBold: return "\u{f6d2}"
        case .launchLight: return "\u{f6d3}"
        case .launchRegular: return "\u{f6d4}"
        case .layoutSideBySideVerticalBold: return "\u{f6d5}"
        case .layoutSideBySideVerticalFilled: return "\u{f6d6}"
        case .layoutSideBySideVerticalLight: return "\u{f6d7}"
        case .layoutSideBySideVerticalRegular: return "\u{f6d8}"
        case .leaveBreakoutSessionBold: return "\u{f6d9}"
        case .leaveBreakoutSessionLight: return "\u{f6da}"
        case .leaveBreakoutSessionRegular: return "\u{f6db}"
        case .leaveDeviceBold: return "\u{f6dc}"
        case .leaveDeviceLight: return "\u{f6dd}"
        case .leaveDeviceRegular: return "\u{f6de}"
        case .likeBold: return "\u{f6df}"
        case .likeFilled: return "\u{f6e0}"
        case .likeLight: return "\u{f6e1}"
        case .likeRegular: return "\u{f6e2}"
        case .linkBold: return "\u{f6e3}"
        case .linkLight: return "\u{f6e4}"
        case .linkRegular: return "\u{f6e5}"
        case .listBulletedBold: return "\u{f6e6}"
        case .listBulletedLight: return "\u{f6e7}"
        case .listBulletedRegular: return "\u{f6e8}"
        case .listMenuBold: return "\u{f6e9}"
        case .listMenuLight: return "\u{f6ea}"
        case .listMenuRegular: return "\u{f6eb}"
        case .listNumberedBold: return "\u{f6ec}"
        case .listNumberedLight: return "\u{f6ed}"
        case .listNumberedRegular: return "\u{f6ee}"
        case .liveBold: return "\u{f6ef}"
        case .liveFilled: return "\u{f6f0}"
        case .liveLight: return "\u{f6f1}"
        case .liveRegular: return "\u{f6f2}"
        case .locationBold: return "\u{f6f3}"
        case .locationFilled: return "\u{f6f4}"
        case .locationLight: return "\u{f6f5}"
        case .locationRegular: return "\u{f6f6}"
        case .longTextBoxBold: return "\u{f6f7}"
        case .longTextBoxLight: return "\u{f6f8}"
        case .longTextBoxRegular: return "\u{f6f9}"
        case .lowerHandBold: return "\u{f6fa}"
        case .lowerHandLight: return "\u{f6fb}"
        case .lowerHandRegular: return "\u{f6fc}"
        case .magicPenBold: return "\u{f6fd}"
        case .magicPenFilled: return "\u{f6fe}"
        case .magicPenLight: return "\u{f6ff}"
        case .magicPenRegular: return "\u{f700}"
        case .markAsUnreadBold: return "\u{f701}"
        case .markAsUnreadLight: return "\u{f702}"
        case .markAsUnreadRegular: return "\u{f703}"
        case .markdownBold: return "\u{f704}"
        case .markdownFilled: return "\u{f705}"
        case .markdownLight: return "\u{f706}"
        case .markdownRegular: return "\u{f707}"
        case .markerBold: return "\u{f708}"
        case .markerFilled: return "\u{f709}"
        case .markerLight: return "\u{f70a}"
        case .markerRegular: return "\u{f70b}"
        case .maximizeBold: return "\u{f70c}"
        case .maximizeLight: return "\u{f70d}"
        case .maximizeRegular: return "\u{f70e}"
        case .mediaPlayerBold: return "\u{f70f}"
        case .mediaPlayerLight: return "\u{f710}"
        case .mediaPlayerRegular: return "\u{f711}"
        case .mediaQualityGoodBold: return "\u{f712}"
        case .mediaQualityGoodFilled: return "\u{f713}"
        case .mediaQualityGoodLight: return "\u{f714}"
        case .mediaQualityGoodRegular: return "\u{f715}"
        case .mediaQualityPoorBold: return "\u{f716}"
        case .mediaQualityPoorFilled: return "\u{f717}"
        case .mediaQualityPoorLight: return "\u{f718}"
        case .mediaQualityPoorRegular: return "\u{f719}"
        case .mediaQualityUnstableBold: return "\u{f71a}"
        case .mediaQualityUnstableFilled: return "\u{f71b}"
        case .mediaQualityUnstableLight: return "\u{f71c}"
        case .mediaQualityUnstableRegular: return "\u{f71d}"
        case .meetBold: return "\u{f71e}"
        case .meetEndBold: return "\u{f71f}"
        case .meetEndLight: return "\u{f720}"
        case .meetEndRegular: return "\u{f721}"
        case .meetFilled: return "\u{f722}"
        case .meetLight: return "\u{f723}"
        case .meetRegular: return "\u{f724}"
        case .meetingSummaryBold: return "\u{f725}"
        case .meetingSummaryFilled: return "\u{f726}"
        case .meetingSummaryLight: return "\u{f727}"
        case .meetingSummaryRegular: return "\u{f728}"
        case .meetingsBold: return "\u{f729}"
        case .meetingsFilled: return "\u{f72a}"
        case .meetingsFocusMonthBold: return "\u{f72b}"
        case .meetingsFocusMonthLight: return "\u{f72c}"
        case .meetingsFocusMonthRegular: return "\u{f72d}"
        case .meetingsFocusOneDayBold: return "\u{f72e}"
        case .meetingsFocusOneDayLight: return "\u{f72f}"
        case .meetingsFocusOneDayRegular: return "\u{f730}"
        case .meetingsFocusThreeDayBold: return "\u{f731}"
        case .meetingsFocusThreeDayLight: return "\u{f732}"
        case .meetingsFocusThreeDayRegular: return "\u{f733}"
        case .meetingsFocusUpcomingBold: return "\u{f734}"
        case .meetingsFocusUpcomingLight: return "\u{f735}"
        case .meetingsFocusUpcomingRegular: return "\u{f736}"
        case .meetingsLight: return "\u{f737}"
        case .meetingsPresenceBadgeFilled: return "\u{f738}"
        case .meetingsPresenceBold: return "\u{f739}"
        case .meetingsPresenceFilled: return "\u{f73a}"
        case .meetingsPresenceLight: return "\u{f73b}"
        case .meetingsPresenceRegular: return "\u{f73c}"
        case .meetingsRegular: return "\u{f73d}"
        case .meetingsTeamBold: return "\u{f73e}"
        case .meetingsTeamFilled: return "\u{f73f}"
        case .meetingsTeamLight: return "\u{f740}"
        case .meetingsTeamNewBold: return "\u{f741}"
        case .meetingsTeamNewLight: return "\u{f742}"
        case .meetingsTeamNewRegular: return "\u{f743}"
        case .meetingsTeamRegular: return "\u{f744}"
        case .mentionBold: return "\u{f745}"
        case .mentionLight: return "\u{f746}"
        case .mentionRegular: return "\u{f747}"
        case .messageQueingBold: return "\u{f748}"
        case .messageQueingLight: return "\u{f749}"
        case .messageQueingRegular: return "\u{f74a}"
        case .microphoneBold: return "\u{f74b}"
        case .microphoneFilled: return "\u{f74c}"
        case .microphoneHardMutedBold: return "\u{f74d}"
        case .microphoneHardMutedCircleFilled: return "\u{f74e}"
        case .microphoneHardMutedLight: return "\u{f74f}"
        case .microphoneHardMutedRegular: return "\u{f750}"
        case .microphoneLight: return "\u{f751}"
        case .microphoneMusicModeBold: return "\u{f752}"
        case .microphoneMusicModeLight: return "\u{f753}"
        case .microphoneMusicModeOnBold: return "\u{f754}"
        case .microphoneMusicModeOnLight: return "\u{f755}"
        case .microphoneMusicModeOnRegular: return "\u{f756}"
        case .microphoneMusicModeRegular: return "\u{f757}"
        case .microphoneMutedBold: return "\u{f758}"
        case .microphoneMutedCircleFilled: return "\u{f759}"
        case .microphoneMutedFilled: return "\u{f75a}"
        case .microphoneMutedLight: return "\u{f75b}"
        case .microphoneMutedRegular: return "\u{f75c}"
        case .microphoneOnBold: return "\u{f75d}"
        case .microphoneOnLight: return "\u{f75e}"
        case .microphoneOnRegular: return "\u{f75f}"
        case .microphoneOptAllBold: return "\u{f760}"
        case .microphoneOptAllLight: return "\u{f761}"
        case .microphoneOptAllMutedBold: return "\u{f762}"
        case .microphoneOptAllMutedLight: return "\u{f763}"
        case .microphoneOptAllMutedRegular: return "\u{f764}"
        case .microphoneOptAllOnBold: return "\u{f765}"
        case .microphoneOptAllOnLight: return "\u{f766}"
        case .microphoneOptAllOnRegular: return "\u{f767}"
        case .microphoneOptAllRegular: return "\u{f768}"
        case .microphoneOptMeBold: return "\u{f769}"
        case .microphoneOptMeLight: return "\u{f76a}"
        case .microphoneOptMeMutedBold: return "\u{f76b}"
        case .microphoneOptMeMutedLight: return "\u{f76c}"
        case .microphoneOptMeMutedRegular: return "\u{f76d}"
        case .microphoneOptMeOnBold: return "\u{f76e}"
        case .microphoneOptMeOnLight: return "\u{f76f}"
        case .microphoneOptMeOnRegular: return "\u{f770}"
        case .microphoneOptMeRegular: return "\u{f771}"
        case .microphoneRegular: return "\u{f772}"
        case .mindMapBold: return "\u{f773}"
        case .mindMapLight: return "\u{f774}"
        case .mindMapRegular: return "\u{f775}"
        case .minimizeBold: return "\u{f776}"
        case .minimizeLight: return "\u{f777}"
        case .minimizeRegular: return "\u{f778}"
        case .minusBold: return "\u{f779}"
        case .minusLight: return "\u{f77a}"
        case .minusRegular: return "\u{f77b}"
        case .mirrorBold: return "\u{f77c}"
        case .mirrorFilled: return "\u{f77d}"
        case .mirrorLight: return "\u{f77e}"
        case .mirrorRegular: return "\u{f77f}"
        case .mmsFilled: return "\u{f780}"
        case .moderatorBold: return "\u{f781}"
        case .moderatorLight: return "\u{f782}"
        case .moderatorRegular: return "\u{f783}"
        case .monitoringBold: return "\u{f784}"
        case .monitoringLight: return "\u{f785}"
        case .monitoringRegular: return "\u{f786}"
        case .monthlyRecurringScheduleNodeBold: return "\u{f787}"
        case .monthlyRecurringScheduleNodeLight: return "\u{f788}"
        case .monthlyRecurringScheduleNodeRegular: return "\u{f789}"
        case .moreAdrBold: return "\u{f78a}"
        case .moreAdrLight: return "\u{f78b}"
        case .moreAdrRegular: return "\u{f78c}"
        case .moreBold: return "\u{f78d}"
        case .moreCircleBold: return "\u{f78e}"
        case .moreCircleFilled: return "\u{f78f}"
        case .moreCircleLight: return "\u{f790}"
        case .moreCircleRegular: return "\u{f791}"
        case .moreLight: return "\u{f792}"
        case .moreRegular: return "\u{f793}"
        case .mouseCursorBold: return "\u{f794}"
        case .mouseCursorLight: return "\u{f795}"
        case .mouseCursorRegular: return "\u{f796}"
        case .moveCallInAdrBold: return "\u{f797}"
        case .moveCallInAdrLight: return "\u{f798}"
        case .moveCallInAdrRegular: return "\u{f799}"
        case .moveCallInIphBold: return "\u{f79a}"
        case .moveCallInIphLight: return "\u{f79b}"
        case .moveCallInIphRegular: return "\u{f79c}"
        case .moveCallInLaptopBold: return "\u{f79d}"
        case .moveCallInLaptopLight: return "\u{f79e}"
        case .moveCallInLaptopRegular: return "\u{f79f}"
        case .moveCallInOutAdrBold: return "\u{f7a0}"
        case .moveCallInOutAdrLight: return "\u{f7a1}"
        case .moveCallInOutAdrRegular: return "\u{f7a2}"
        case .moveCallInOutIphBold: return "\u{f7a3}"
        case .moveCallInOutIphLight: return "\u{f7a4}"
        case .moveCallInOutIphRegular: return "\u{f7a5}"
        case .moveCallInTabletBold: return "\u{f7a6}"
        case .moveCallInTabletLight: return "\u{f7a7}"
        case .moveCallInTabletRegular: return "\u{f7a8}"
        case .moveCallOutAdrBold: return "\u{f7a9}"
        case .moveCallOutAdrLight: return "\u{f7aa}"
        case .moveCallOutAdrRegular: return "\u{f7ab}"
        case .moveCallOutIphBold: return "\u{f7ac}"
        case .moveCallOutIphLight: return "\u{f7ad}"
        case .moveCallOutIphRegular: return "\u{f7ae}"
        case .moveCallOutLaptopBold: return "\u{f7af}"
        case .moveCallOutLaptopLight: return "\u{f7b0}"
        case .moveCallOutLaptopRegular: return "\u{f7b1}"
        case .moveCallOutTabletBold: return "\u{f7b2}"
        case .moveCallOutTabletLight: return "\u{f7b3}"
        case .moveCallOutTabletRegular: return "\u{f7b4}"
        case .moveToScreenBold: return "\u{f7b5}"
        case .moveToScreenLight: return "\u{f7b6}"
        case .moveToScreenRegular: return "\u{f7b7}"
        case .multilineChartBold: return "\u{f7b8}"
        case .multilineChartFilled: return "\u{f7b9}"
        case .multilineChartLight: return "\u{f7ba}"
        case .multilineChartRegular: return "\u{f7bb}"
        case .multimediaBold: return "\u{f7bc}"
        case .multimediaFilled: return "\u{f7bd}"
        case .multimediaLight: return "\u{f7be}"
        case .multimediaRegular: return "\u{f7bf}"
        case .multipledDevicesBold: return "\u{f7c0}"
        case .multipledDevicesLight: return "\u{f7c1}"
        case .multipledDevicesRegular: return "\u{f7c2}"
        case .musicModeCircleBold: return "\u{f7c3}"
        case .musicModeCircleFilled: return "\u{f7c4}"
        case .musicModeCircleLight: return "\u{f7c5}"
        case .musicModeCircleRegular: return "\u{f7c6}"
        case .musicNoteBold: return "\u{f7c7}"
        case .musicNoteFilled: return "\u{f7c8}"
        case .musicNoteLight: return "\u{f7c9}"
        case .musicNoteRegular: return "\u{f7ca}"
        case .muteOnEntryBold: return "\u{f7cb}"
        case .muteOnEntryFilled: return "\u{f7cc}"
        case .muteOnEntryLight: return "\u{f7cd}"
        case .muteOnEntryRegular: return "\u{f7ce}"
        case .newManagerBold: return "\u{f7cf}"
        case .newManagerLight: return "\u{f7d0}"
        case .newManagerRegular: return "\u{f7d1}"
        case .newTitleBold: return "\u{f7d2}"
        case .newTitleLight: return "\u{f7d3}"
        case .newTitleRegular: return "\u{f7d4}"
        case .newVoicemailBold: return "\u{f7d5}"
        case .newVoicemailLight: return "\u{f7d6}"
        case .newVoicemailRegular: return "\u{f7d7}"
        case .newWhiteboardBold: return "\u{f7d8}"
        case .newWhiteboardLight: return "\u{f7d9}"
        case .newWhiteboardRegular: return "\u{f7da}"
        case .nextBold: return "\u{f7db}"
        case .nextLight: return "\u{f7dc}"
        case .nextRegular: return "\u{f7dd}"
        case .noDevicesBold: return "\u{f7de}"
        case .noDevicesLight: return "\u{f7df}"
        case .noDevicesRegular: return "\u{f7e0}"
        case .noiseDetectedCanceledFilled: return "\u{f7e1}"
        case .noiseDetectedFilled: return "\u{f7e2}"
        case .noiseNoneCanceledFilled: return "\u{f7e3}"
        case .noiseNoneFilled: return "\u{f7e4}"
        case .noiseRemovalBold: return "\u{f7e5}"
        case .noiseRemovalLight: return "\u{f7e6}"
        case .noiseRemovalRegular: return "\u{f7e7}"
        case .noteBold: return "\u{f7e8}"
        case .noteLight: return "\u{f7e9}"
        case .notePptBold: return "\u{f7ea}"
        case .notePptLight: return "\u{f7eb}"
        case .notePptRegular: return "\u{f7ec}"
        case .noteRegular: return "\u{f7ed}"
        case .notesBold: return "\u{f7ee}"
        case .notesFilled: return "\u{f7ef}"
        case .notesLight: return "\u{f7f0}"
        case .notesRegular: return "\u{f7f1}"
        case .numberBold: return "\u{f7f2}"
        case .numberLight: return "\u{f7f3}"
        case .numberRegular: return "\u{f7f4}"
        case .oldRemoteBold: return "\u{f7f5}"
        case .oldRemoteLight: return "\u{f7f6}"
        case .oldRemoteRegular: return "\u{f7f7}"
        case .oldTouchBold: return "\u{f7f8}"
        case .oldTouchLight: return "\u{f7f9}"
        case .oldTouchRegular: return "\u{f7fa}"
        case .oneColumnBold: return "\u{f7fb}"
        case .oneColumnLight: return "\u{f7fc}"
        case .oneColumnRegular: return "\u{f7fd}"
        case .oneTimeBold: return "\u{f7fe}"
        case .oneTimeLight: return "\u{f7ff}"
        case .oneTimeRegular: return "\u{f800}"
        case .openInFolderBold: return "\u{f801}"
        case .openInFolderLight: return "\u{f802}"
        case .openInFolderRegular: return "\u{f803}"
        case .openPagesBold: return "\u{f804}"
        case .openPagesLight: return "\u{f805}"
        case .openPagesRegular: return "\u{f806}"
        case .otherNumberBold: return "\u{f807}"
        case .otherNumberFilled: return "\u{f808}"
        case .otherNumberLight: return "\u{f809}"
        case .otherNumberRegular: return "\u{f80a}"
        case .otherNumberWarningBold: return "\u{f80b}"
        case .otherNumberWarningLight: return "\u{f80c}"
        case .otherNumberWarningRegular: return "\u{f80d}"
        case .outgoingCallLegacyBold: return "\u{f80e}"
        case .outgoingCallLegacyFilled: return "\u{f80f}"
        case .outgoingCallLegacyLight: return "\u{f810}"
        case .outgoingCallLegacyRegular: return "\u{f811}"
        case .overflowLeftBold: return "\u{f812}"
        case .overflowLeftLight: return "\u{f813}"
        case .overflowLeftRegular: return "\u{f814}"
        case .overflowRightBold: return "\u{f815}"
        case .overflowRightLight: return "\u{f816}"
        case .overflowRightRegular: return "\u{f817}"
        case .pairedCameraBold: return "\u{f818}"
        case .pairedCameraLight: return "\u{f819}"
        case .pairedCameraRegular: return "\u{f81a}"
        case .pairedDeviceBold: return "\u{f81b}"
        case .pairedDeviceLight: return "\u{f81c}"
        case .pairedDeviceRegular: return "\u{f81d}"
        case .pairedHandsetBold: return "\u{f81e}"
        case .pairedHandsetLight: return "\u{f81f}"
        case .pairedHandsetRegular: return "\u{f820}"
        case .pairingBold: return "\u{f821}"
        case .pairingLight: return "\u{f822}"
        case .pairingRegular: return "\u{f823}"
        case .parkedBold: return "\u{f824}"
        case .parkedFilled: return "\u{f825}"
        case .parkedLight: return "\u{f826}"
        case .parkedRegular: return "\u{f827}"
        case .parseBold: return "\u{f828}"
        case .parseLight: return "\u{f829}"
        case .parseRegular: return "\u{f82a}"
        case .partialBold: return "\u{f82b}"
        case .partialLight: return "\u{f82c}"
        case .partialRegular: return "\u{f82d}"
        case .participantAddBold: return "\u{f82e}"
        case .participantAddLight: return "\u{f82f}"
        case .participantAddRegular: return "\u{f830}"
        case .participantBlockedBold: return "\u{f831}"
        case .participantBlockedLight: return "\u{f832}"
        case .participantBlockedRegular: return "\u{f833}"
        case .participantBold: return "\u{f834}"
        case .participantFilled: return "\u{f835}"
        case .participantLight: return "\u{f836}"
        case .participantListBold: return "\u{f837}"
        case .participantListFilled: return "\u{f838}"
        case .participantListLight: return "\u{f839}"
        case .participantListRegular: return "\u{f83a}"
        case .participantRegular: return "\u{f83b}"
        case .participantRemoveBold: return "\u{f83c}"
        case .participantRemoveLight: return "\u{f83d}"
        case .participantRemoveRegular: return "\u{f83e}"
        case .participantUnknownBold: return "\u{f83f}"
        case .participantUnknownLight: return "\u{f840}"
        case .participantUnknownRegular: return "\u{f841}"
        case .passMouseBold: return "\u{f842}"
        case .passMouseLight: return "\u{f843}"
        case .passMouseRegular: return "\u{f844}"
        case .pauseBadgeFilled: return "\u{f845}"
        case .pauseBold: return "\u{f846}"
        case .pauseFilled: return "\u{f847}"
        case .pauseLight: return "\u{f848}"
        case .pauseRegular: return "\u{f849}"
        case .peopleAddBold: return "\u{f84a}"
        case .peopleAddFilled: return "\u{f84b}"
        case .peopleAddLight: return "\u{f84c}"
        case .peopleAddRegular: return "\u{f84d}"
        case .peopleBold: return "\u{f84e}"
        case .peopleCircleBold: return "\u{f84f}"
        case .peopleCircleFilled: return "\u{f850}"
        case .peopleCircleLight: return "\u{f851}"
        case .peopleCircleRegular: return "\u{f852}"
        case .peopleFilled: return "\u{f853}"
        case .peopleInsightsBold: return "\u{f854}"
        case .peopleInsightsFilled: return "\u{f855}"
        case .peopleInsightsLight: return "\u{f856}"
        case .peopleInsightsRegular: return "\u{f857}"
        case .peopleLight: return "\u{f858}"
        case .peopleRegular: return "\u{f859}"
        case .phoneAlertBold: return "\u{f85a}"
        case .phoneAlertLight: return "\u{f85b}"
        case .phoneAlertRegular: return "\u{f85c}"
        case .phoneBadgeFilled: return "\u{f85d}"
        case .phoneBold: return "\u{f85e}"
        case .phoneFilled: return "\u{f85f}"
        case .phoneLight: return "\u{f860}"
        case .phoneMutedBold: return "\u{f861}"
        case .phoneMutedLight: return "\u{f862}"
        case .phoneMutedRegular: return "\u{f863}"
        case .phonePrivateBold: return "\u{f864}"
        case .phonePrivateLight: return "\u{f865}"
        case .phonePrivateRegular: return "\u{f866}"
        case .phoneRegular: return "\u{f867}"
        case .phoneReplyAllBold: return "\u{f868}"
        case .phoneReplyAllLight: return "\u{f869}"
        case .phoneReplyAllRegular: return "\u{f86a}"
        case .phoneReplyBold: return "\u{f86b}"
        case .phoneReplyLight: return "\u{f86c}"
        case .phoneReplyRegular: return "\u{f86d}"
        case .pickerBold: return "\u{f86e}"
        case .pickerLight: return "\u{f86f}"
        case .pickerRegular: return "\u{f870}"
        case .pieChartBold: return "\u{f871}"
        case .pieChartFilled: return "\u{f872}"
        case .pieChartLight: return "\u{f873}"
        case .pieChartRegular: return "\u{f874}"
        case .pinBold: return "\u{f875}"
        case .pinFilled: return "\u{f876}"
        case .pinLight: return "\u{f877}"
        case .pinListActivityBold: return "\u{f878}"
        case .pinListActivityLight: return "\u{f879}"
        case .pinListActivityRegular: return "\u{f87a}"
        case .pinListBold: return "\u{f87b}"
        case .pinListLight: return "\u{f87c}"
        case .pinListRegular: return "\u{f87d}"
        case .pinMutedBold: return "\u{f87e}"
        case .pinMutedFilled: return "\u{f87f}"
        case .pinMutedLight: return "\u{f880}"
        case .pinMutedRegular: return "\u{f881}"
        case .pinRegular: return "\u{f882}"
        case .pipBold: return "\u{f883}"
        case .pipEnterBold: return "\u{f884}"
        case .pipEnterLight: return "\u{f885}"
        case .pipEnterRegular: return "\u{f886}"
        case .pipExitBold: return "\u{f887}"
        case .pipExitLight: return "\u{f888}"
        case .pipExitRegular: return "\u{f889}"
        case .pipFilled: return "\u{f88a}"
        case .pipLight: return "\u{f88b}"
        case .pipRegular: return "\u{f88c}"
        case .placeholderBold: return "\u{f88d}"
        case .placeholderFilled: return "\u{f88e}"
        case .placeholderLight: return "\u{f88f}"
        case .placeholderRegular: return "\u{f890}"
        case .playBold: return "\u{f891}"
        case .playCircleBold: return "\u{f892}"
        case .playCircleFilled: return "\u{f893}"
        case .playCircleLight: return "\u{f894}"
        case .playCircleRegular: return "\u{f895}"
        case .playFilled: return "\u{f896}"
        case .playLight: return "\u{f897}"
        case .playRegular: return "\u{f898}"
        case .plugAcBold: return "\u{f899}"
        case .plugAcLight: return "\u{f89a}"
        case .plugAcRegular: return "\u{f89b}"
        case .plusBold: return "\u{f89c}"
        case .plusCircleBold: return "\u{f89d}"
        case .plusCircleFilled: return "\u{f89e}"
        case .plusCircleLight: return "\u{f89f}"
        case .plusCircleRegular: return "\u{f8a0}"
        case .plusLight: return "\u{f8a1}"
        case .plusRegular: return "\u{f8a2}"
        case .pmrBold: return "\u{f8a3}"
        case .pmrFilled: return "\u{f8a4}"
        case .pmrLight: return "\u{f8a5}"
        case .pmrRegular: return "\u{f8a6}"
        case .pollBold: return "\u{f8a7}"
        case .pollFilled: return "\u{f8a8}"
        case .pollLight: return "\u{f8a9}"
        case .pollRegular: return "\u{f8aa}"
        case .popInBold: return "\u{f8ab}"
        case .popInLight: return "\u{f8ac}"
        case .popInRegular: return "\u{f8ad}"
        case .popOutBold: return "\u{f8ae}"
        case .popOutLight: return "\u{f8af}"
        case .popOutRegular: return "\u{f8b0}"
        case .popUpBold: return "\u{f8b1}"
        case .popUpLight: return "\u{f8b2}"
        case .popUpRegular: return "\u{f8b3}"
        case .portraitLandscapeBold: return "\u{f8b4}"
        case .portraitLandscapeLight: return "\u{f8b5}"
        case .portraitLandscapeRegular: return "\u{f8b6}"
        case .potentialFraudBold: return "\u{f8b7}"
        case .potentialFraudFilled: return "\u{f8b8}"
        case .potentialFraudLight: return "\u{f8b9}"
        case .potentialFraudRegular: return "\u{f8ba}"
        case .powerAcBold: return "\u{f8bb}"
        case .powerAcLight: return "\u{f8bc}"
        case .powerAcRegular: return "\u{f8bd}"
        case .powerBold: return "\u{f8be}"
        case .powerLight: return "\u{f8bf}"
        case .powerRegular: return "\u{f8c0}"
        case .preHeaderBold: return "\u{f8c1}"
        case .preHeaderLight: return "\u{f8c2}"
        case .preHeaderRegular: return "\u{f8c3}"
        case .premiumBold: return "\u{f8c4}"
        case .premiumLight: return "\u{f8c5}"
        case .premiumRegular: return "\u{f8c6}"
        case .presentationBold: return "\u{f8c7}"
        case .presentationLight: return "\u{f8c8}"
        case .presentationRegular: return "\u{f8c9}"
        case .preventDownloadBold: return "\u{f8ca}"
        case .preventDownloadFilled: return "\u{f8cb}"
        case .preventDownloadLight: return "\u{f8cc}"
        case .preventDownloadRegular: return "\u{f8cd}"
        case .primaryParticipantBold: return "\u{f8ce}"
        case .primaryParticipantLight: return "\u{f8cf}"
        case .primaryParticipantRegular: return "\u{f8d0}"
        case .printBold: return "\u{f8d1}"
        case .printLight: return "\u{f8d2}"
        case .printRegular: return "\u{f8d3}"
        case .priorityBadgeFilled: return "\u{f8d4}"
        case .priorityCircleBold: return "\u{f8d5}"
        case .priorityCircleFilled: return "\u{f8d6}"
        case .priorityCircleLight: return "\u{f8d7}"
        case .priorityCircleRegular: return "\u{f8d8}"
        case .priorityCircleTwoBold: return "\u{f8d9}"
        case .priorityCircleTwoFilled: return "\u{f8da}"
        case .priorityCircleTwoLight: return "\u{f8db}"
        case .priorityCircleTwoRegular: return "\u{f8dc}"
        case .priorityWaveBold: return "\u{f8dd}"
        case .priorityWaveLight: return "\u{f8de}"
        case .priorityWaveRegular: return "\u{f8df}"
        case .privacyCircleBold: return "\u{f8e0}"
        case .privacyCircleFilled: return "\u{f8e1}"
        case .privacyCircleLight: return "\u{f8e2}"
        case .privacyCircleRegular: return "\u{f8e3}"
        case .privateBold: return "\u{f8e4}"
        case .privateCircleBold: return "\u{f8e5}"
        case .privateCircleFilled: return "\u{f8e6}"
        case .privateCircleLight: return "\u{f8e7}"
        case .privateCircleRegular: return "\u{f8e8}"
        case .privateLight: return "\u{f8e9}"
        case .privateMeetingBold: return "\u{f8ea}"
        case .privateMeetingLight: return "\u{f8eb}"
        case .privateMeetingRegular: return "\u{f8ec}"
        case .privateRegular: return "\u{f8ed}"
        case .productDemoBold: return "\u{f8ee}"
        case .productDemoLight: return "\u{f8ef}"
        case .productDemoRegular: return "\u{f8f0}"
        case .proximityBold: return "\u{f8f1}"
        case .proximityLight: return "\u{f8f2}"
        case .proximityMutedBold: return "\u{f8f3}"
        case .proximityMutedLight: return "\u{f8f4}"
        case .proximityMutedRegular: return "\u{f8f5}"
        case .proximityRegular: return "\u{f8f6}"
        case .proximityVideoBold: return "\u{f8f7}"
        case .proximityVideoLight: return "\u{f8f8}"
        case .proximityVideoRegular: return "\u{f8f9}"
        case .ptoPresenceBold: return "\u{f8fa}"
        case .ptoPresenceFilled: return "\u{f8fb}"
        case .ptoPresenceLight: return "\u{f8fc}"
        case .ptoPresenceRegular: return "\u{f8fd}"
        case .pullCallBold: return "\u{f8fe}"
        case .pullCallFilled: return "\u{f8ff}"
        case .pullCallLight: return "\u{f900}"
        case .pullCallRegular: return "\u{f901}"
        case .qABold: return "\u{f902}"
        case .qALight: return "\u{f903}"
        case .qARegular: return "\u{f904}"
        case .qrCodeBold: return "\u{f905}"
        case .qrCodeLight: return "\u{f906}"
        case .qrCodeRegular: return "\u{f907}"
        case .qrCodeScanBold: return "\u{f908}"
        case .qrCodeScanLight: return "\u{f909}"
        case .qrCodeScanRegular: return "\u{f90a}"
        case .qualityBold: return "\u{f90b}"
        case .qualityLight: return "\u{f90c}"
        case .qualityRegular: return "\u{f90d}"
        case .queueContactBold: return "\u{f90e}"
        case .queueContactFilled: return "\u{f90f}"
        case .queueContactLight: return "\u{f910}"
        case .queueContactRegular: return "\u{f911}"
        case .quietBold: return "\u{f912}"
        case .quietHoursPresenceBold: return "\u{f913}"
        case .quietHoursPresenceFilled: return "\u{f914}"
        case .quietHoursPresenceLight: return "\u{f915}"
        case .quietHoursPresenceRegular: return "\u{f916}"
        case .quietLight: return "\u{f917}"
        case .quietRegular: return "\u{f918}"
        case .radioButtonGroupBold: return "\u{f919}"
        case .radioButtonGroupLight: return "\u{f91a}"
        case .radioButtonGroupRegular: return "\u{f91b}"
        case .raiseHandBold: return "\u{f91c}"
        case .raiseHandCircleFilled: return "\u{f91d}"
        case .raiseHandFilled: return "\u{f91e}"
        case .raiseHandLight: return "\u{f91f}"
        case .raiseHandRegular: return "\u{f920}"
        case .ramBold: return "\u{f921}"
        case .ramLight: return "\u{f922}"
        case .ramRegular: return "\u{f923}"
        case .reactionsBold: return "\u{f924}"
        case .reactionsFilled: return "\u{f925}"
        case .reactionsLight: return "\u{f926}"
        case .reactionsRegular: return "\u{f927}"
        case .reactivateBold: return "\u{f928}"
        case .reactivateLight: return "\u{f929}"
        case .reactivateRegular: return "\u{f92a}"
        case .receiveVoiceBold: return "\u{f92b}"
        case .receiveVoiceFilled: return "\u{f92c}"
        case .receiveVoiceLight: return "\u{f92d}"
        case .receiveVoiceRegular: return "\u{f92e}"
        case .recentsBold: return "\u{f92f}"
        case .recentsFilled: return "\u{f930}"
        case .recentsLight: return "\u{f931}"
        case .recentsPresenceBadgeFilled: return "\u{f932}"
        case .recentsPresenceBold: return "\u{f933}"
        case .recentsPresenceFilled: return "\u{f934}"
        case .recentsPresenceLight: return "\u{f935}"
        case .recentsPresenceRegular: return "\u{f936}"
        case .recentsRegular: return "\u{f937}"
        case .recordActiveBadgeFilled: return "\u{f938}"
        case .recordActiveBold: return "\u{f939}"
        case .recordActiveFilled: return "\u{f93a}"
        case .recordActiveLight: return "\u{f93b}"
        case .recordActiveRegular: return "\u{f93c}"
        case .recordBold: return "\u{f93d}"
        case .recordFilled: return "\u{f93e}"
        case .recordLight: return "\u{f93f}"
        case .recordPausedBadgeFilled: return "\u{f940}"
        case .recordPausedBold: return "\u{f941}"
        case .recordPausedFilled: return "\u{f942}"
        case .recordPausedLight: return "\u{f943}"
        case .recordPausedRegular: return "\u{f944}"
        case .recordRegular: return "\u{f945}"
        case .recurringBold: return "\u{f946}"
        case .recurringLight: return "\u{f947}"
        case .recurringOffBold: return "\u{f948}"
        case .recurringOffLight: return "\u{f949}"
        case .recurringOffRegular: return "\u{f94a}"
        case .recurringRegular: return "\u{f94b}"
        case .redoBold: return "\u{f94c}"
        case .redoLight: return "\u{f94d}"
        case .redoRegular: return "\u{f94e}"
        case .refreshBold: return "\u{f94f}"
        case .refreshLight: return "\u{f950}"
        case .refreshRegular: return "\u{f951}"
        case .remoteDesktopControlBold: return "\u{f952}"
        case .remoteDesktopControlFilled: return "\u{f953}"
        case .remoteDesktopControlLight: return "\u{f954}"
        case .remoteDesktopControlRegular: return "\u{f955}"
        case .removeBold: return "\u{f956}"
        case .removeFilled: return "\u{f957}"
        case .removeLight: return "\u{f958}"
        case .removeRegular: return "\u{f959}"
        case .replyBold: return "\u{f95a}"
        case .replyFilled: return "\u{f95b}"
        case .replyLight: return "\u{f95c}"
        case .replyListBold: return "\u{f95d}"
        case .replyListLight: return "\u{f95e}"
        case .replyListRegular: return "\u{f95f}"
        case .replyPrivatelyBold: return "\u{f960}"
        case .replyPrivatelyLight: return "\u{f961}"
        case .replyPrivatelyRegular: return "\u{f962}"
        case .replyRegular: return "\u{f963}"
        case .resetBold: return "\u{f964}"
        case .resetLight: return "\u{f965}"
        case .resetRegular: return "\u{f966}"
        case .resizeCornerBold: return "\u{f967}"
        case .resizeCornerLight: return "\u{f968}"
        case .resizeCornerRegular: return "\u{f969}"
        case .responsiveMobileBold: return "\u{f96a}"
        case .responsiveMobileLight: return "\u{f96b}"
        case .responsiveMobileRegular: return "\u{f96c}"
        case .restartBold: return "\u{f96d}"
        case .restartLight: return "\u{f96e}"
        case .restartRegular: return "\u{f96f}"
        case .retrieveCallBold: return "\u{f970}"
        case .retrieveCallFilled: return "\u{f971}"
        case .retrieveCallLight: return "\u{f972}"
        case .retrieveCallRegular: return "\u{f973}"
        case .returnBold: return "\u{f974}"
        case .returnLight: return "\u{f975}"
        case .returnRegular: return "\u{f976}"
        case .rewindTenSecBold: return "\u{f977}"
        case .rewindTenSecLight: return "\u{f978}"
        case .rewindTenSecRegular: return "\u{f979}"
        case .ringtoneBold: return "\u{f97a}"
        case .ringtoneLight: return "\u{f97b}"
        case .ringtoneRegular: return "\u{f97c}"
        case .roomCalendarBold: return "\u{f97d}"
        case .roomCalendarLight: return "\u{f97e}"
        case .roomCalendarRegular: return "\u{f97f}"
        case .roomLightsBold: return "\u{f980}"
        case .roomLightsFilled: return "\u{f981}"
        case .roomLightsLight: return "\u{f982}"
        case .roomLightsRegular: return "\u{f983}"
        case .rotateContentBold: return "\u{f984}"
        case .rotateContentFilled: return "\u{f985}"
        case .rotateContentLight: return "\u{f986}"
        case .rotateContentRegular: return "\u{f987}"
        case .rssBold: return "\u{f988}"
        case .rssFilled: return "\u{f989}"
        case .rssLight: return "\u{f98a}"
        case .rssRegular: return "\u{f98b}"
        case .ruleBasedBold: return "\u{f98c}"
        case .ruleBasedLight: return "\u{f98d}"
        case .ruleBasedRegular: return "\u{f98e}"
        case .runningApplicationBold: return "\u{f98f}"
        case .runningApplicationFilled: return "\u{f990}"
        case .runningApplicationLight: return "\u{f991}"
        case .runningApplicationRegular: return "\u{f992}"
        case .saveBold: return "\u{f993}"
        case .saveLight: return "\u{f994}"
        case .saveRegular: return "\u{f995}"
        case .saveTranscriptBold: return "\u{f996}"
        case .saveTranscriptFilled: return "\u{f997}"
        case .saveTranscriptLight: return "\u{f998}"
        case .saveTranscriptRegular: return "\u{f999}"
        case .scanBold: return "\u{f99a}"
        case .scanLight: return "\u{f99b}"
        case .scanRegular: return "\u{f99c}"
        case .scheduleSendBold: return "\u{f99d}"
        case .scheduleSendFilled: return "\u{f99e}"
        case .scheduleSendLight: return "\u{f99f}"
        case .scheduleSendRegular: return "\u{f9a0}"
        case .scheduleWinnerBold: return "\u{f9a1}"
        case .scheduleWinnerFilled: return "\u{f9a2}"
        case .scheduleWinnerLight: return "\u{f9a3}"
        case .scheduleWinnerRegular: return "\u{f9a4}"
        case .schedulerAvailableBold: return "\u{f9a5}"
        case .schedulerAvailableLight: return "\u{f9a6}"
        case .schedulerAvailableRegular: return "\u{f9a7}"
        case .schedulerNotWorkingHoursBold: return "\u{f9a8}"
        case .schedulerNotWorkingHoursLight: return "\u{f9a9}"
        case .schedulerNotWorkingHoursRegular: return "\u{f9aa}"
        case .schedulerUnavailableBold: return "\u{f9ab}"
        case .schedulerUnavailableLight: return "\u{f9ac}"
        case .schedulerUnavailableRegular: return "\u{f9ad}"
        case .schedulerUnknownBold: return "\u{f9ae}"
        case .schedulerUnknownLight: return "\u{f9af}"
        case .schedulerUnknownRegular: return "\u{f9b0}"
        case .screenshotBold: return "\u{f9b1}"
        case .screenshotDocBold: return "\u{f9b2}"
        case .screenshotDocFilled: return "\u{f9b3}"
        case .screenshotDocLight: return "\u{f9b4}"
        case .screenshotDocRegular: return "\u{f9b5}"
        case .screenshotLight: return "\u{f9b6}"
        case .screenshotRegular: return "\u{f9b7}"
        case .searchBold: return "\u{f9b8}"
        case .searchFilled: return "\u{f9b9}"
        case .searchLight: return "\u{f9ba}"
        case .searchRegular: return "\u{f9bb}"
        case .secondaryArrowBold: return "\u{f9bc}"
        case .secondaryArrowLight: return "\u{f9bd}"
        case .secondaryArrowRegular: return "\u{f9be}"
        case .secureCallLockBold: return "\u{f9bf}"
        case .secureCallLockFilled: return "\u{f9c0}"
        case .secureCallLockLight: return "\u{f9c1}"
        case .secureCallLockRegular: return "\u{f9c2}"
        case .secureCallShieldBold: return "\u{f9c3}"
        case .secureCallShieldFilled: return "\u{f9c4}"
        case .secureCallShieldLight: return "\u{f9c5}"
        case .secureCallShieldRegular: return "\u{f9c6}"
        case .secureCircleBold: return "\u{f9c7}"
        case .secureCircleFilled: return "\u{f9c8}"
        case .secureCircleLight: return "\u{f9c9}"
        case .secureCircleRegular: return "\u{f9ca}"
        case .secureLockBold: return "\u{f9cb}"
        case .secureLockFilled: return "\u{f9cc}"
        case .secureLockLight: return "\u{f9cd}"
        case .secureLockRegular: return "\u{f9ce}"
        case .segmentExcludeFilled: return "\u{f9cf}"
        case .segmentFilterFilled: return "\u{f9d0}"
        case .segmentIncludeFilled: return "\u{f9d1}"
        case .selectAllBold: return "\u{f9d2}"
        case .selectAllFilled: return "\u{f9d3}"
        case .selectAllLight: return "\u{f9d4}"
        case .selectAllRegular: return "\u{f9d5}"
        case .selectionBold: return "\u{f9d6}"
        case .selectionFilled: return "\u{f9d7}"
        case .selectionLight: return "\u{f9d8}"
        case .selectionRegular: return "\u{f9d9}"
        case .sendBold: return "\u{f9da}"
        case .sendDigitsBold: return "\u{f9db}"
        case .sendDigitsFilled: return "\u{f9dc}"
        case .sendDigitsLight: return "\u{f9dd}"
        case .sendDigitsRegular: return "\u{f9de}"
        case .sendFilled: return "\u{f9df}"
        case .sendLight: return "\u{f9e0}"
        case .sendRegular: return "\u{f9e1}"
        case .sendVoiceBold: return "\u{f9e2}"
        case .sendVoiceFilled: return "\u{f9e3}"
        case .sendVoiceLight: return "\u{f9e4}"
        case .sendVoiceRegular: return "\u{f9e5}"
        case .serverBold: return "\u{f9e6}"
        case .serverErrorBold: return "\u{f9e7}"
        case .serverErrorLight: return "\u{f9e8}"
        case .serverErrorRegular: return "\u{f9e9}"
        case .serverLight: return "\u{f9ea}"
        case .serverRegular: return "\u{f9eb}"
        case .servicesBold: return "\u{f9ec}"
        case .servicesLight: return "\u{f9ed}"
        case .servicesRegular: return "\u{f9ee}"
        case .setVariableBold: return "\u{f9ef}"
        case .setVariableLight: return "\u{f9f0}"
        case .setVariableRegular: return "\u{f9f1}"
        case .settingsBold: return "\u{f9f2}"
        case .settingsFilled: return "\u{f9f3}"
        case .settingsLight: return "\u{f9f4}"
        case .settingsRegular: return "\u{f9f5}"
        case .setupAssistantBold: return "\u{f9f6}"
        case .setupAssistantLight: return "\u{f9f7}"
        case .setupAssistantRegular: return "\u{f9f8}"
        case .sftpBold: return "\u{f9f9}"
        case .sftpLight: return "\u{f9fa}"
        case .sftpRegular: return "\u{f9fb}"
        case .shapeCircleBold: return "\u{f9fc}"
        case .shapeCircleFilled: return "\u{f9fd}"
        case .shapeCircleLight: return "\u{f9fe}"
        case .shapeCircleMdFilled: return "\u{f9ff}"
        case .shapeCircleRegular: return "\u{fa00}"
        case .shapeCircleSmFilled: return "\u{fa01}"
        case .shapeDiagonalLineBold: return "\u{fa02}"
        case .shapeDiagonalLineLight: return "\u{fa03}"
        case .shapeDiagonalLineRegular: return "\u{fa04}"
        case .shapeDiamondBold: return "\u{fa05}"
        case .shapeDiamondFilled: return "\u{fa06}"
        case .shapeDiamondLight: return "\u{fa07}"
        case .shapeDiamondRegular: return "\u{fa08}"
        case .shapeOvalBold: return "\u{fa09}"
        case .shapeOvalLight: return "\u{fa0a}"
        case .shapeOvalRegular: return "\u{fa0b}"
        case .shapeSquareBold: return "\u{fa0c}"
        case .shapeSquareFilled: return "\u{fa0d}"
        case .shapeSquareLight: return "\u{fa0e}"
        case .shapeSquareRegular: return "\u{fa0f}"
        case .shapeTriangleBold: return "\u{fa10}"
        case .shapeTriangleFilled: return "\u{fa11}"
        case .shapeTriangleLight: return "\u{fa12}"
        case .shapeTriangleRegular: return "\u{fa13}"
        case .shapesBold: return "\u{fa14}"
        case .shapesFilled: return "\u{fa15}"
        case .shapesLight: return "\u{fa16}"
        case .shapesRegular: return "\u{fa17}"
        case .shareCNativeAdrBold: return "\u{fa18}"
        case .shareCNativeAdrFilled: return "\u{fa19}"
        case .shareCNativeAdrLight: return "\u{fa1a}"
        case .shareCNativeAdrRegular: return "\u{fa1b}"
        case .shareCNativeIphBold: return "\u{fa1c}"
        case .shareCNativeIphLight: return "\u{fa1d}"
        case .shareCNativeIphRegular: return "\u{fa1e}"
        case .shareContentOnDeviceBold: return "\u{fa1f}"
        case .shareContentOnDeviceLight: return "\u{fa20}"
        case .shareContentOnDeviceRegular: return "\u{fa21}"
        case .shareScreenAddBold: return "\u{fa22}"
        case .shareScreenAddLight: return "\u{fa23}"
        case .shareScreenAddRegular: return "\u{fa24}"
        case .shareScreenBadgeFilled: return "\u{fa25}"
        case .shareScreenBold: return "\u{fa26}"
        case .shareScreenFilled: return "\u{fa27}"
        case .shareScreenLight: return "\u{fa28}"
        case .shareScreenRegular: return "\u{fa29}"
        case .shareSpaceBold: return "\u{fa2a}"
        case .shareSpaceLight: return "\u{fa2b}"
        case .shareSpaceRegular: return "\u{fa2c}"
        case .shieldBold: return "\u{fa2d}"
        case .shieldLight: return "\u{fa2e}"
        case .shieldRegular: return "\u{fa2f}"
        case .shoppingCartBold: return "\u{fa30}"
        case .shoppingCartFilled: return "\u{fa31}"
        case .shoppingCartLight: return "\u{fa32}"
        case .shoppingCartRegular: return "\u{fa33}"
        case .shortTextBoxBold: return "\u{fa34}"
        case .shortTextBoxLight: return "\u{fa35}"
        case .shortTextBoxRegular: return "\u{fa36}"
        case .showBold: return "\u{fa37}"
        case .showFilled: return "\u{fa38}"
        case .showLight: return "\u{fa39}"
        case .showRegular: return "\u{fa3a}"
        case .signInBold: return "\u{fa3b}"
        case .signInFilled: return "\u{fa3c}"
        case .signInForcedBold: return "\u{fa3d}"
        case .signInForcedLight: return "\u{fa3e}"
        case .signInForcedRegular: return "\u{fa3f}"
        case .signInLight: return "\u{fa40}"
        case .signInRegular: return "\u{fa41}"
        case .signLangIntBold: return "\u{fa42}"
        case .signLangIntLight: return "\u{fa43}"
        case .signLangIntRegular: return "\u{fa44}"
        case .signOutBold: return "\u{fa45}"
        case .signOutLight: return "\u{fa46}"
        case .signOutRegular: return "\u{fa47}"
        case .signalFourBold: return "\u{fa48}"
        case .signalFourLight: return "\u{fa49}"
        case .signalFourRegular: return "\u{fa4a}"
        case .signalOneBold: return "\u{fa4b}"
        case .signalOneLight: return "\u{fa4c}"
        case .signalOneRegular: return "\u{fa4d}"
        case .signalThreeBold: return "\u{fa4e}"
        case .signalThreeLight: return "\u{fa4f}"
        case .signalThreeRegular: return "\u{fa50}"
        case .signalTwoBold: return "\u{fa51}"
        case .signalTwoLight: return "\u{fa52}"
        case .signalTwoRegular: return "\u{fa53}"
        case .signalZeroBold: return "\u{fa54}"
        case .signalZeroLight: return "\u{fa55}"
        case .signalZeroRegular: return "\u{fa56}"
        case .simplePromotionBold: return "\u{fa57}"
        case .simplePromotionLight: return "\u{fa58}"
        case .simplePromotionRegular: return "\u{fa59}"
        case .singleNumberReachBold: return "\u{fa5a}"
        case .singleNumberReachLight: return "\u{fa5b}"
        case .singleNumberReachRegular: return "\u{fa5c}"
        case .sipRegistrationInProgressBold: return "\u{fa5d}"
        case .sipRegistrationInProgressFilled: return "\u{fa5e}"
        case .sipRegistrationInProgressLight: return "\u{fa5f}"
        case .sipRegistrationInProgressRegular: return "\u{fa60}"
        case .skipBold: return "\u{fa61}"
        case .skipBwBold: return "\u{fa62}"
        case .skipBwFilled: return "\u{fa63}"
        case .skipBwLight: return "\u{fa64}"
        case .skipBwRegular: return "\u{fa65}"
        case .skipFwBold: return "\u{fa66}"
        case .skipFwFilled: return "\u{fa67}"
        case .skipFwLight: return "\u{fa68}"
        case .skipFwRegular: return "\u{fa69}"
        case .skipLight: return "\u{fa6a}"
        case .skipRegular: return "\u{fa6b}"
        case .smartAudioBold: return "\u{fa6c}"
        case .smartAudioLight: return "\u{fa6d}"
        case .smartAudioRegular: return "\u{fa6e}"
        case .smsFilled: return "\u{fa6f}"
        case .smsInboundBold: return "\u{fa70}"
        case .smsInboundLight: return "\u{fa71}"
        case .smsInboundRegular: return "\u{fa72}"
        case .smsMessageBold: return "\u{fa73}"
        case .smsMessageFilled: return "\u{fa74}"
        case .smsMessageLight: return "\u{fa75}"
        case .smsMessageRegular: return "\u{fa76}"
        case .smsOutgoingFilled: return "\u{fa77}"
        case .smsUnreadBold: return "\u{fa78}"
        case .smsUnreadLight: return "\u{fa79}"
        case .smsUnreadRegular: return "\u{fa7a}"
        case .sortAscendingBold: return "\u{fa7b}"
        case .sortAscendingLight: return "\u{fa7c}"
        case .sortAscendingRegular: return "\u{fa7d}"
        case .sortDescendingBold: return "\u{fa7e}"
        case .sortDescendingLight: return "\u{fa7f}"
        case .sortDescendingRegular: return "\u{fa80}"
        case .soundDefaultBold: return "\u{fa81}"
        case .soundDefaultLight: return "\u{fa82}"
        case .soundDefaultRegular: return "\u{fa83}"
        case .sparkleBold: return "\u{fa84}"
        case .sparkleFilled: return "\u{fa85}"
        case .sparkleLight: return "\u{fa86}"
        case .sparkleRegular: return "\u{fa87}"
        case .speakerBold: return "\u{fa88}"
        case .speakerDisconnectedBold: return "\u{fa89}"
        case .speakerDisconnectedFilled: return "\u{fa8a}"
        case .speakerDisconnectedLight: return "\u{fa8b}"
        case .speakerDisconnectedRegular: return "\u{fa8c}"
        case .speakerFilled: return "\u{fa8d}"
        case .speakerLight: return "\u{fa8e}"
        case .speakerMutedBold: return "\u{fa8f}"
        case .speakerMutedFilled: return "\u{fa90}"
        case .speakerMutedLight: return "\u{fa91}"
        case .speakerMutedRegular: return "\u{fa92}"
        case .speakerOffBold: return "\u{fa93}"
        case .speakerOffFilled: return "\u{fa94}"
        case .speakerOffLight: return "\u{fa95}"
        case .speakerOffRegular: return "\u{fa96}"
        case .speakerOnBold: return "\u{fa97}"
        case .speakerOnLight: return "\u{fa98}"
        case .speakerOnRegular: return "\u{fa99}"
        case .speakerRegular: return "\u{fa9a}"
        case .speakerTurnDownBold: return "\u{fa9b}"
        case .speakerTurnDownFilled: return "\u{fa9c}"
        case .speakerTurnDownLight: return "\u{fa9d}"
        case .speakerTurnDownRegular: return "\u{fa9e}"
        case .speakerTurnUpBold: return "\u{fa9f}"
        case .speakerTurnUpFilled: return "\u{faa0}"
        case .speakerTurnUpLight: return "\u{faa1}"
        case .speakerTurnUpRegular: return "\u{faa2}"
        case .speedDialBold: return "\u{faa3}"
        case .speedDialFilled: return "\u{faa4}"
        case .speedDialLight: return "\u{faa5}"
        case .speedDialRegular: return "\u{faa6}"
        case .spellCheckerBold: return "\u{faa7}"
        case .spellCheckerLight: return "\u{faa8}"
        case .spellCheckerRegular: return "\u{faa9}"
        case .splitViewBold: return "\u{faaa}"
        case .splitViewLight: return "\u{faab}"
        case .splitViewRegular: return "\u{faac}"
        case .stackedAreaChartBold: return "\u{faad}"
        case .stackedAreaChartFilled: return "\u{faae}"
        case .stackedAreaChartFullBold: return "\u{faaf}"
        case .stackedAreaChartFullFilled: return "\u{fab0}"
        case .stackedAreaChartFullLight: return "\u{fab1}"
        case .stackedAreaChartFullRegular: return "\u{fab2}"
        case .stackedAreaChartLight: return "\u{fab3}"
        case .stackedAreaChartRegular: return "\u{fab4}"
        case .stackedBarChartBold: return "\u{fab5}"
        case .stackedBarChartFilled: return "\u{fab6}"
        case .stackedBarChartFullBold: return "\u{fab7}"
        case .stackedBarChartFullFilled: return "\u{fab8}"
        case .stackedBarChartFullLight: return "\u{fab9}"
        case .stackedBarChartFullRegular: return "\u{faba}"
        case .stackedBarChartLight: return "\u{fabb}"
        case .stackedBarChartRegular: return "\u{fabc}"
        case .startChatBold: return "\u{fabd}"
        case .startChatLight: return "\u{fabe}"
        case .startChatRegular: return "\u{fabf}"
        case .stethoscopeBold: return "\u{fac0}"
        case .stethoscopeLight: return "\u{fac1}"
        case .stethoscopeRegular: return "\u{fac2}"
        case .stickersBold: return "\u{fac3}"
        case .stickersLight: return "\u{fac4}"
        case .stickersRegular: return "\u{fac5}"
        case .stickiesBold: return "\u{fac6}"
        case .stickiesLight: return "\u{fac7}"
        case .stickiesRegular: return "\u{fac8}"
        case .stopBold: return "\u{fac9}"
        case .stopCircleBold: return "\u{faca}"
        case .stopCircleFilled: return "\u{facb}"
        case .stopCircleLight: return "\u{facc}"
        case .stopCircleRegular: return "\u{facd}"
        case .stopContentShareBold: return "\u{face}"
        case .stopContentShareLight: return "\u{facf}"
        case .stopContentShareRegular: return "\u{fad0}"
        case .stopFilled: return "\u{fad1}"
        case .stopLight: return "\u{fad2}"
        case .stopRegular: return "\u{fad3}"
        case .storedInfoBold: return "\u{fad4}"
        case .storedInfoFilled: return "\u{fad5}"
        case .storedInfoLight: return "\u{fad6}"
        case .storedInfoRegular: return "\u{fad7}"
        case .streamingBold: return "\u{fad8}"
        case .streamingLight: return "\u{fad9}"
        case .streamingRegular: return "\u{fada}"
        case .strikethroughBold: return "\u{fadb}"
        case .strikethroughFilled: return "\u{fadc}"
        case .strikethroughLight: return "\u{fadd}"
        case .strikethroughRegular: return "\u{fade}"
        case .studioModeBold: return "\u{fadf}"
        case .studioModeLight: return "\u{fae0}"
        case .studioModeRegular: return "\u{fae1}"
        case .subscriptBold: return "\u{fae2}"
        case .subscriptLight: return "\u{fae3}"
        case .subscriptRegular: return "\u{fae4}"
        case .superscriptBold: return "\u{fae5}"
        case .superscriptLight: return "\u{fae6}"
        case .superscriptRegular: return "\u{fae7}"
        case .surveyBold: return "\u{fae8}"
        case .surveyFilled: return "\u{fae9}"
        case .surveyLight: return "\u{faea}"
        case .surveyRegular: return "\u{faeb}"
        case .sxEightyCodecBold: return "\u{faec}"
        case .sxEightyCodecLight: return "\u{faed}"
        case .sxEightyCodecRegular: return "\u{faee}"
        case .sxTenBold: return "\u{faef}"
        case .sxTenLight: return "\u{faf0}"
        case .sxTenRegular: return "\u{faf1}"
        case .sxTwentyBold: return "\u{faf2}"
        case .sxTwentyLight: return "\u{faf3}"
        case .sxTwentyRegular: return "\u{faf4}"
        case .tableBold: return "\u{faf5}"
        case .tableLight: return "\u{faf6}"
        case .tableRegular: return "\u{faf7}"
        case .tabletBold: return "\u{faf8}"
        case .tabletLight: return "\u{faf9}"
        case .tabletRegular: return "\u{fafa}"
        case .tabsBold: return "\u{fafb}"
        case .tabsLight: return "\u{fafc}"
        case .tabsRegular: return "\u{fafd}"
        case .tagBold: return "\u{fafe}"
        case .tagLight: return "\u{faff}"
        case .tagRegular: return "\u{fb00}"
        case .tapBold: return "\u{fb01}"
        case .tapFilled: return "\u{fb02}"
        case .tapLight: return "\u{fb03}"
        case .tapRegular: return "\u{fb04}"
        case .telepresenceAlertBold: return "\u{fb05}"
        case .telepresenceAlertLight: return "\u{fb06}"
        case .telepresenceAlertMutedBold: return "\u{fb07}"
        case .telepresenceAlertMutedLight: return "\u{fb08}"
        case .telepresenceAlertMutedRegular: return "\u{fb09}"
        case .telepresenceAlertRegular: return "\u{fb0a}"
        case .telepresenceBold: return "\u{fb0b}"
        case .telepresenceIxFiveThousandBold: return "\u{fb0c}"
        case .telepresenceIxFiveThousandLight: return "\u{fb0d}"
        case .telepresenceIxFiveThousandRegular: return "\u{fb0e}"
        case .telepresenceLight: return "\u{fb0f}"
        case .telepresenceMutedBold: return "\u{fb10}"
        case .telepresenceMutedLight: return "\u{fb11}"
        case .telepresenceMutedRegular: return "\u{fb12}"
        case .telepresencePrivateBold: return "\u{fb13}"
        case .telepresencePrivateLight: return "\u{fb14}"
        case .telepresencePrivateRegular: return "\u{fb15}"
        case .telepresenceRegular: return "\u{fb16}"
        case .temperatureBold: return "\u{fb17}"
        case .temperatureLight: return "\u{fb18}"
        case .temperatureRegular: return "\u{fb19}"
        case .testTubeBold: return "\u{fb1a}"
        case .testTubeFilled: return "\u{fb1b}"
        case .testTubeLight: return "\u{fb1c}"
        case .testTubeRegular: return "\u{fb1d}"
        case .textAlignCenterBold: return "\u{fb1e}"
        case .textAlignCenterFilled: return "\u{fb1f}"
        case .textAlignCenterLight: return "\u{fb20}"
        case .textAlignCenterRegular: return "\u{fb21}"
        case .textAlignLeftBold: return "\u{fb22}"
        case .textAlignLeftFilled: return "\u{fb23}"
        case .textAlignLeftLight: return "\u{fb24}"
        case .textAlignLeftRegular: return "\u{fb25}"
        case .textAlignRightBold: return "\u{fb26}"
        case .textAlignRightFilled: return "\u{fb27}"
        case .textAlignRightLight: return "\u{fb28}"
        case .textAlignRightRegular: return "\u{fb29}"
        case .textBold: return "\u{fb2a}"
        case .textBoxCursorLight: return "\u{fb2b}"
        case .textCodeBlockBold: return "\u{fb2c}"
        case .textCodeBlockLight: return "\u{fb2d}"
        case .textCodeBlockRegular: return "\u{fb2e}"
        case .textHighlightBold: return "\u{fb2f}"
        case .textHighlightFilled: return "\u{fb30}"
        case .textHighlightLight: return "\u{fb31}"
        case .textHighlightRegular: return "\u{fb32}"
        case .textLight: return "\u{fb33}"
        case .textRegular: return "\u{fb34}"
        case .threeColumnBold: return "\u{fb35}"
        case .threeColumnLight: return "\u{fb36}"
        case .threeColumnRegular: return "\u{fb37}"
        case .threeDObjectBold: return "\u{fb38}"
        case .threeDObjectLight: return "\u{fb39}"
        case .threeDObjectRegular: return "\u{fb3a}"
        case .timeExclusionBold: return "\u{fb3b}"
        case .timeExclusionLight: return "\u{fb3c}"
        case .timeExclusionRegular: return "\u{fb3d}"
        case .tooFastBold: return "\u{fb3e}"
        case .tooFastLight: return "\u{fb3f}"
        case .tooFastRegular: return "\u{fb40}"
        case .tooSlowBold: return "\u{fb41}"
        case .tooSlowLight: return "\u{fb42}"
        case .tooSlowRegular: return "\u{fb43}"
        case .toolsBold: return "\u{fb44}"
        case .toolsFilled: return "\u{fb45}"
        case .toolsLight: return "\u{fb46}"
        case .toolsRegular: return "\u{fb47}"
        case .touchTenBold: return "\u{fb48}"
        case .touchTenLight: return "\u{fb49}"
        case .touchTenRegular: return "\u{fb4a}"
        case .transcriptBold: return "\u{fb4b}"
        case .transcriptFilled: return "\u{fb4c}"
        case .transcriptLight: return "\u{fb4d}"
        case .transcriptRegular: return "\u{fb4e}"
        case .translateBold: return "\u{fb4f}"
        case .translateLight: return "\u{fb50}"
        case .translateRegular: return "\u{fb51}"
        case .translateUndoBold: return "\u{fb52}"
        case .translateUndoLight: return "\u{fb53}"
        case .translateUndoRegular: return "\u{fb54}"
        case .trendingBold: return "\u{fb55}"
        case .trendingDownBold: return "\u{fb56}"
        case .trendingDownFilled: return "\u{fb57}"
        case .trendingDownLight: return "\u{fb58}"
        case .trendingDownRegular: return "\u{fb59}"
        case .trendingFilled: return "\u{fb5a}"
        case .trendingLight: return "\u{fb5b}"
        case .trendingRegular: return "\u{fb5c}"
        case .trimBold: return "\u{fb5d}"
        case .trimLight: return "\u{fb5e}"
        case .trimRegular: return "\u{fb5f}"
        case .twoColumnBold: return "\u{fb60}"
        case .twoColumnLight: return "\u{fb61}"
        case .twoColumnRegular: return "\u{fb62}"
        case .twoWayVoiceStreamBold: return "\u{fb63}"
        case .twoWayVoiceStreamFilled: return "\u{fb64}"
        case .twoWayVoiceStreamLight: return "\u{fb65}"
        case .twoWayVoiceStreamRegular: return "\u{fb66}"
        case .ucmCloudBold: return "\u{fb67}"
        case .ucmCloudLight: return "\u{fb68}"
        case .ucmCloudRegular: return "\u{fb69}"
        case .unblockBold: return "\u{fb6a}"
        case .unblockFilled: return "\u{fb6b}"
        case .unblockLight: return "\u{fb6c}"
        case .unblockRegular: return "\u{fb6d}"
        case .underlineBold: return "\u{fb6e}"
        case .underlineFilled: return "\u{fb6f}"
        case .underlineLight: return "\u{fb70}"
        case .underlineRegular: return "\u{fb71}"
        case .undoBold: return "\u{fb72}"
        case .undoLight: return "\u{fb73}"
        case .undoRegular: return "\u{fb74}"
        case .unlinkBold: return "\u{fb75}"
        case .unlinkLight: return "\u{fb76}"
        case .unlinkRegular: return "\u{fb77}"
        case .unreadBold: return "\u{fb78}"
        case .unreadFilled: return "\u{fb79}"
        case .unreadLight: return "\u{fb7a}"
        case .unreadRegular: return "\u{fb7b}"
        case .unsecureUnlockedBold: return "\u{fb7c}"
        case .unsecureUnlockedFilled: return "\u{fb7d}"
        case .unsecureUnlockedLight: return "\u{fb7e}"
        case .unsecureUnlockedRegular: return "\u{fb7f}"
        case .unsortedBold: return "\u{fb80}"
        case .unsortedLight: return "\u{fb81}"
        case .unsortedRegular: return "\u{fb82}"
        case .updateFileShareBold: return "\u{fb83}"
        case .updateFileShareLight: return "\u{fb84}"
        case .updateFileShareRegular: return "\u{fb85}"
        case .uploadBold: return "\u{fb86}"
        case .uploadImageBold: return "\u{fb87}"
        case .uploadImageLight: return "\u{fb88}"
        case .uploadImageRegular: return "\u{fb89}"
        case .uploadLight: return "\u{fb8a}"
        case .uploadRegular: return "\u{fb8b}"
        case .urgentVoicemailBold: return "\u{fb8c}"
        case .urgentVoicemailFilled: return "\u{fb8d}"
        case .usbBold: return "\u{fb8e}"
        case .usbHeadsetBold: return "\u{fb8f}"
        case .usbHeadsetLight: return "\u{fb90}"
        case .usbHeadsetMutedBold: return "\u{fb91}"
        case .usbHeadsetMutedLight: return "\u{fb92}"
        case .usbHeadsetMutedRegular: return "\u{fb93}"
        case .usbHeadsetRegular: return "\u{fb94}"
        case .usbLight: return "\u{fb95}"
        case .usbRegular: return "\u{fb96}"
        case .userBold: return "\u{fb97}"
        case .userDeactivateBold: return "\u{fb98}"
        case .userDeactivateLight: return "\u{fb99}"
        case .userDeactivateRegular: return "\u{fb9a}"
        case .userLight: return "\u{fb9b}"
        case .userRegular: return "\u{fb9c}"
        case .videoBlurBold: return "\u{fb9d}"
        case .videoBlurFilled: return "\u{fb9e}"
        case .videoBlurLight: return "\u{fb9f}"
        case .videoBlurRegular: return "\u{fba0}"
        case .videoBold: return "\u{fba1}"
        case .videoEffectBold: return "\u{fba2}"
        case .videoEffectFilled: return "\u{fba3}"
        case .videoEffectLight: return "\u{fba4}"
        case .videoEffectRegular: return "\u{fba5}"
        case .videoFilled: return "\u{fba6}"
        case .videoLayoutBold: return "\u{fba7}"
        case .videoLayoutEqualBold: return "\u{fba8}"
        case .videoLayoutEqualDualBold: return "\u{fba9}"
        case .videoLayoutEqualDualLight: return "\u{fbaa}"
        case .videoLayoutEqualDualRegular: return "\u{fbab}"
        case .videoLayoutEqualFilled: return "\u{fbac}"
        case .videoLayoutEqualLight: return "\u{fbad}"
        case .videoLayoutEqualRegular: return "\u{fbae}"
        case .videoLayoutFilled: return "\u{fbaf}"
        case .videoLayoutLight: return "\u{fbb0}"
        case .videoLayoutOverlayBold: return "\u{fbb1}"
        case .videoLayoutOverlayFilled: return "\u{fbb2}"
        case .videoLayoutOverlayLight: return "\u{fbb3}"
        case .videoLayoutOverlayRegular: return "\u{fbb4}"
        case .videoLayoutPresenterDominantBold: return "\u{fbb5}"
        case .videoLayoutPresenterDominantLight: return "\u{fbb6}"
        case .videoLayoutPresenterDominantRegular: return "\u{fbb7}"
        case .videoLayoutProminentBold: return "\u{fbb8}"
        case .videoLayoutProminentFilled: return "\u{fbb9}"
        case .videoLayoutProminentLight: return "\u{fbba}"
        case .videoLayoutProminentRegular: return "\u{fbbb}"
        case .videoLayoutRegular: return "\u{fbbc}"
        case .videoLayoutShareDominantBold: return "\u{fbbd}"
        case .videoLayoutShareDominantLight: return "\u{fbbe}"
        case .videoLayoutShareDominantRegular: return "\u{fbbf}"
        case .videoLayoutSingleBold: return "\u{fbc0}"
        case .videoLayoutSingleFilled: return "\u{fbc1}"
        case .videoLayoutSingleLight: return "\u{fbc2}"
        case .videoLayoutSingleRegular: return "\u{fbc3}"
        case .videoLayoutStackBold: return "\u{fbc4}"
        case .videoLayoutStackFilled: return "\u{fbc5}"
        case .videoLayoutStackLight: return "\u{fbc6}"
        case .videoLayoutStackRegular: return "\u{fbc7}"
        case .videoLayoutVideoDominantBold: return "\u{fbc8}"
        case .videoLayoutVideoDominantFilled: return "\u{fbc9}"
        case .videoLayoutVideoDominantLight: return "\u{fbca}"
        case .videoLayoutVideoDominantRegular: return "\u{fbcb}"
        case .videoLight: return "\u{fbcc}"
        case .videoPlusBold: return "\u{fbcd}"
        case .videoPlusFilled: return "\u{fbce}"
        case .videoPlusLight: return "\u{fbcf}"
        case .videoPlusRegular: return "\u{fbd0}"
        case .videoRegular: return "\u{fbd1}"
        case .videoSpeakerTrackBold: return "\u{fbd2}"
        case .videoSpeakerTrackFilled: return "\u{fbd3}"
        case .videoSpeakerTrackLight: return "\u{fbd4}"
        case .videoSpeakerTrackRegular: return "\u{fbd5}"
        case .viewAllBold: return "\u{fbd6}"
        case .viewAllLight: return "\u{fbd7}"
        case .viewAllRegular: return "\u{fbd8}"
        case .viewListBold: return "\u{fbd9}"
        case .viewListFilled: return "\u{fbda}"
        case .viewListLight: return "\u{fbdb}"
        case .viewListRegular: return "\u{fbdc}"
        case .viewStackedBold: return "\u{fbdd}"
        case .viewStackedFilled: return "\u{fbde}"
        case .viewStackedLight: return "\u{fbdf}"
        case .viewStackedRegular: return "\u{fbe0}"
        case .viewThumbnailBold: return "\u{fbe1}"
        case .viewThumbnailFilled: return "\u{fbe2}"
        case .viewThumbnailLight: return "\u{fbe3}"
        case .viewThumbnailRegular: return "\u{fbe4}"
        case .visionproBold: return "\u{fbe5}"
        case .visionproFilled: return "\u{fbe6}"
        case .visionproLight: return "\u{fbe7}"
        case .visionproMoveCallInBold: return "\u{fbe8}"
        case .visionproMoveCallInFilled: return "\u{fbe9}"
        case .visionproMoveCallInLight: return "\u{fbea}"
        case .visionproMoveCallInOutBold: return "\u{fbeb}"
        case .visionproMoveCallInOutFilled: return "\u{fbec}"
        case .visionproMoveCallInOutLight: return "\u{fbed}"
        case .visionproMoveCallInOutRegular: return "\u{fbee}"
        case .visionproMoveCallInRegular: return "\u{fbef}"
        case .visionproMoveCallOutBold: return "\u{fbf0}"
        case .visionproMoveCallOutFilled: return "\u{fbf1}"
        case .visionproMoveCallOutLight: return "\u{fbf2}"
        case .visionproMoveCallOutRegular: return "\u{fbf3}"
        case .visionproRegular: return "\u{fbf4}"
        case .voicemailBold: return "\u{fbf5}"
        case .voicemailFilled: return "\u{fbf6}"
        case .voicemailLight: return "\u{fbf7}"
        case .voicemailRegular: return "\u{fbf8}"
        case .vpnBold: return "\u{fbf9}"
        case .vpnFilled: return "\u{fbfa}"
        case .vpnLight: return "\u{fbfb}"
        case .vpnRegular: return "\u{fbfc}"
        case .vscBold: return "\u{fbfd}"
        case .vscLight: return "\u{fbfe}"
        case .vscRegular: return "\u{fbff}"
        case .waffleMenuBold: return "\u{fc00}"
        case .waffleMenuLight: return "\u{fc01}"
        case .waffleMenuRegular: return "\u{fc02}"
        case .waitingRoomBold: return "\u{fc03}"
        case .waitingRoomLight: return "\u{fc04}"
        case .waitingRoomRegular: return "\u{fc05}"
        case .wallpaperBold: return "\u{fc06}"
        case .wallpaperLight: return "\u{fc07}"
        case .wallpaperRegular: return "\u{fc08}"
        case .warningBadgeFilled: return "\u{fc09}"
        case .warningBold: return "\u{fc0a}"
        case .warningFilled: return "\u{fc0b}"
        case .warningLight: return "\u{fc0c}"
        case .warningRegular: return "\u{fc0d}"
        case .webexBoardBold: return "\u{fc0e}"
        case .webexBoardLight: return "\u{fc0f}"
        case .webexBoardRegular: return "\u{fc10}"
        case .webexCodecPlusBold: return "\u{fc11}"
        case .webexCodecPlusLight: return "\u{fc12}"
        case .webexCodecPlusRegular: return "\u{fc13}"
        case .webexDeskCameraBold: return "\u{fc14}"
        case .webexDeskCameraLight: return "\u{fc15}"
        case .webexDeskCameraRegular: return "\u{fc16}"
        case .webexMeetingsBold: return "\u{fc17}"
        case .webexMeetingsFilled: return "\u{fc18}"
        case .webexMeetingsLight: return "\u{fc19}"
        case .webexMeetingsRegular: return "\u{fc1a}"
        case .webexQuadCameraBold: return "\u{fc1b}"
        case .webexQuadCameraLight: return "\u{fc1c}"
        case .webexQuadCameraRegular: return "\u{fc1d}"
        case .webexRoomKitBold: return "\u{fc1e}"
        case .webexRoomKitLight: return "\u{fc1f}"
        case .webexRoomKitPlusBold: return "\u{fc20}"
        case .webexRoomKitPlusLight: return "\u{fc21}"
        case .webexRoomKitPlusRegular: return "\u{fc22}"
        case .webexRoomKitRegular: return "\u{fc23}"
        case .webexShareBold: return "\u{fc24}"
        case .webexShareLight: return "\u{fc25}"
        case .webexShareRegular: return "\u{fc26}"
        case .webexTeamsBold: return "\u{fc27}"
        case .webexTeamsFilled: return "\u{fc28}"
        case .webexTeamsLight: return "\u{fc29}"
        case .webexTeamsNewBold: return "\u{fc2a}"
        case .webexTeamsNewFilled: return "\u{fc2b}"
        case .webexTeamsNewLight: return "\u{fc2c}"
        case .webexTeamsNewRegular: return "\u{fc2d}"
        case .webexTeamsRegular: return "\u{fc2e}"
        case .webexTeamsRemoveBold: return "\u{fc2f}"
        case .webexTeamsRemoveLight: return "\u{fc30}"
        case .webexTeamsRemoveRegular: return "\u{fc31}"
        case .webinarBold: return "\u{fc32}"
        case .webinarFilled: return "\u{fc33}"
        case .webinarLight: return "\u{fc34}"
        case .webinarRegular: return "\u{fc35}"
        case .weeklyRecurringScheduleBold: return "\u{fc36}"
        case .weeklyRecurringScheduleLight: return "\u{fc37}"
        case .weeklyRecurringScheduleRegular: return "\u{fc38}"
        case .whisperAnnouncementBold: return "\u{fc39}"
        case .whisperAnnouncementFilled: return "\u{fc3a}"
        case .whisperAnnouncementLight: return "\u{fc3b}"
        case .whisperAnnouncementRegular: return "\u{fc3c}"
        case .whisperCoachBold: return "\u{fc3d}"
        case .whisperCoachFilled: return "\u{fc3e}"
        case .whisperCoachLight: return "\u{fc3f}"
        case .whisperCoachRegular: return "\u{fc40}"
        case .whiteboardBold: return "\u{fc41}"
        case .whiteboardContentBold: return "\u{fc42}"
        case .whiteboardContentFilled: return "\u{fc43}"
        case .whiteboardContentLight: return "\u{fc44}"
        case .whiteboardContentRegular: return "\u{fc45}"
        case .whiteboardFilled: return "\u{fc46}"
        case .whiteboardLight: return "\u{fc47}"
        case .whiteboardRegular: return "\u{fc48}"
        case .widgetBold: return "\u{fc49}"
        case .widgetFilled: return "\u{fc4a}"
        case .widgetLight: return "\u{fc4b}"
        case .widgetRegular: return "\u{fc4c}"
        case .wifiBold: return "\u{fc4d}"
        case .wifiErrorBold: return "\u{fc4e}"
        case .wifiErrorLight: return "\u{fc4f}"
        case .wifiErrorRegular: return "\u{fc50}"
        case .wifiLight: return "\u{fc51}"
        case .wifiRegular: return "\u{fc52}"
        case .wifiSignalGoodBold: return "\u{fc53}"
        case .wifiSignalGoodLight: return "\u{fc54}"
        case .wifiSignalGoodRegular: return "\u{fc55}"
        case .wifiSignalPoorBold: return "\u{fc56}"
        case .wifiSignalPoorLight: return "\u{fc57}"
        case .wifiSignalPoorRegular: return "\u{fc58}"
        case .wifiSignalUnstableBold: return "\u{fc59}"
        case .wifiSignalUnstableLight: return "\u{fc5a}"
        case .wifiSignalUnstableRegular: return "\u{fc5b}"
        case .windowCornerScrubBold: return "\u{fc5c}"
        case .windowCornerScrubLight: return "\u{fc5d}"
        case .windowCornerScrubRegular: return "\u{fc5e}"
        case .windowRightCornerScrubBold: return "\u{fc5f}"
        case .windowRightCornerScrubLight: return "\u{fc60}"
        case .windowRightCornerScrubRegular: return "\u{fc61}"
        case .windowVerticalScrubBold: return "\u{fc62}"
        case .windowVerticalScrubLight: return "\u{fc63}"
        case .windowVerticalScrubRegular: return "\u{fc64}"
        case .workflowDeploymentsBold: return "\u{fc65}"
        case .workflowDeploymentsFilled: return "\u{fc66}"
        case .workflowDeploymentsLight: return "\u{fc67}"
        case .workflowDeploymentsRegular: return "\u{fc68}"
        case .workphoneBold: return "\u{fc69}"
        case .workphoneLight: return "\u{fc6a}"
        case .workphoneRegular: return "\u{fc6b}"
        case .zoomInBold: return "\u{fc6c}"
        case .zoomInLight: return "\u{fc6d}"
        case .zoomInRegular: return "\u{fc6e}"
        case .zoomOutBold: return "\u{fc6f}"
        case .zoomOutLight: return "\u{fc70}"
        case .zoomOutRegular: return "\u{fc71}"

        default:
            // We need a default case to prevent the Xcode11 error: "the compiler is unable to check that this switch is exhaustive in reasonable time"
            assertionFailure("Unknown icon type: \(self)")
            return ""
        }
    }

    public var filename: String {
        switch self {
        case ._invalid: return ""
        case .unhandledCase: return ""
        case .accessibilityBold: return "accessibility-bold"
        case .accessibilityLight: return "accessibility-light"
        case .accessibilityRegular: return "accessibility-regular"
        case .accessoriesBold: return "accessories-bold"
        case .accessoriesFilled: return "accessories-filled"
        case .accessoriesLight: return "accessories-light"
        case .accessoriesRegular: return "accessories-regular"
        case .accordianBold: return "accordian-bold"
        case .accordianLight: return "accordian-light"
        case .accordianRegular: return "accordian-regular"
        case .activePresenceSmallFilled: return "active-presence-small-filled"
        case .activeSpeakerAlertBold: return "active-speaker-alert-bold"
        case .activeSpeakerAlertLight: return "active-speaker-alert-light"
        case .activeSpeakerAlertRegular: return "active-speaker-alert-regular"
        case .activeSpeakerBold: return "active-speaker-bold"
        case .activeSpeakerLight: return "active-speaker-light"
        case .activeSpeakerLockBold: return "active-speaker-lock-bold"
        case .activeSpeakerLockLight: return "active-speaker-lock-light"
        case .activeSpeakerLockRegular: return "active-speaker-lock-regular"
        case .activeSpeakerRegular: return "active-speaker-regular"
        case .addOptionBold: return "add-option-bold"
        case .addOptionLight: return "add-option-light"
        case .addOptionRegular: return "add-option-regular"
        case .addPhotoBold: return "add-photo-bold"
        case .addPhotoLight: return "add-photo-light"
        case .addPhotoRegular: return "add-photo-regular"
        case .addPollBold: return "add-poll-bold"
        case .addPollLight: return "add-poll-light"
        case .addPollRegular: return "add-poll-regular"
        case .addQuestionBold: return "add-question-bold"
        case .addQuestionLight: return "add-question-light"
        case .addQuestionRegular: return "add-question-regular"
        case .addVideoMarkerBold: return "add-video-marker-bold"
        case .addVideoMarkerLight: return "add-video-marker-light"
        case .addVideoMarkerRegular: return "add-video-marker-regular"
        case .adjustAudioBold: return "adjust-audio-bold"
        case .adjustAudioLight: return "adjust-audio-light"
        case .adjustAudioRegular: return "adjust-audio-regular"
        case .adjustBold: return "adjust-bold"
        case .adjustFilled: return "adjust-filled"
        case .adjustHorizontalBold: return "adjust-horizontal-bold"
        case .adjustHorizontalFilled: return "adjust-horizontal-filled"
        case .adjustHorizontalLight: return "adjust-horizontal-light"
        case .adjustHorizontalRegular: return "adjust-horizontal-regular"
        case .adjustLight: return "adjust-light"
        case .adjustMicrophoneBold: return "adjust-microphone-bold"
        case .adjustMicrophoneLight: return "adjust-microphone-light"
        case .adjustMicrophoneRegular: return "adjust-microphone-regular"
        case .adjustRegular: return "adjust-regular"
        case .adjustVideoBold: return "adjust-video-bold"
        case .adjustVideoLight: return "adjust-video-light"
        case .adjustVideoRegular: return "adjust-video-regular"
        case .adminBold: return "admin-bold"
        case .adminFilled: return "admin-filled"
        case .adminLight: return "admin-light"
        case .adminRegular: return "admin-regular"
        case .advanceScheduleBold: return "advance-schedule-bold"
        case .advanceScheduleLight: return "advance-schedule-light"
        case .advanceScheduleRegular: return "advance-schedule-regular"
        case .advancedNoiseRemovalBold: return "advanced-noise-removal-bold"
        case .advancedNoiseRemovalLight: return "advanced-noise-removal-light"
        case .advancedNoiseRemovalRegular: return "advanced-noise-removal-regular"
        case .agentUniqueCodeBold: return "agent-unique-code-bold"
        case .agentUniqueCodeLight: return "agent-unique-code-light"
        case .agentUniqueCodeRegular: return "agent-unique-code-regular"
        case .airplayBold: return "airplay-bold"
        case .airplayLight: return "airplay-light"
        case .airplayRegular: return "airplay-regular"
        case .alarmBold: return "alarm-bold"
        case .alarmFilled: return "alarm-filled"
        case .alarmLight: return "alarm-light"
        case .alarmRegular: return "alarm-regular"
        case .alertActiveBold: return "alert-active-bold"
        case .alertActiveFilled: return "alert-active-filled"
        case .alertActiveLight: return "alert-active-light"
        case .alertActiveRegular: return "alert-active-regular"
        case .alertBold: return "alert-bold"
        case .alertFilled: return "alert-filled"
        case .alertLight: return "alert-light"
        case .alertMutedBold: return "alert-muted-bold"
        case .alertMutedFilled: return "alert-muted-filled"
        case .alertMutedLight: return "alert-muted-light"
        case .alertMutedRegular: return "alert-muted-regular"
        case .alertRegular: return "alert-regular"
        case .alignBold: return "align-bold"
        case .alignBottomBold: return "align-bottom-bold"
        case .alignBottomFilled: return "align-bottom-filled"
        case .alignBottomLight: return "align-bottom-light"
        case .alignBottomRegular: return "align-bottom-regular"
        case .alignFilled: return "align-filled"
        case .alignHorizontalCenterBold: return "align-horizontal-center-bold"
        case .alignHorizontalCenterFilled: return "align-horizontal-center-filled"
        case .alignHorizontalCenterLight: return "align-horizontal-center-light"
        case .alignHorizontalCenterRegular: return "align-horizontal-center-regular"
        case .alignLeftBold: return "align-left-bold"
        case .alignLeftFilled: return "align-left-filled"
        case .alignLeftLight: return "align-left-light"
        case .alignLeftRegular: return "align-left-regular"
        case .alignLight: return "align-light"
        case .alignRegular: return "align-regular"
        case .alignRightBold: return "align-right-bold"
        case .alignRightFilled: return "align-right-filled"
        case .alignRightLight: return "align-right-light"
        case .alignRightRegular: return "align-right-regular"
        case .alignTopBold: return "align-top-bold"
        case .alignTopFilled: return "align-top-filled"
        case .alignTopLight: return "align-top-light"
        case .alignTopRegular: return "align-top-regular"
        case .alignVerticalCenterBold: return "align-vertical-center-bold"
        case .alignVerticalCenterFilled: return "align-vertical-center-filled"
        case .alignVerticalCenterLight: return "align-vertical-center-light"
        case .alignVerticalCenterRegular: return "align-vertical-center-regular"
        case .allowToAnnotateBold: return "allow-to-annotate-bold"
        case .allowToAnnotateLight: return "allow-to-annotate-light"
        case .allowToAnnotateRegular: return "allow-to-annotate-regular"
        case .alternateResponseBold: return "alternate-response-bold"
        case .alternateResponseLight: return "alternate-response-light"
        case .alternateResponseRegular: return "alternate-response-regular"
        case .analogHeadsetBold: return "analog-headset-bold"
        case .analogHeadsetLight: return "analog-headset-light"
        case .analogHeadsetRegular: return "analog-headset-regular"
        case .analysisBold: return "analysis-bold"
        case .analysisFilled: return "analysis-filled"
        case .analysisLight: return "analysis-light"
        case .analysisRegular: return "analysis-regular"
        case .annotateBold: return "annotate-bold"
        case .annotateFilled: return "annotate-filled"
        case .annotateLight: return "annotate-light"
        case .annotateRegular: return "annotate-regular"
        case .announcementBold: return "announcement-bold"
        case .announcementFilled: return "announcement-filled"
        case .announcementLight: return "announcement-light"
        case .announcementMutedBold: return "announcement-muted-bold"
        case .announcementMutedFilled: return "announcement-muted-filled"
        case .announcementMutedLight: return "announcement-muted-light"
        case .announcementMutedRegular: return "announcement-muted-regular"
        case .announcementRegular: return "announcement-regular"
        case .appPushBold: return "app-push-bold"
        case .appPushLight: return "app-push-light"
        case .appPushRegular: return "app-push-regular"
        case .appearanceBold: return "appearance-bold"
        case .appearanceLight: return "appearance-light"
        case .appearanceRegular: return "appearance-regular"
        case .applauseBold: return "applause-bold"
        case .applauseLight: return "applause-light"
        case .applauseRegular: return "applause-regular"
        case .appleBold: return "apple-bold"
        case .appleFilled: return "apple-filled"
        case .appleLight: return "apple-light"
        case .appleRegular: return "apple-regular"
        case .applicationBold: return "application-bold"
        case .applicationLight: return "application-light"
        case .applicationPanelBold: return "application-panel-bold"
        case .applicationPanelLight: return "application-panel-light"
        case .applicationPanelRegular: return "application-panel-regular"
        case .applicationRegular: return "application-regular"
        case .applicationsBold: return "applications-bold"
        case .applicationsFilled: return "applications-filled"
        case .applicationsLight: return "applications-light"
        case .applicationsRegular: return "applications-regular"
        case .approvalPendingBold: return "approval-pending-bold"
        case .approvalPendingLight: return "approval-pending-light"
        case .approvalPendingRegular: return "approval-pending-regular"
        case .approvalsBold: return "approvals-bold"
        case .approvalsLight: return "approvals-light"
        case .approvalsRegular: return "approvals-regular"
        case .appsBold: return "apps-bold"
        case .appsFilled: return "apps-filled"
        case .appsLight: return "apps-light"
        case .appsRegular: return "apps-regular"
        case .archiveBold: return "archive-bold"
        case .archiveFilled: return "archive-filled"
        case .archiveLight: return "archive-light"
        case .archiveRegular: return "archive-regular"
        case .areaChartBold: return "area-chart-bold"
        case .areaChartFilled: return "area-chart-filled"
        case .areaChartLight: return "area-chart-light"
        case .areaChartRegular: return "area-chart-regular"
        case .areaSelectorBold: return "area-selector-bold"
        case .areaSelectorLight: return "area-selector-light"
        case .areaSelectorRegular: return "area-selector-regular"
        case .arrowCircleDownBold: return "arrow-circle-down-bold"
        case .arrowCircleDownFilled: return "arrow-circle-down-filled"
        case .arrowCircleDownLight: return "arrow-circle-down-light"
        case .arrowCircleDownRegular: return "arrow-circle-down-regular"
        case .arrowCircleLeftBold: return "arrow-circle-left-bold"
        case .arrowCircleLeftFilled: return "arrow-circle-left-filled"
        case .arrowCircleLeftLight: return "arrow-circle-left-light"
        case .arrowCircleLeftRegular: return "arrow-circle-left-regular"
        case .arrowCircleRightBold: return "arrow-circle-right-bold"
        case .arrowCircleRightFilled: return "arrow-circle-right-filled"
        case .arrowCircleRightLight: return "arrow-circle-right-light"
        case .arrowCircleRightRegular: return "arrow-circle-right-regular"
        case .arrowCircleUpBold: return "arrow-circle-up-bold"
        case .arrowCircleUpFilled: return "arrow-circle-up-filled"
        case .arrowCircleUpLight: return "arrow-circle-up-light"
        case .arrowCircleUpRegular: return "arrow-circle-up-regular"
        case .arrowDownBold: return "arrow-down-bold"
        case .arrowDownFilled: return "arrow-down-filled"
        case .arrowDownLight: return "arrow-down-light"
        case .arrowDownRegular: return "arrow-down-regular"
        case .arrowLeftBold: return "arrow-left-bold"
        case .arrowLeftFilled: return "arrow-left-filled"
        case .arrowLeftLight: return "arrow-left-light"
        case .arrowLeftRegular: return "arrow-left-regular"
        case .arrowPointerCursorLight: return "arrow-pointer-cursor-light"
        case .arrowRightBold: return "arrow-right-bold"
        case .arrowRightFilled: return "arrow-right-filled"
        case .arrowRightLight: return "arrow-right-light"
        case .arrowRightRegular: return "arrow-right-regular"
        case .arrowTailDownBold: return "arrow-tail-down-bold"
        case .arrowTailDownLight: return "arrow-tail-down-light"
        case .arrowTailDownRegular: return "arrow-tail-down-regular"
        case .arrowTailUpBold: return "arrow-tail-up-bold"
        case .arrowTailUpLight: return "arrow-tail-up-light"
        case .arrowTailUpRegular: return "arrow-tail-up-regular"
        case .arrowUpBold: return "arrow-up-bold"
        case .arrowUpFilled: return "arrow-up-filled"
        case .arrowUpLight: return "arrow-up-light"
        case .arrowUpRegular: return "arrow-up-regular"
        case .askForHelpBold: return "ask-for-help-bold"
        case .askForHelpFilled: return "ask-for-help-filled"
        case .askForHelpLight: return "ask-for-help-light"
        case .askForHelpRegular: return "ask-for-help-regular"
        case .assetsBold: return "assets-bold"
        case .assetsFilled: return "assets-filled"
        case .assetsLight: return "assets-light"
        case .assetsRegular: return "assets-regular"
        case .assignHostBold: return "assign-host-bold"
        case .assignHostLight: return "assign-host-light"
        case .assignHostRegular: return "assign-host-regular"
        case .assignPrivilegeBold: return "assign-privilege-bold"
        case .assignPrivilegeFilled: return "assign-privilege-filled"
        case .assignPrivilegeLight: return "assign-privilege-light"
        case .assignPrivilegeRegular: return "assign-privilege-regular"
        case .attachmentBold: return "attachment-bold"
        case .attachmentLight: return "attachment-light"
        case .attachmentRegular: return "attachment-regular"
        case .attendantConsoleBold: return "attendant-console-bold"
        case .attendantConsoleFilled: return "attendant-console-filled"
        case .attendantConsoleLight: return "attendant-console-light"
        case .attendantConsoleRegular: return "attendant-console-regular"
        case .audioBroadcastBold: return "audio-broadcast-bold"
        case .audioBroadcastLight: return "audio-broadcast-light"
        case .audioBroadcastRegular: return "audio-broadcast-regular"
        case .audioCallBold: return "audio-call-bold"
        case .audioCallFilled: return "audio-call-filled"
        case .audioCallLight: return "audio-call-light"
        case .audioCallRegular: return "audio-call-regular"
        case .audioEnhancementBold: return "audio-enhancement-bold"
        case .audioEnhancementFilled: return "audio-enhancement-filled"
        case .audioEnhancementLight: return "audio-enhancement-light"
        case .audioEnhancementRegular: return "audio-enhancement-regular"
        case .audioOnlyBold: return "audio-only-bold"
        case .audioOnlyLight: return "audio-only-light"
        case .audioOnlyRegular: return "audio-only-regular"
        case .audioOptAllBold: return "audio-opt-all-bold"
        case .audioOptAllLight: return "audio-opt-all-light"
        case .audioOptAllRegular: return "audio-opt-all-regular"
        case .autoDetectionBold: return "auto-detection-bold"
        case .autoDetectionLight: return "auto-detection-light"
        case .autoDetectionRegular: return "auto-detection-regular"
        case .automationBold: return "automation-bold"
        case .automationLight: return "automation-light"
        case .automationRegular: return "automation-regular"
        case .awayCallingPresenceBold: return "away-calling-presence-bold"
        case .awayCallingPresenceFilled: return "away-calling-presence-filled"
        case .awayCallingPresenceLight: return "away-calling-presence-light"
        case .awayCallingPresenceRegular: return "away-calling-presence-regular"
        case .backBold: return "back-bold"
        case .backLight: return "back-light"
        case .backRegular: return "back-regular"
        case .backToFullScreenBold: return "back-to-full-screen-bold"
        case .backToFullScreenLight: return "back-to-full-screen-light"
        case .backToFullScreenRegular: return "back-to-full-screen-regular"
        case .backToTopBold: return "back-to-top-bold"
        case .backToTopLight: return "back-to-top-light"
        case .backToTopRegular: return "back-to-top-regular"
        case .backlightBold: return "backlight-bold"
        case .backlightLight: return "backlight-light"
        case .backlightRegular: return "backlight-regular"
        case .backspaceBold: return "backspace-bold"
        case .backspaceLight: return "backspace-light"
        case .backspaceRegular: return "backspace-regular"
        case .backupDataBold: return "backup-data-bold"
        case .backupDataLight: return "backup-data-light"
        case .backupDataRegular: return "backup-data-regular"
        case .barcodeBold: return "barcode-bold"
        case .barcodeLight: return "barcode-light"
        case .barcodeRegular: return "barcode-regular"
        case .batteryChargingBold: return "battery-charging-bold"
        case .batteryChargingLight: return "battery-charging-light"
        case .batteryChargingRegular: return "battery-charging-regular"
        case .batteryEmptyBold: return "battery-empty-bold"
        case .batteryEmptyLight: return "battery-empty-light"
        case .batteryEmptyRegular: return "battery-empty-regular"
        case .batteryHighBold: return "battery-high-bold"
        case .batteryHighLight: return "battery-high-light"
        case .batteryHighRegular: return "battery-high-regular"
        case .batteryLowBold: return "battery-low-bold"
        case .batteryLowLight: return "battery-low-light"
        case .batteryLowRegular: return "battery-low-regular"
        case .batteryMediumBold: return "battery-medium-bold"
        case .batteryMediumLight: return "battery-medium-light"
        case .batteryMediumRegular: return "battery-medium-regular"
        case .bitmojiConnectBold: return "bitmoji-connect-bold"
        case .bitmojiConnectLight: return "bitmoji-connect-light"
        case .bitmojiConnectRegular: return "bitmoji-connect-regular"
        case .bitmojiConnectedBold: return "bitmoji-connected-bold"
        case .bitmojiConnectedFilled: return "bitmoji-connected-filled"
        case .bitmojiConnectedLight: return "bitmoji-connected-light"
        case .bitmojiConnectedRegular: return "bitmoji-connected-regular"
        case .blindTransferBold: return "blind-transfer-bold"
        case .blindTransferLight: return "blind-transfer-light"
        case .blindTransferRegular: return "blind-transfer-regular"
        case .blockQuoteBold: return "block-quote-bold"
        case .blockQuoteLight: return "block-quote-light"
        case .blockQuoteRegular: return "block-quote-regular"
        case .blockedBold: return "blocked-bold"
        case .blockedFilled: return "blocked-filled"
        case .blockedLight: return "blocked-light"
        case .blockedRegular: return "blocked-regular"
        case .bluetoothBold: return "bluetooth-bold"
        case .bluetoothFilled: return "bluetooth-filled"
        case .bluetoothLight: return "bluetooth-light"
        case .bluetoothMutedBold: return "bluetooth-muted-bold"
        case .bluetoothMutedLight: return "bluetooth-muted-light"
        case .bluetoothMutedRegular: return "bluetooth-muted-regular"
        case .bluetoothRegular: return "bluetooth-regular"
        case .boldBold: return "bold-bold"
        case .boldFilled: return "bold-filled"
        case .boldLight: return "bold-light"
        case .boldRegular: return "bold-regular"
        case .bookmarkBold: return "bookmark-bold"
        case .bookmarkLight: return "bookmark-light"
        case .bookmarkRegular: return "bookmark-regular"
        case .botBold: return "bot-bold"
        case .botCustomerAssistantBold: return "bot-customer-assistant-bold"
        case .botCustomerAssistantLight: return "bot-customer-assistant-light"
        case .botCustomerAssistantRegular: return "bot-customer-assistant-regular"
        case .botExpertAssistantBold: return "bot-expert-assistant-bold"
        case .botExpertAssistantLight: return "bot-expert-assistant-light"
        case .botExpertAssistantRegular: return "bot-expert-assistant-regular"
        case .botLight: return "bot-light"
        case .botRegular: return "bot-regular"
        case .boxBold: return "box-bold"
        case .boxLight: return "box-light"
        case .boxRegular: return "box-regular"
        case .breakoutSessionBold: return "breakout-session-bold"
        case .breakoutSessionFilled: return "breakout-session-filled"
        case .breakoutSessionLight: return "breakout-session-light"
        case .breakoutSessionRegular: return "breakout-session-regular"
        case .brightnessAutoBold: return "brightness-auto-bold"
        case .brightnessAutoLight: return "brightness-auto-light"
        case .brightnessAutoRegular: return "brightness-auto-regular"
        case .brightnessBold: return "brightness-bold"
        case .brightnessHighBold: return "brightness-high-bold"
        case .brightnessHighLight: return "brightness-high-light"
        case .brightnessHighRegular: return "brightness-high-regular"
        case .brightnessLight: return "brightness-light"
        case .brightnessLowBold: return "brightness-low-bold"
        case .brightnessLowLight: return "brightness-low-light"
        case .brightnessLowRegular: return "brightness-low-regular"
        case .brightnessRegular: return "brightness-regular"
        case .brokenFileBold: return "broken-file-bold"
        case .brokenFileFilled: return "broken-file-filled"
        case .brokenFileLight: return "broken-file-light"
        case .brokenFileRegular: return "broken-file-regular"
        case .browserBold: return "browser-bold"
        case .browserLight: return "browser-light"
        case .browserRegular: return "browser-regular"
        case .busyPresenceBold: return "busy-presence-bold"
        case .busyPresenceLight: return "busy-presence-light"
        case .busyPresenceRegular: return "busy-presence-regular"
        case .buttonCursorBold: return "button-cursor-bold"
        case .buttonCursorLight: return "button-cursor-light"
        case .buttonCursorRegular: return "button-cursor-regular"
        case .calendarAddBold: return "calendar-add-bold"
        case .calendarAddFilled: return "calendar-add-filled"
        case .calendarAddLight: return "calendar-add-light"
        case .calendarAddRegular: return "calendar-add-regular"
        case .calendarDayBold: return "calendar-day-bold"
        case .calendarDayFilled: return "calendar-day-filled"
        case .calendarDayLight: return "calendar-day-light"
        case .calendarDayRegular: return "calendar-day-regular"
        case .calendarEmptyBold: return "calendar-empty-bold"
        case .calendarEmptyFilled: return "calendar-empty-filled"
        case .calendarEmptyLight: return "calendar-empty-light"
        case .calendarEmptyRegular: return "calendar-empty-regular"
        case .calendarExternalBold: return "calendar-external-bold"
        case .calendarExternalLight: return "calendar-external-light"
        case .calendarExternalRegular: return "calendar-external-regular"
        case .calendarFilterBold: return "calendar-filter-bold"
        case .calendarFilterLight: return "calendar-filter-light"
        case .calendarFilterRegular: return "calendar-filter-regular"
        case .calendarMonthBold: return "calendar-month-bold"
        case .calendarMonthFilled: return "calendar-month-filled"
        case .calendarMonthLight: return "calendar-month-light"
        case .calendarMonthMoreBold: return "calendar-month-more-bold"
        case .calendarMonthMoreLight: return "calendar-month-more-light"
        case .calendarMonthMoreRegular: return "calendar-month-more-regular"
        case .calendarMonthRegular: return "calendar-month-regular"
        case .calendarTodayBold: return "calendar-today-bold"
        case .calendarTodayLight: return "calendar-today-light"
        case .calendarTodayRegular: return "calendar-today-regular"
        case .calendarWeekBold: return "calendar-week-bold"
        case .calendarWeekFilled: return "calendar-week-filled"
        case .calendarWeekLight: return "calendar-week-light"
        case .calendarWeekRegular: return "calendar-week-regular"
        case .calendarWeekViewBold: return "calendar-week-view-bold"
        case .calendarWeekViewFilled: return "calendar-week-view-filled"
        case .calendarWeekViewLight: return "calendar-week-view-light"
        case .calendarWeekViewRegular: return "calendar-week-view-regular"
        case .calendarWorkWeekBold: return "calendar-work-week-bold"
        case .calendarWorkWeekFilled: return "calendar-work-week-filled"
        case .calendarWorkWeekLight: return "calendar-work-week-light"
        case .calendarWorkWeekRegular: return "calendar-work-week-regular"
        case .callBargeBold: return "call-barge-bold"
        case .callBargeFilled: return "call-barge-filled"
        case .callBargeLight: return "call-barge-light"
        case .callBargeRegular: return "call-barge-regular"
        case .callBargeSilentBold: return "call-barge-silent-bold"
        case .callBargeSilentLight: return "call-barge-silent-light"
        case .callBargeSilentRegular: return "call-barge-silent-regular"
        case .callForwardSettingsBold: return "call-forward-settings-bold"
        case .callForwardSettingsFilled: return "call-forward-settings-filled"
        case .callForwardSettingsLight: return "call-forward-settings-light"
        case .callForwardSettingsRegular: return "call-forward-settings-regular"
        case .callGroupPickupBold: return "call-group-pickup-bold"
        case .callGroupPickupFilled: return "call-group-pickup-filled"
        case .callGroupPickupLight: return "call-group-pickup-light"
        case .callGroupPickupRegular: return "call-group-pickup-regular"
        case .callHandlingBold: return "call-handling-bold"
        case .callHandlingLight: return "call-handling-light"
        case .callHandlingRegular: return "call-handling-regular"
        case .callHoldBold: return "call-hold-bold"
        case .callHoldFilled: return "call-hold-filled"
        case .callHoldLight: return "call-hold-light"
        case .callHoldRegular: return "call-hold-regular"
        case .callIncomingBold: return "call-incoming-bold"
        case .callIncomingLight: return "call-incoming-light"
        case .callIncomingRegular: return "call-incoming-regular"
        case .callListBold: return "call-list-bold"
        case .callListLight: return "call-list-light"
        case .callListRegular: return "call-list-regular"
        case .callMergeBold: return "call-merge-bold"
        case .callMergeLight: return "call-merge-light"
        case .callMergeRegular: return "call-merge-regular"
        case .callMissedBold: return "call-missed-bold"
        case .callMissedFilled: return "call-missed-filled"
        case .callMissedLight: return "call-missed-light"
        case .callMissedRegular: return "call-missed-regular"
        case .callMoreBold: return "call-more-bold"
        case .callMoreLight: return "call-more-light"
        case .callMoreRegular: return "call-more-regular"
        case .callOutgoingBold: return "call-outgoing-bold"
        case .callOutgoingLight: return "call-outgoing-light"
        case .callOutgoingRegular: return "call-outgoing-regular"
        case .callPickupBold: return "call-pickup-bold"
        case .callPickupFilled: return "call-pickup-filled"
        case .callPickupLight: return "call-pickup-light"
        case .callPickupOtherBold: return "call-pickup-other-bold"
        case .callPickupOtherFilled: return "call-pickup-other-filled"
        case .callPickupOtherLight: return "call-pickup-other-light"
        case .callPickupOtherRegular: return "call-pickup-other-regular"
        case .callPickupRegular: return "call-pickup-regular"
        case .callPrivateBold: return "call-private-bold"
        case .callPrivateFilled: return "call-private-filled"
        case .callPrivateLight: return "call-private-light"
        case .callPrivateRegular: return "call-private-regular"
        case .callRemoteBold: return "call-remote-bold"
        case .callRemoteFilled: return "call-remote-filled"
        case .callRemoteLight: return "call-remote-light"
        case .callRemoteRegular: return "call-remote-regular"
        case .callRequestBold: return "call-request-bold"
        case .callRequestFilled: return "call-request-filled"
        case .callRequestLight: return "call-request-light"
        case .callRequestRegular: return "call-request-regular"
        case .callReturnBold: return "call-return-bold"
        case .callReturnFilled: return "call-return-filled"
        case .callReturnLight: return "call-return-light"
        case .callReturnRegular: return "call-return-regular"
        case .callRoomBold: return "call-room-bold"
        case .callRoomLight: return "call-room-light"
        case .callRoomRegular: return "call-room-regular"
        case .callSettingsBold: return "call-settings-bold"
        case .callSettingsLight: return "call-settings-light"
        case .callSettingsRegular: return "call-settings-regular"
        case .callSplitBold: return "call-split-bold"
        case .callSplitLight: return "call-split-light"
        case .callSplitRegular: return "call-split-regular"
        case .callSwapBold: return "call-swap-bold"
        case .callSwapLight: return "call-swap-light"
        case .callSwapRegular: return "call-swap-regular"
        case .callVoicemailBold: return "call-voicemail-bold"
        case .callVoicemailLight: return "call-voicemail-light"
        case .callVoicemailRegular: return "call-voicemail-regular"
        case .callrateBold: return "callrate-bold"
        case .callrateLight: return "callrate-light"
        case .callrateRegular: return "callrate-regular"
        case .cameraAuxBold: return "camera-aux-bold"
        case .cameraAuxFilled: return "camera-aux-filled"
        case .cameraAuxLight: return "camera-aux-light"
        case .cameraAuxRegular: return "camera-aux-regular"
        case .cameraBold: return "camera-bold"
        case .cameraFilled: return "camera-filled"
        case .cameraLight: return "camera-light"
        case .cameraMutedBold: return "camera-muted-bold"
        case .cameraMutedCircleFilled: return "camera-muted-circle-filled"
        case .cameraMutedFilled: return "camera-muted-filled"
        case .cameraMutedLight: return "camera-muted-light"
        case .cameraMutedRegular: return "camera-muted-regular"
        case .cameraOnBold: return "camera-on-bold"
        case .cameraOnFilled: return "camera-on-filled"
        case .cameraOnLight: return "camera-on-light"
        case .cameraOnRegular: return "camera-on-regular"
        case .cameraPhotoBold: return "camera-photo-bold"
        case .cameraPhotoFilled: return "camera-photo-filled"
        case .cameraPhotoLight: return "camera-photo-light"
        case .cameraPhotoRegular: return "camera-photo-regular"
        case .cameraPresenceBold: return "camera-presence-bold"
        case .cameraPresenceFilled: return "camera-presence-filled"
        case .cameraPresenceLight: return "camera-presence-light"
        case .cameraPresenceRegular: return "camera-presence-regular"
        case .cameraRegular: return "camera-regular"
        case .cameraSwapBold: return "camera-swap-bold"
        case .cameraSwapLight: return "camera-swap-light"
        case .cameraSwapRegular: return "camera-swap-regular"
        case .campaignManagementBold: return "campaign-management-bold"
        case .campaignManagementLight: return "campaign-management-light"
        case .campaignManagementRegular: return "campaign-management-regular"
        case .cancelBold: return "cancel-bold"
        case .cancelLight: return "cancel-light"
        case .cancelRegular: return "cancel-regular"
        case .capsLockBold: return "caps-lock-bold"
        case .capsLockLight: return "caps-lock-light"
        case .capsLockRegular: return "caps-lock-regular"
        case .captureRewindBold: return "capture-rewind-bold"
        case .captureRewindLight: return "capture-rewind-light"
        case .captureRewindRegular: return "capture-rewind-regular"
        case .caroselBold: return "carosel-bold"
        case .caroselLight: return "carosel-light"
        case .caroselRegular: return "carosel-regular"
        case .carouselTextBold: return "carousel-text-bold"
        case .carouselTextLight: return "carousel-text-light"
        case .carouselTextRegular: return "carousel-text-regular"
        case .cellularBold: return "cellular-bold"
        case .cellularLight: return "cellular-light"
        case .cellularRegular: return "cellular-regular"
        case .centerAlignedBold: return "center-aligned-bold"
        case .centerAlignedLight: return "center-aligned-light"
        case .centerAlignedRegular: return "center-aligned-regular"
        case .centerBold: return "center-bold"
        case .centerLight: return "center-light"
        case .centerRegular: return "center-regular"
        case .certificateBold: return "certificate-bold"
        case .certificateInvalidBold: return "certificate-invalid-bold"
        case .certificateInvalidLight: return "certificate-invalid-light"
        case .certificateInvalidRegular: return "certificate-invalid-regular"
        case .certificateLight: return "certificate-light"
        case .certificateRegular: return "certificate-regular"
        case .certifiedBold: return "certified-bold"
        case .certifiedLight: return "certified-light"
        case .certifiedRegular: return "certified-regular"
        case .chPSearchBold: return "ch-p-search-bold"
        case .chPSearchLight: return "ch-p-search-light"
        case .chPSearchRegular: return "ch-p-search-regular"
        case .channelUssdBold: return "channel-ussd-bold"
        case .channelUssdLight: return "channel-ussd-light"
        case .channelUssdRegular: return "channel-ussd-regular"
        case .chatBold: return "chat-bold"
        case .chatFilled: return "chat-filled"
        case .chatGroupBold: return "chat-group-bold"
        case .chatGroupFilled: return "chat-group-filled"
        case .chatGroupLight: return "chat-group-light"
        case .chatGroupRegular: return "chat-group-regular"
        case .chatLight: return "chat-light"
        case .chatMuteBold: return "chat-mute-bold"
        case .chatMuteLight: return "chat-mute-light"
        case .chatMuteRegular: return "chat-mute-regular"
        case .chatOutboundFilled: return "chat-outbound-filled"
        case .chatRegular: return "chat-regular"
        case .checkBold: return "check-bold"
        case .checkCircleBadgeFilled: return "check-circle-badge-filled"
        case .checkCircleBold: return "check-circle-bold"
        case .checkCircleFilled: return "check-circle-filled"
        case .checkCircleLight: return "check-circle-light"
        case .checkCircleRegular: return "check-circle-regular"
        case .checkLight: return "check-light"
        case .checkRegular: return "check-regular"
        case .checkboxGroupBold: return "checkbox-group-bold"
        case .checkboxGroupLight: return "checkbox-group-light"
        case .checkboxGroupRegular: return "checkbox-group-regular"
        case .cleanUpBold: return "clean-up-bold"
        case .cleanUpLight: return "clean-up-light"
        case .cleanUpRegular: return "clean-up-regular"
        case .clearBadgeFilled: return "clear-badge-filled"
        case .clearBold: return "clear-bold"
        case .clearFilled: return "clear-filled"
        case .clearLight: return "clear-light"
        case .clearRegular: return "clear-regular"
        case .closeSpaceBold: return "close-space-bold"
        case .closeSpaceLight: return "close-space-light"
        case .closeSpaceRegular: return "close-space-regular"
        case .closedCaptionBadgeBold: return "closed-caption-badge-bold"
        case .closedCaptionBadgeFilled: return "closed-caption-badge-filled"
        case .closedCaptionBadgeLight: return "closed-caption-badge-light"
        case .closedCaptionBadgeRegular: return "closed-caption-badge-regular"
        case .closedCaptionsBold: return "closed-captions-bold"
        case .closedCaptionsFilled: return "closed-captions-filled"
        case .closedCaptionsLight: return "closed-captions-light"
        case .closedCaptionsRegular: return "closed-captions-regular"
        case .cloudBold: return "cloud-bold"
        case .cloudDownloadBold: return "cloud-download-bold"
        case .cloudDownloadLight: return "cloud-download-light"
        case .cloudDownloadRegular: return "cloud-download-regular"
        case .cloudFilled: return "cloud-filled"
        case .cloudFrameBold: return "cloud-frame-bold"
        case .cloudFrameFilled: return "cloud-frame-filled"
        case .cloudFrameLight: return "cloud-frame-light"
        case .cloudFrameRegular: return "cloud-frame-regular"
        case .cloudLight: return "cloud-light"
        case .cloudMutedBold: return "cloud-muted-bold"
        case .cloudMutedFilled: return "cloud-muted-filled"
        case .cloudMutedLight: return "cloud-muted-light"
        case .cloudMutedRegular: return "cloud-muted-regular"
        case .cloudRegular: return "cloud-regular"
        case .cloudUploadBold: return "cloud-upload-bold"
        case .cloudUploadLight: return "cloud-upload-light"
        case .cloudUploadRegular: return "cloud-upload-regular"
        case .codeBlockBold: return "code-block-bold"
        case .codeBlockLight: return "code-block-light"
        case .codeBlockRegular: return "code-block-regular"
        case .coffeeBold: return "coffee-bold"
        case .coffeeLight: return "coffee-light"
        case .coffeeRegular: return "coffee-regular"
        case .colorBold: return "color-bold"
        case .colorFilled: return "color-filled"
        case .colorLight: return "color-light"
        case .colorRegular: return "color-regular"
        case .colourPaletteBold: return "colour-palette-bold"
        case .colourPaletteFilled: return "colour-palette-filled"
        case .colourPaletteLight: return "colour-palette-light"
        case .colourPaletteRegular: return "colour-palette-regular"
        case .commentingBold: return "commenting-bold"
        case .commentingFilled: return "commenting-filled"
        case .commentingLight: return "commenting-light"
        case .commentingRegular: return "commenting-regular"
        case .companyBold: return "company-bold"
        case .companyLight: return "company-light"
        case .companyRegular: return "company-regular"
        case .completedByBaseBold: return "completed-by-base-bold"
        case .completedByBaseLight: return "completed-by-base-light"
        case .completedByBaseRegular: return "completed-by-base-regular"
        case .completedByTimeBold: return "completed-by-time-bold"
        case .completedByTimeLight: return "completed-by-time-light"
        case .completedByTimeRegular: return "completed-by-time-regular"
        case .computerBold: return "computer-bold"
        case .computerLight: return "computer-light"
        case .computerRegular: return "computer-regular"
        case .conciergeBold: return "concierge-bold"
        case .conciergeLight: return "concierge-light"
        case .conciergeRegular: return "concierge-regular"
        case .conditionalBlockBold: return "conditional-block-bold"
        case .conditionalBlockLight: return "conditional-block-light"
        case .conditionalBlockRegular: return "conditional-block-regular"
        case .connectBold: return "connect-bold"
        case .connectLight: return "connect-light"
        case .connectRegular: return "connect-regular"
        case .contactCardBold: return "contact-card-bold"
        case .contactCardFilled: return "contact-card-filled"
        case .contactCardLight: return "contact-card-light"
        case .contactCardRegular: return "contact-card-regular"
        case .contactsBold: return "contacts-bold"
        case .contactsFilled: return "contacts-filled"
        case .contactsLight: return "contacts-light"
        case .contactsRegular: return "contacts-regular"
        case .contentDownloadBold: return "content-download-bold"
        case .contentDownloadFilled: return "content-download-filled"
        case .contentDownloadLight: return "content-download-light"
        case .contentDownloadRegular: return "content-download-regular"
        case .contentShareBold: return "content-share-bold"
        case .contentShareLight: return "content-share-light"
        case .contentShareRegular: return "content-share-regular"
        case .contrastBold: return "contrast-bold"
        case .contrastLight: return "contrast-light"
        case .contrastRegular: return "contrast-regular"
        case .copyBold: return "copy-bold"
        case .copyLight: return "copy-light"
        case .copyRegular: return "copy-regular"
        case .cpuBold: return "cpu-bold"
        case .cpuLight: return "cpu-light"
        case .cpuRegular: return "cpu-regular"
        case .createAGroupBold: return "create-a-group-bold"
        case .createAGroupFilled: return "create-a-group-filled"
        case .createAGroupLight: return "create-a-group-light"
        case .createAGroupRegular: return "create-a-group-regular"
        case .cropBold: return "crop-bold"
        case .cropLight: return "crop-light"
        case .cropRegular: return "crop-regular"
        case .cucmConnectionBold: return "cucm-connection-bold"
        case .cucmConnectionLight: return "cucm-connection-light"
        case .cucmConnectionRegular: return "cucm-connection-regular"
        case .customCodeEditorBold: return "custom-code-editor-bold"
        case .customCodeEditorLight: return "custom-code-editor-light"
        case .customCodeEditorRegular: return "custom-code-editor-regular"
        case .dailyRecurringScheduleBold: return "daily-recurring-schedule-bold"
        case .dailyRecurringScheduleLight: return "daily-recurring-schedule-light"
        case .dailyRecurringScheduleRegular: return "daily-recurring-schedule-regular"
        case .dashboardBold: return "dashboard-bold"
        case .dashboardFilled: return "dashboard-filled"
        case .dashboardLight: return "dashboard-light"
        case .dashboardRegular: return "dashboard-regular"
        case .dataManagementBold: return "data-management-bold"
        case .dataManagementFilled: return "data-management-filled"
        case .dataManagementLight: return "data-management-light"
        case .dataManagementRegular: return "data-management-regular"
        case .dataRangeSelectionBold: return "data-range-selection-bold"
        case .dataRangeSelectionFilled: return "data-range-selection-filled"
        case .dataRangeSelectionLight: return "data-range-selection-light"
        case .dataRangeSelectionRegular: return "data-range-selection-regular"
        case .declineBold: return "decline-bold"
        case .declineFilled: return "decline-filled"
        case .declineLight: return "decline-light"
        case .declineRegular: return "decline-regular"
        case .dectHandsetBold: return "dect-handset-bold"
        case .dectHandsetFilled: return "dect-handset-filled"
        case .dectHandsetLight: return "dect-handset-light"
        case .dectHandsetRegular: return "dect-handset-regular"
        case .deleteBold: return "delete-bold"
        case .deleteFilled: return "delete-filled"
        case .deleteLight: return "delete-light"
        case .deleteRegular: return "delete-regular"
        case .deploymentEvaluationProgressBold: return "deployment-evaluation-progress-bold"
        case .deploymentEvaluationProgressLight: return "deployment-evaluation-progress-light"
        case .deploymentEvaluationProgressRegular: return "deployment-evaluation-progress-regular"
        case .deploymentProgressBold: return "deployment-progress-bold"
        case .deploymentProgressLight: return "deployment-progress-light"
        case .deploymentProgressRegular: return "deployment-progress-regular"
        case .deploymentRecurringBold: return "deployment-recurring-bold"
        case .deploymentRecurringLight: return "deployment-recurring-light"
        case .deploymentRecurringRegular: return "deployment-recurring-regular"
        case .deploymentWinnerPendingBold: return "deployment-winner-pending-bold"
        case .deploymentWinnerPendingLight: return "deployment-winner-pending-light"
        case .deploymentWinnerPendingRegular: return "deployment-winner-pending-regular"
        case .deskPhoneBold: return "desk-phone-bold"
        case .deskPhoneFilled: return "desk-phone-filled"
        case .deskPhoneLight: return "desk-phone-light"
        case .deskPhoneRegular: return "desk-phone-regular"
        case .deskPhoneWarningBold: return "desk-phone-warning-bold"
        case .deskPhoneWarningLight: return "desk-phone-warning-light"
        case .deskPhoneWarningRegular: return "desk-phone-warning-regular"
        case .deviceConnectionBold: return "device-connection-bold"
        case .deviceConnectionFilled: return "device-connection-filled"
        case .deviceConnectionLight: return "device-connection-light"
        case .deviceConnectionRegular: return "device-connection-regular"
        case .deviceInRoomBold: return "device-in-room-bold"
        case .deviceInRoomEndBold: return "device-in-room-end-bold"
        case .deviceInRoomEndLight: return "device-in-room-end-light"
        case .deviceInRoomEndRegular: return "device-in-room-end-regular"
        case .deviceInRoomFilled: return "device-in-room-filled"
        case .deviceInRoomLight: return "device-in-room-light"
        case .deviceInRoomRegular: return "device-in-room-regular"
        case .deviceMutedBold: return "device-muted-bold"
        case .deviceMutedLight: return "device-muted-light"
        case .deviceMutedRegular: return "device-muted-regular"
        case .devicePolicyControllerBold: return "device-policy-controller-bold"
        case .devicePolicyControllerLight: return "device-policy-controller-light"
        case .devicePolicyControllerRegular: return "device-policy-controller-regular"
        case .diagnosticsBold: return "diagnostics-bold"
        case .diagnosticsLight: return "diagnostics-light"
        case .diagnosticsRegular: return "diagnostics-regular"
        case .dialpadBold: return "dialpad-bold"
        case .dialpadLight: return "dialpad-light"
        case .dialpadRegular: return "dialpad-regular"
        case .directionalPadBold: return "directional-pad-bold"
        case .directionalPadFilled: return "directional-pad-filled"
        case .directionalPadLight: return "directional-pad-light"
        case .directionalPadRegular: return "directional-pad-regular"
        case .directoryBold: return "directory-bold"
        case .directoryLight: return "directory-light"
        case .directoryRegular: return "directory-regular"
        case .disappearingPenBold: return "disappearing-pen-bold"
        case .disappearingPenLight: return "disappearing-pen-light"
        case .disappearingPenRegular: return "disappearing-pen-regular"
        case .discBold: return "disc-bold"
        case .discConnectedBold: return "disc-connected-bold"
        case .discConnectedLight: return "disc-connected-light"
        case .discConnectedRegular: return "disc-connected-regular"
        case .discLight: return "disc-light"
        case .discRegular: return "disc-regular"
        case .disconnectBold: return "disconnect-bold"
        case .disconnectFilled: return "disconnect-filled"
        case .disconnectLight: return "disconnect-light"
        case .disconnectRegular: return "disconnect-regular"
        case .dislikeBold: return "dislike-bold"
        case .dislikeFilled: return "dislike-filled"
        case .dislikeLight: return "dislike-light"
        case .dislikeRegular: return "dislike-regular"
        case .displayBold: return "display-bold"
        case .displayInputBold: return "display-input-bold"
        case .displayInputLight: return "display-input-light"
        case .displayInputRegular: return "display-input-regular"
        case .displayLight: return "display-light"
        case .displayRegular: return "display-regular"
        case .displayWarningBold: return "display-warning-bold"
        case .displayWarningLight: return "display-warning-light"
        case .displayWarningRegular: return "display-warning-regular"
        case .distributeHorizontalBold: return "distribute-horizontal-bold"
        case .distributeHorizontalFilled: return "distribute-horizontal-filled"
        case .distributeHorizontalLight: return "distribute-horizontal-light"
        case .distributeHorizontalRegular: return "distribute-horizontal-regular"
        case .distributeVerticallyBold: return "distribute-vertically-bold"
        case .distributeVerticallyFilled: return "distribute-vertically-filled"
        case .distributeVerticallyLight: return "distribute-vertically-light"
        case .distributeVerticallyRegular: return "distribute-vertically-regular"
        case .dndPresenceBadgeFilled: return "dnd-presence-badge-filled"
        case .dndPresenceBold: return "dnd-presence-bold"
        case .dndPresenceFilled: return "dnd-presence-filled"
        case .dndPresenceLight: return "dnd-presence-light"
        case .dndPresenceRegular: return "dnd-presence-regular"
        case .dockWindowBold: return "dock-window-bold"
        case .dockWindowLight: return "dock-window-light"
        case .dockWindowRegular: return "dock-window-regular"
        case .documentBold: return "document-bold"
        case .documentCameraBold: return "document-camera-bold"
        case .documentCameraDisconnectedBold: return "document-camera-disconnected-bold"
        case .documentCameraDisconnectedLight: return "document-camera-disconnected-light"
        case .documentCameraDisconnectedRegular: return "document-camera-disconnected-regular"
        case .documentCameraLight: return "document-camera-light"
        case .documentCameraRegular: return "document-camera-regular"
        case .documentCreateBold: return "document-create-bold"
        case .documentCreateFilled: return "document-create-filled"
        case .documentCreateLight: return "document-create-light"
        case .documentCreateRegular: return "document-create-regular"
        case .documentFilled: return "document-filled"
        case .documentLight: return "document-light"
        case .documentMoveBold: return "document-move-bold"
        case .documentMoveFilled: return "document-move-filled"
        case .documentMoveLight: return "document-move-light"
        case .documentMoveRegular: return "document-move-regular"
        case .documentRegular: return "document-regular"
        case .documentShareBold: return "document-share-bold"
        case .documentShareFilled: return "document-share-filled"
        case .documentShareLight: return "document-share-light"
        case .documentShareRegular: return "document-share-regular"
        case .doneAllBold: return "done-all-bold"
        case .doneAllLight: return "done-all-light"
        case .doneAllRegular: return "done-all-regular"
        case .donutChartBold: return "donut-chart-bold"
        case .donutChartFilled: return "donut-chart-filled"
        case .donutChartLight: return "donut-chart-light"
        case .donutChartRegular: return "donut-chart-regular"
        case .downloadBold: return "download-bold"
        case .downloadFilled: return "download-filled"
        case .downloadLight: return "download-light"
        case .downloadRegular: return "download-regular"
        case .draftBold: return "draft-bold"
        case .draftFilled: return "draft-filled"
        case .draftIndicatorBold: return "draft-indicator-bold"
        case .draftIndicatorSmallFilled: return "draft-indicator-small-filled"
        case .draftLight: return "draft-light"
        case .draftRegular: return "draft-regular"
        case .dragBold: return "drag-bold"
        case .dragLight: return "drag-light"
        case .dragRegular: return "drag-regular"
        case .draggerHorizontalBold: return "dragger-horizontal-bold"
        case .draggerHorizontalLight: return "dragger-horizontal-light"
        case .draggerHorizontalRegular: return "dragger-horizontal-regular"
        case .draggerVerticalBold: return "dragger-vertical-bold"
        case .draggerVerticalLight: return "dragger-vertical-light"
        case .draggerVerticalRegular: return "dragger-vertical-regular"
        case .driveModeBold: return "drive-mode-bold"
        case .driveModeLight: return "drive-mode-light"
        case .driveModeRegular: return "drive-mode-regular"
        case .dropdownBold: return "dropdown-bold"
        case .dropdownLight: return "dropdown-light"
        case .dropdownRegular: return "dropdown-regular"
        case .dxEightyBold: return "dx-eighty-bold"
        case .dxEightyFilled: return "dx-eighty-filled"
        case .dxEightyLight: return "dx-eighty-light"
        case .dxEightyRegular: return "dx-eighty-regular"
        case .dxSeventyBold: return "dx-seventy-bold"
        case .dxSeventyLight: return "dx-seventy-light"
        case .dxSeventyRegular: return "dx-seventy-regular"
        case .editBold: return "edit-bold"
        case .editFilled: return "edit-filled"
        case .editLight: return "edit-light"
        case .editRegular: return "edit-regular"
        case .editablePartialBold: return "editable-partial-bold"
        case .editablePartialLight: return "editable-partial-light"
        case .editablePartialRegular: return "editable-partial-regular"
        case .educationBold: return "education-bold"
        case .educationFilled: return "education-filled"
        case .educationLight: return "education-light"
        case .educationRegular: return "education-regular"
        case .emailBold: return "email-bold"
        case .emailDeliveredBold: return "email-delivered-bold"
        case .emailDeliveredLight: return "email-delivered-light"
        case .emailDeliveredRegular: return "email-delivered-regular"
        case .emailFailureBold: return "email-failure-bold"
        case .emailFailureLight: return "email-failure-light"
        case .emailFailureRegular: return "email-failure-regular"
        case .emailFilled: return "email-filled"
        case .emailInviteBold: return "email-invite-bold"
        case .emailInviteLight: return "email-invite-light"
        case .emailInviteRegular: return "email-invite-regular"
        case .emailLight: return "email-light"
        case .emailOutgoingBold: return "email-outgoing-bold"
        case .emailOutgoingFilled: return "email-outgoing-filled"
        case .emailOutgoingLight: return "email-outgoing-light"
        case .emailOutgoingRegular: return "email-outgoing-regular"
        case .emailReadBold: return "email-read-bold"
        case .emailReadFilled: return "email-read-filled"
        case .emailReadLight: return "email-read-light"
        case .emailReadRegular: return "email-read-regular"
        case .emailRegular: return "email-regular"
        case .emojiExcitedBold: return "emoji-excited-bold"
        case .emojiExcitedFilled: return "emoji-excited-filled"
        case .emojiExcitedLight: return "emoji-excited-light"
        case .emojiExcitedRegular: return "emoji-excited-regular"
        case .emojiHappyBold: return "emoji-happy-bold"
        case .emojiHappyFilled: return "emoji-happy-filled"
        case .emojiHappyLight: return "emoji-happy-light"
        case .emojiHappyRegular: return "emoji-happy-regular"
        case .emojiPassiveBold: return "emoji-passive-bold"
        case .emojiPassiveFilled: return "emoji-passive-filled"
        case .emojiPassiveLight: return "emoji-passive-light"
        case .emojiPassiveRegular: return "emoji-passive-regular"
        case .emojiSadBold: return "emoji-sad-bold"
        case .emojiSadFilled: return "emoji-sad-filled"
        case .emojiSadLight: return "emoji-sad-light"
        case .emojiSadRegular: return "emoji-sad-regular"
        case .emojiUnhappyBold: return "emoji-unhappy-bold"
        case .emojiUnhappyFilled: return "emoji-unhappy-filled"
        case .emojiUnhappyLight: return "emoji-unhappy-light"
        case .emojiUnhappyRegular: return "emoji-unhappy-regular"
        case .encryptionCircleFilled: return "encryption-circle-filled"
        case .encryptionFilled: return "encryption-filled"
        case .endRemoteDesktopControlBold: return "end-remote-desktop-control-bold"
        case .endRemoteDesktopControlLight: return "end-remote-desktop-control-light"
        case .endRemoteDesktopControlRegular: return "end-remote-desktop-control-regular"
        case .endToEndEncryptionCircleFilled: return "end-to-end-encryption-circle-filled"
        case .endToEndEncryptionFilled: return "end-to-end-encryption-filled"
        case .endpointBlockedBold: return "endpoint-blocked-bold"
        case .endpointBlockedLight: return "endpoint-blocked-light"
        case .endpointBlockedRegular: return "endpoint-blocked-regular"
        case .endpointBold: return "endpoint-bold"
        case .endpointGTwoBold: return "endpoint-g-two-bold"
        case .endpointGTwoLight: return "endpoint-g-two-light"
        case .endpointGTwoRegular: return "endpoint-g-two-regular"
        case .endpointGTwoSeventyBold: return "endpoint-g-two-seventy-bold"
        case .endpointGTwoSeventyDualBold: return "endpoint-g-two-seventy-dual-bold"
        case .endpointGTwoSeventyDualLight: return "endpoint-g-two-seventy-dual-light"
        case .endpointGTwoSeventyDualRegular: return "endpoint-g-two-seventy-dual-regular"
        case .endpointGTwoSeventyLight: return "endpoint-g-two-seventy-light"
        case .endpointGTwoSeventyRegular: return "endpoint-g-two-seventy-regular"
        case .endpointGTwoStandBold: return "endpoint-g-two-stand-bold"
        case .endpointGTwoStandLight: return "endpoint-g-two-stand-light"
        case .endpointGTwoStandRegular: return "endpoint-g-two-stand-regular"
        case .endpointLight: return "endpoint-light"
        case .endpointMxEightHundredBold: return "endpoint-mx-eight-hundred-bold"
        case .endpointMxEightHundredDualBold: return "endpoint-mx-eight-hundred-dual-bold"
        case .endpointMxEightHundredDualLight: return "endpoint-mx-eight-hundred-dual-light"
        case .endpointMxEightHundredDualRegular: return "endpoint-mx-eight-hundred-dual-regular"
        case .endpointMxEightHundredLight: return "endpoint-mx-eight-hundred-light"
        case .endpointMxEightHundredRegular: return "endpoint-mx-eight-hundred-regular"
        case .endpointRegular: return "endpoint-regular"
        case .endpointStandBold: return "endpoint-stand-bold"
        case .endpointStandFilled: return "endpoint-stand-filled"
        case .endpointStandLight: return "endpoint-stand-light"
        case .endpointStandRegular: return "endpoint-stand-regular"
        case .endpointWarningBold: return "endpoint-warning-bold"
        case .endpointWarningLight: return "endpoint-warning-light"
        case .endpointWarningRegular: return "endpoint-warning-regular"
        case .enterBold: return "enter-bold"
        case .enterLight: return "enter-light"
        case .enterRegular: return "enter-regular"
        case .enterRoomBold: return "enter-room-bold"
        case .enterRoomFilled: return "enter-room-filled"
        case .enterRoomLight: return "enter-room-light"
        case .enterRoomRegular: return "enter-room-regular"
        case .eraserBold: return "eraser-bold"
        case .eraserFilled: return "eraser-filled"
        case .eraserLight: return "eraser-light"
        case .eraserRegular: return "eraser-regular"
        case .errorLegacyBadgeFilled: return "error-legacy-badge-filled"
        case .errorLegacyBold: return "error-legacy-bold"
        case .errorLegacyFilled: return "error-legacy-filled"
        case .errorLegacyLight: return "error-legacy-light"
        case .errorLegacyRegular: return "error-legacy-regular"
        case .ethernetBold: return "ethernet-bold"
        case .ethernetFilled: return "ethernet-filled"
        case .ethernetLight: return "ethernet-light"
        case .ethernetRegular: return "ethernet-regular"
        case .exchangeBold: return "exchange-bold"
        case .exchangeLight: return "exchange-light"
        case .exchangeRegular: return "exchange-regular"
        case .exclamationBold: return "exclamation-bold"
        case .exclamationLight: return "exclamation-light"
        case .exclamationRegular: return "exclamation-regular"
        case .excludeBold: return "exclude-bold"
        case .excludeLight: return "exclude-light"
        case .excludeRegular: return "exclude-regular"
        case .existingTargetGroupBold: return "existing-target-group-bold"
        case .existingTargetGroupLight: return "existing-target-group-light"
        case .existingTargetGroupRegular: return "existing-target-group-regular"
        case .exitRoomBold: return "exit-room-bold"
        case .exitRoomLight: return "exit-room-light"
        case .exitRoomRegular: return "exit-room-regular"
        case .exploreBold: return "explore-bold"
        case .exploreLight: return "explore-light"
        case .exploreRegular: return "explore-regular"
        case .exportBold: return "export-bold"
        case .exportLight: return "export-light"
        case .exportRegular: return "export-regular"
        case .extensionMobilityBold: return "extension-mobility-bold"
        case .extensionMobilityLight: return "extension-mobility-light"
        case .extensionMobilityRegular: return "extension-mobility-regular"
        case .externalMessageBold: return "external-message-bold"
        case .externalMessageLight: return "external-message-light"
        case .externalMessageRegular: return "external-message-regular"
        case .externalUserBold: return "external-user-bold"
        case .externalUserLight: return "external-user-light"
        case .externalUserRegular: return "external-user-regular"
        case .familyFontBold: return "family-font-bold"
        case .familyFontLight: return "family-font-light"
        case .familyFontRegular: return "family-font-regular"
        case .fastForwardBold: return "fast-forward-bold"
        case .fastForwardLight: return "fast-forward-light"
        case .fastForwardRegular: return "fast-forward-regular"
        case .favoriteBold: return "favorite-bold"
        case .favoriteFilled: return "favorite-filled"
        case .favoriteLight: return "favorite-light"
        case .favoriteRegular: return "favorite-regular"
        case .favoritesBold: return "favorites-bold"
        case .favoritesFilled: return "favorites-filled"
        case .favoritesLight: return "favorites-light"
        case .favoritesRegular: return "favorites-regular"
        case .fbwBold: return "fbw-bold"
        case .fbwFilled: return "fbw-filled"
        case .fbwLight: return "fbw-light"
        case .fbwRegular: return "fbw-regular"
        case .ffwBold: return "ffw-bold"
        case .ffwFilled: return "ffw-filled"
        case .ffwLight: return "ffw-light"
        case .ffwRegular: return "ffw-regular"
        case .fileAnalysisBold: return "file-analysis-bold"
        case .fileAnalysisFilled: return "file-analysis-filled"
        case .fileAnalysisLight: return "file-analysis-light"
        case .fileAnalysisRegular: return "file-analysis-regular"
        case .fileAnnotationBold: return "file-annotation-bold"
        case .fileAnnotationFilled: return "file-annotation-filled"
        case .fileAnnotationLight: return "file-annotation-light"
        case .fileAnnotationRegular: return "file-annotation-regular"
        case .fileAudioBold: return "file-audio-bold"
        case .fileAudioFilled: return "file-audio-filled"
        case .fileAudioLight: return "file-audio-light"
        case .fileAudioRegular: return "file-audio-regular"
        case .fileBugBold: return "file-bug-bold"
        case .fileBugFilled: return "file-bug-filled"
        case .fileBugLight: return "file-bug-light"
        case .fileBugRegular: return "file-bug-regular"
        case .fileCodeBold: return "file-code-bold"
        case .fileCodeFilled: return "file-code-filled"
        case .fileCodeLight: return "file-code-light"
        case .fileCodeRegular: return "file-code-regular"
        case .fileDashboardBold: return "file-dashboard-bold"
        case .fileDashboardFilled: return "file-dashboard-filled"
        case .fileDashboardLight: return "file-dashboard-light"
        case .fileDashboardRegular: return "file-dashboard-regular"
        case .fileExcelBold: return "file-excel-bold"
        case .fileExcelFilled: return "file-excel-filled"
        case .fileExcelLight: return "file-excel-light"
        case .fileExcelRegular: return "file-excel-regular"
        case .fileGraphBold: return "file-graph-bold"
        case .fileGraphFilled: return "file-graph-filled"
        case .fileGraphLight: return "file-graph-light"
        case .fileGraphRegular: return "file-graph-regular"
        case .fileImageBold: return "file-image-bold"
        case .fileImageFilled: return "file-image-filled"
        case .fileImageLight: return "file-image-light"
        case .fileImageNoneBold: return "file-image-none-bold"
        case .fileImageNoneLight: return "file-image-none-light"
        case .fileImageNoneRegular: return "file-image-none-regular"
        case .fileImageRegular: return "file-image-regular"
        case .fileJsBold: return "file-js-bold"
        case .fileJsFilled: return "file-js-filled"
        case .fileJsLight: return "file-js-light"
        case .fileJsRegular: return "file-js-regular"
        case .fileKeynoteBold: return "file-keynote-bold"
        case .fileKeynoteFilled: return "file-keynote-filled"
        case .fileKeynoteLight: return "file-keynote-light"
        case .fileKeynoteRegular: return "file-keynote-regular"
        case .fileLockedBold: return "file-locked-bold"
        case .fileLockedFilled: return "file-locked-filled"
        case .fileLockedLight: return "file-locked-light"
        case .fileLockedRegular: return "file-locked-regular"
        case .fileMissingBold: return "file-missing-bold"
        case .fileMissingFilled: return "file-missing-filled"
        case .fileMissingLight: return "file-missing-light"
        case .fileMissingRegular: return "file-missing-regular"
        case .fileMusicBold: return "file-music-bold"
        case .fileMusicFilled: return "file-music-filled"
        case .fileMusicLight: return "file-music-light"
        case .fileMusicRegular: return "file-music-regular"
        case .fileOnenoteBold: return "file-onenote-bold"
        case .fileOnenoteFilled: return "file-onenote-filled"
        case .fileOnenoteLight: return "file-onenote-light"
        case .fileOnenoteRegular: return "file-onenote-regular"
        case .filePdfBold: return "file-pdf-bold"
        case .filePdfFilled: return "file-pdf-filled"
        case .filePdfLight: return "file-pdf-light"
        case .filePdfRegular: return "file-pdf-regular"
        case .filePowerpointBold: return "file-powerpoint-bold"
        case .filePowerpointFilled: return "file-powerpoint-filled"
        case .filePowerpointLight: return "file-powerpoint-light"
        case .filePowerpointRegular: return "file-powerpoint-regular"
        case .fileSpreadsheetBold: return "file-spreadsheet-bold"
        case .fileSpreadsheetFilled: return "file-spreadsheet-filled"
        case .fileSpreadsheetLight: return "file-spreadsheet-light"
        case .fileSpreadsheetRegular: return "file-spreadsheet-regular"
        case .fileTextBold: return "file-text-bold"
        case .fileTextFilled: return "file-text-filled"
        case .fileTextLight: return "file-text-light"
        case .fileTextRegular: return "file-text-regular"
        case .fileThreeDBold: return "file-three-d-bold"
        case .fileThreeDFilled: return "file-three-d-filled"
        case .fileThreeDLight: return "file-three-d-light"
        case .fileThreeDRegular: return "file-three-d-regular"
        case .fileVectorBold: return "file-vector-bold"
        case .fileVectorFilled: return "file-vector-filled"
        case .fileVectorLight: return "file-vector-light"
        case .fileVectorRegular: return "file-vector-regular"
        case .fileVideoBold: return "file-video-bold"
        case .fileVideoFilled: return "file-video-filled"
        case .fileVideoLight: return "file-video-light"
        case .fileVideoRegular: return "file-video-regular"
        case .fileWordBold: return "file-word-bold"
        case .fileWordFilled: return "file-word-filled"
        case .fileWordLight: return "file-word-light"
        case .fileWordRegular: return "file-word-regular"
        case .fileXmlBold: return "file-xml-bold"
        case .fileXmlFilled: return "file-xml-filled"
        case .fileXmlLight: return "file-xml-light"
        case .fileXmlRegular: return "file-xml-regular"
        case .fileZipBold: return "file-zip-bold"
        case .fileZipFilled: return "file-zip-filled"
        case .fileZipLight: return "file-zip-light"
        case .fileZipRegular: return "file-zip-regular"
        case .filesBold: return "files-bold"
        case .filesFilled: return "files-filled"
        case .filesLight: return "files-light"
        case .filesRegular: return "files-regular"
        case .fillColourBold: return "fill-colour-bold"
        case .fillColourFilled: return "fill-colour-filled"
        case .fillColourLight: return "fill-colour-light"
        case .fillColourRegular: return "fill-colour-regular"
        case .filterBold: return "filter-bold"
        case .filterCircleBold: return "filter-circle-bold"
        case .filterCircleFilled: return "filter-circle-filled"
        case .filterCircleLight: return "filter-circle-light"
        case .filterCircleRegular: return "filter-circle-regular"
        case .filterLight: return "filter-light"
        case .filterRegular: return "filter-regular"
        case .fitToWidthBold: return "fit-to-width-bold"
        case .fitToWidthLight: return "fit-to-width-light"
        case .fitToWidthRegular: return "fit-to-width-regular"
        case .fitToWindowExpandBold: return "fit-to-window-expand-bold"
        case .fitToWindowExpandLight: return "fit-to-window-expand-light"
        case .fitToWindowExpandRegular: return "fit-to-window-expand-regular"
        case .fitToWindowShrinkBold: return "fit-to-window-shrink-bold"
        case .fitToWindowShrinkLight: return "fit-to-window-shrink-light"
        case .fitToWindowShrinkRegular: return "fit-to-window-shrink-regular"
        case .flagBold: return "flag-bold"
        case .flagCircleBold: return "flag-circle-bold"
        case .flagCircleFilled: return "flag-circle-filled"
        case .flagCircleLight: return "flag-circle-light"
        case .flagCircleRegular: return "flag-circle-regular"
        case .flagFilled: return "flag-filled"
        case .flagLight: return "flag-light"
        case .flagRegular: return "flag-regular"
        case .folderBold: return "folder-bold"
        case .folderEditBold: return "folder-edit-bold"
        case .folderEditLight: return "folder-edit-light"
        case .folderEditRegular: return "folder-edit-regular"
        case .folderLight: return "folder-light"
        case .folderLockBold: return "folder-lock-bold"
        case .folderLockLight: return "folder-lock-light"
        case .folderLockRegular: return "folder-lock-regular"
        case .folderRegular: return "folder-regular"
        case .folderViewBold: return "folder-view-bold"
        case .folderViewLight: return "folder-view-light"
        case .folderViewRegular: return "folder-view-regular"
        case .followUpBold: return "follow-up-bold"
        case .followUpLight: return "follow-up-light"
        case .followUpRegular: return "follow-up-regular"
        case .foodBold: return "food-bold"
        case .foodFilled: return "food-filled"
        case .foodLight: return "food-light"
        case .foodRegular: return "food-regular"
        case .formatBold: return "format-bold"
        case .formatDefaultAppBold: return "format-default-app-bold"
        case .formatDefaultAppFilled: return "format-default-app-filled"
        case .formatDefaultAppLight: return "format-default-app-light"
        case .formatDefaultAppRegular: return "format-default-app-regular"
        case .formatLight: return "format-light"
        case .formatPanelControlBarBold: return "format-panel-control-bar-bold"
        case .formatPanelControlBarLight: return "format-panel-control-bar-light"
        case .formatPanelControlBarRegular: return "format-panel-control-bar-regular"
        case .formatPanelControlDownBold: return "format-panel-control-down-bold"
        case .formatPanelControlDownLight: return "format-panel-control-down-light"
        case .formatPanelControlDownRegular: return "format-panel-control-down-regular"
        case .formatPanelControlLeftBold: return "format-panel-control-left-bold"
        case .formatPanelControlLeftLight: return "format-panel-control-left-light"
        case .formatPanelControlLeftRegular: return "format-panel-control-left-regular"
        case .formatPanelControlRightBold: return "format-panel-control-right-bold"
        case .formatPanelControlRightLight: return "format-panel-control-right-light"
        case .formatPanelControlRightRegular: return "format-panel-control-right-regular"
        case .formatPanelControlUpBold: return "format-panel-control-up-bold"
        case .formatPanelControlUpDownBold: return "format-panel-control-up-down-bold"
        case .formatPanelControlUpDownLight: return "format-panel-control-up-down-light"
        case .formatPanelControlUpDownRegular: return "format-panel-control-up-down-regular"
        case .formatPanelControlUpLight: return "format-panel-control-up-light"
        case .formatPanelControlUpRegular: return "format-panel-control-up-regular"
        case .formatRegular: return "format-regular"
        case .formatViewMixedBold: return "format-view-mixed-bold"
        case .formatViewMixedLight: return "format-view-mixed-light"
        case .formatViewMixedRegular: return "format-view-mixed-regular"
        case .forwardMessageBold: return "forward-message-bold"
        case .forwardMessageFilled: return "forward-message-filled"
        case .forwardMessageLight: return "forward-message-light"
        case .forwardMessageRegular: return "forward-message-regular"
        case .forwardTenSecBold: return "forward-ten-sec-bold"
        case .forwardTenSecLight: return "forward-ten-sec-light"
        case .forwardTenSecRegular: return "forward-ten-sec-regular"
        case .fourColumnBold: return "four-column-bold"
        case .fourColumnLight: return "four-column-light"
        case .fourColumnRegular: return "four-column-regular"
        case .fourWayNavigationBold: return "four-way-navigation-bold"
        case .fourWayNavigationLight: return "four-way-navigation-light"
        case .fourWayNavigationRegular: return "four-way-navigation-regular"
        case .frequencyCappingBold: return "frequency-capping-bold"
        case .frequencyCappingLight: return "frequency-capping-light"
        case .frequencyCappingRegular: return "frequency-capping-regular"
        case .fulfillmentBold: return "fulfillment-bold"
        case .fulfillmentLight: return "fulfillment-light"
        case .fulfillmentRegular: return "fulfillment-regular"
        case .fullscreenBold: return "fullscreen-bold"
        case .fullscreenExitBold: return "fullscreen-exit-bold"
        case .fullscreenExitLight: return "fullscreen-exit-light"
        case .fullscreenExitRegular: return "fullscreen-exit-regular"
        case .fullscreenLight: return "fullscreen-light"
        case .fullscreenRegular: return "fullscreen-regular"
        case .genericDeviceVideoBadgeFilled: return "generic-device-video-badge-filled"
        case .genericDeviceVideoBold: return "generic-device-video-bold"
        case .genericDeviceVideoFilled: return "generic-device-video-filled"
        case .genericDeviceVideoLight: return "generic-device-video-light"
        case .genericDeviceVideoRegular: return "generic-device-video-regular"
        case .gifBold: return "gif-bold"
        case .gifFilled: return "gif-filled"
        case .gifHorizontalBold: return "gif-horizontal-bold"
        case .gifHorizontalFilled: return "gif-horizontal-filled"
        case .gifHorizontalLight: return "gif-horizontal-light"
        case .gifHorizontalRegular: return "gif-horizontal-regular"
        case .gifLight: return "gif-light"
        case .gifRegular: return "gif-regular"
        case .giftBold: return "gift-bold"
        case .giftFilled: return "gift-filled"
        case .giftLight: return "gift-light"
        case .giftRegular: return "gift-regular"
        case .greenLeafBold: return "green-leaf-bold"
        case .greenLeafFilled: return "green-leaf-filled"
        case .greenLeafLight: return "green-leaf-light"
        case .greenLeafRegular: return "green-leaf-regular"
        case .greenRoomBold: return "green-room-bold"
        case .greenRoomFilled: return "green-room-filled"
        case .greenRoomLight: return "green-room-light"
        case .greenRoomRegular: return "green-room-regular"
        case .guestIssuerBold: return "guest-issuer-bold"
        case .guestIssuerLight: return "guest-issuer-light"
        case .guestIssuerRegular: return "guest-issuer-regular"
        case .guideBold: return "guide-bold"
        case .guideLight: return "guide-light"
        case .guideRegular: return "guide-regular"
        case .handPointerBold: return "hand-pointer-bold"
        case .handPointerLight: return "hand-pointer-light"
        case .handPointerRegular: return "hand-pointer-regular"
        case .handlerBold: return "handler-bold"
        case .handlerHorizontalBold: return "handler-horizontal-bold"
        case .handlerHorizontalLight: return "handler-horizontal-light"
        case .handlerHorizontalRegular: return "handler-horizontal-regular"
        case .handlerLight: return "handler-light"
        case .handlerRegular: return "handler-regular"
        case .handsetAlertBold: return "handset-alert-bold"
        case .handsetAlertFilled: return "handset-alert-filled"
        case .handsetAlertLight: return "handset-alert-light"
        case .handsetAlertRegular: return "handset-alert-regular"
        case .handsetBold: return "handset-bold"
        case .handsetDownSlashBold: return "handset-down-slash-bold"
        case .handsetDownSlashFilled: return "handset-down-slash-filled"
        case .handsetDownSlashLight: return "handset-down-slash-light"
        case .handsetDownSlashRegular: return "handset-down-slash-regular"
        case .handsetFilled: return "handset-filled"
        case .handsetLight: return "handset-light"
        case .handsetMutedBold: return "handset-muted-bold"
        case .handsetMutedFilled: return "handset-muted-filled"
        case .handsetMutedLight: return "handset-muted-light"
        case .handsetMutedRegular: return "handset-muted-regular"
        case .handsetRegular: return "handset-regular"
        case .handsetsArrowLeftBold: return "handsets-arrow-left-bold"
        case .handsetsArrowLeftLight: return "handsets-arrow-left-light"
        case .handsetsArrowLeftRegular: return "handsets-arrow-left-regular"
        case .handshakeBold: return "handshake-bold"
        case .handshakeLight: return "handshake-light"
        case .handshakeRegular: return "handshake-regular"
        case .headingOneBold: return "heading-one-bold"
        case .headingOneLight: return "heading-one-light"
        case .headingOneRegular: return "heading-one-regular"
        case .headingThreeBold: return "heading-three-bold"
        case .headingThreeLight: return "heading-three-light"
        case .headingThreeRegular: return "heading-three-regular"
        case .headingTwoBold: return "heading-two-bold"
        case .headingTwoLight: return "heading-two-light"
        case .headingTwoRegular: return "heading-two-regular"
        case .headphonesBold: return "headphones-bold"
        case .headphonesFilled: return "headphones-filled"
        case .headphonesLight: return "headphones-light"
        case .headphonesMutedBold: return "headphones-muted-bold"
        case .headphonesMutedFilled: return "headphones-muted-filled"
        case .headphonesMutedLight: return "headphones-muted-light"
        case .headphonesMutedRegular: return "headphones-muted-regular"
        case .headphonesRegular: return "headphones-regular"
        case .headsetAlertBold: return "headset-alert-bold"
        case .headsetAlertLight: return "headset-alert-light"
        case .headsetAlertRegular: return "headset-alert-regular"
        case .headsetArrowDownBold: return "headset-arrow-down-bold"
        case .headsetArrowDownFilled: return "headset-arrow-down-filled"
        case .headsetArrowDownLight: return "headset-arrow-down-light"
        case .headsetArrowDownRegular: return "headset-arrow-down-regular"
        case .headsetBold: return "headset-bold"
        case .headsetFilled: return "headset-filled"
        case .headsetLight: return "headset-light"
        case .headsetMutedBold: return "headset-muted-bold"
        case .headsetMutedLight: return "headset-muted-light"
        case .headsetMutedRegular: return "headset-muted-regular"
        case .headsetPrivateBold: return "headset-private-bold"
        case .headsetPrivateLight: return "headset-private-light"
        case .headsetPrivateRegular: return "headset-private-regular"
        case .headsetRegular: return "headset-regular"
        case .hearingBold: return "hearing-bold"
        case .hearingImpairedBold: return "hearing-impaired-bold"
        case .hearingImpairedLight: return "hearing-impaired-light"
        case .hearingImpairedRegular: return "hearing-impaired-regular"
        case .hearingLight: return "hearing-light"
        case .hearingRegular: return "hearing-regular"
        case .helpBold: return "help-bold"
        case .helpCircleBold: return "help-circle-bold"
        case .helpCircleFilled: return "help-circle-filled"
        case .helpCircleLight: return "help-circle-light"
        case .helpCircleRegular: return "help-circle-regular"
        case .helpLight: return "help-light"
        case .helpRegular: return "help-regular"
        case .helpdeskBold: return "helpdesk-bold"
        case .helpdeskFilled: return "helpdesk-filled"
        case .helpdeskLight: return "helpdesk-light"
        case .helpdeskRegular: return "helpdesk-regular"
        case .hideBold: return "hide-bold"
        case .hideFilled: return "hide-filled"
        case .hideLight: return "hide-light"
        case .hideRegular: return "hide-regular"
        case .homeBold: return "home-bold"
        case .homeFilled: return "home-filled"
        case .homeLight: return "home-light"
        case .homeRegular: return "home-regular"
        case .horizontalLineBold: return "horizontal-line-bold"
        case .horizontalLineLight: return "horizontal-line-light"
        case .horizontalLineRegular: return "horizontal-line-regular"
        case .hotelingBold: return "hoteling-bold"
        case .hotelingFilled: return "hoteling-filled"
        case .hotelingLight: return "hoteling-light"
        case .hotelingRegular: return "hoteling-regular"
        case .humidityBold: return "humidity-bold"
        case .humidityLight: return "humidity-light"
        case .humidityRegular: return "humidity-regular"
        case .huntGroupBold: return "hunt-group-bold"
        case .huntGroupFilled: return "hunt-group-filled"
        case .huntGroupLight: return "hunt-group-light"
        case .huntGroupRegular: return "hunt-group-regular"
        case .idleBold: return "idle-bold"
        case .idleFilled: return "idle-filled"
        case .idleLight: return "idle-light"
        case .idleRegular: return "idle-regular"
        case .immediateBold: return "immediate-bold"
        case .immediateFilled: return "immediate-filled"
        case .immediateLight: return "immediate-light"
        case .immediateRegular: return "immediate-regular"
        case .importBold: return "import-bold"
        case .importLight: return "import-light"
        case .importRegular: return "import-regular"
        case .inCommonBold: return "in-common-bold"
        case .inCommonLight: return "in-common-light"
        case .inCommonRegular: return "in-common-regular"
        case .inboxBold: return "inbox-bold"
        case .inboxFilled: return "inbox-filled"
        case .inboxLight: return "inbox-light"
        case .inboxRegular: return "inbox-regular"
        case .includeBold: return "include-bold"
        case .includeLight: return "include-light"
        case .includeRegular: return "include-regular"
        case .incognitoBold: return "incognito-bold"
        case .incognitoFilled: return "incognito-filled"
        case .incognitoLight: return "incognito-light"
        case .incognitoRegular: return "incognito-regular"
        case .incomingCallLegacyBold: return "incoming-call-legacy-bold"
        case .incomingCallLegacyFilled: return "incoming-call-legacy-filled"
        case .incomingCallLegacyLight: return "incoming-call-legacy-light"
        case .incomingCallLegacyRegular: return "incoming-call-legacy-regular"
        case .indentDecreaseBold: return "indent-decrease-bold"
        case .indentDecreaseLight: return "indent-decrease-light"
        case .indentDecreaseRegular: return "indent-decrease-regular"
        case .indentIncreaseBold: return "indent-increase-bold"
        case .indentIncreaseLight: return "indent-increase-light"
        case .indentIncreaseRegular: return "indent-increase-regular"
        case .infoBadgeFilled: return "info-badge-filled"
        case .infoCircleBold: return "info-circle-bold"
        case .infoCircleFilled: return "info-circle-filled"
        case .infoCircleLight: return "info-circle-light"
        case .infoCircleRegular: return "info-circle-regular"
        case .infoCircleTwoBold: return "info-circle-two-bold"
        case .infoCircleTwoFilled: return "info-circle-two-filled"
        case .infoCircleTwoLight: return "info-circle-two-light"
        case .infoCircleTwoRegular: return "info-circle-two-regular"
        case .inputBold: return "input-bold"
        case .inputDisconnectedBold: return "input-disconnected-bold"
        case .inputDisconnectedLight: return "input-disconnected-light"
        case .inputDisconnectedRegular: return "input-disconnected-regular"
        case .inputLight: return "input-light"
        case .inputRegular: return "input-regular"
        case .instantScheduleBold: return "instant-schedule-bold"
        case .instantScheduleFilled: return "instant-schedule-filled"
        case .instantScheduleLight: return "instant-schedule-light"
        case .instantScheduleRegular: return "instant-schedule-regular"
        case .integrationsBold: return "integrations-bold"
        case .integrationsLight: return "integrations-light"
        case .integrationsRegular: return "integrations-regular"
        case .intelligentRoutingBold: return "intelligent-routing-bold"
        case .intelligentRoutingLight: return "intelligent-routing-light"
        case .intelligentRoutingRegular: return "intelligent-routing-regular"
        case .interactionBold: return "interaction-bold"
        case .interactionFilled: return "interaction-filled"
        case .interactionLight: return "interaction-light"
        case .interactionRegular: return "interaction-regular"
        case .invitedUserBold: return "invited-user-bold"
        case .invitedUserLight: return "invited-user-light"
        case .invitedUserRegular: return "invited-user-regular"
        case .italicBold: return "italic-bold"
        case .italicFilled: return "italic-filled"
        case .italicLight: return "italic-light"
        case .italicRegular: return "italic-regular"
        case .joinAudioBold: return "join-audio-bold"
        case .joinAudioFilled: return "join-audio-filled"
        case .joinAudioLight: return "join-audio-light"
        case .joinAudioRegular: return "join-audio-regular"
        case .keepInTouchBold: return "keep-in-touch-bold"
        case .keepInTouchFilled: return "keep-in-touch-filled"
        case .keepInTouchLight: return "keep-in-touch-light"
        case .keepInTouchRegular: return "keep-in-touch-regular"
        case .keyboardBold: return "keyboard-bold"
        case .keyboardCloseBold: return "keyboard-close-bold"
        case .keyboardCloseLight: return "keyboard-close-light"
        case .keyboardCloseRegular: return "keyboard-close-regular"
        case .keyboardLight: return "keyboard-light"
        case .keyboardRegular: return "keyboard-regular"
        case .languageBold: return "language-bold"
        case .languageFilled: return "language-filled"
        case .languageLight: return "language-light"
        case .languageRegular: return "language-regular"
        case .laptopBold: return "laptop-bold"
        case .laptopDisconnectedBold: return "laptop-disconnected-bold"
        case .laptopDisconnectedLight: return "laptop-disconnected-light"
        case .laptopDisconnectedRegular: return "laptop-disconnected-regular"
        case .laptopFilled: return "laptop-filled"
        case .laptopLight: return "laptop-light"
        case .laptopRegular: return "laptop-regular"
        case .laserPointerBold: return "laser-pointer-bold"
        case .laserPointerFilled: return "laser-pointer-filled"
        case .laserPointerLight: return "laser-pointer-light"
        case .laserPointerRegular: return "laser-pointer-regular"
        case .launchBold: return "launch-bold"
        case .launchLight: return "launch-light"
        case .launchRegular: return "launch-regular"
        case .layoutSideBySideVerticalBold: return "layout-side-by-side-vertical-bold"
        case .layoutSideBySideVerticalFilled: return "layout-side-by-side-vertical-filled"
        case .layoutSideBySideVerticalLight: return "layout-side-by-side-vertical-light"
        case .layoutSideBySideVerticalRegular: return "layout-side-by-side-vertical-regular"
        case .leaveBreakoutSessionBold: return "leave-breakout-session-bold"
        case .leaveBreakoutSessionLight: return "leave-breakout-session-light"
        case .leaveBreakoutSessionRegular: return "leave-breakout-session-regular"
        case .leaveDeviceBold: return "leave-device-bold"
        case .leaveDeviceLight: return "leave-device-light"
        case .leaveDeviceRegular: return "leave-device-regular"
        case .likeBold: return "like-bold"
        case .likeFilled: return "like-filled"
        case .likeLight: return "like-light"
        case .likeRegular: return "like-regular"
        case .linkBold: return "link-bold"
        case .linkLight: return "link-light"
        case .linkRegular: return "link-regular"
        case .listBulletedBold: return "list-bulleted-bold"
        case .listBulletedLight: return "list-bulleted-light"
        case .listBulletedRegular: return "list-bulleted-regular"
        case .listMenuBold: return "list-menu-bold"
        case .listMenuLight: return "list-menu-light"
        case .listMenuRegular: return "list-menu-regular"
        case .listNumberedBold: return "list-numbered-bold"
        case .listNumberedLight: return "list-numbered-light"
        case .listNumberedRegular: return "list-numbered-regular"
        case .liveBold: return "live-bold"
        case .liveFilled: return "live-filled"
        case .liveLight: return "live-light"
        case .liveRegular: return "live-regular"
        case .locationBold: return "location-bold"
        case .locationFilled: return "location-filled"
        case .locationLight: return "location-light"
        case .locationRegular: return "location-regular"
        case .longTextBoxBold: return "long-text-box-bold"
        case .longTextBoxLight: return "long-text-box-light"
        case .longTextBoxRegular: return "long-text-box-regular"
        case .lowerHandBold: return "lower-hand-bold"
        case .lowerHandLight: return "lower-hand-light"
        case .lowerHandRegular: return "lower-hand-regular"
        case .magicPenBold: return "magic-pen-bold"
        case .magicPenFilled: return "magic-pen-filled"
        case .magicPenLight: return "magic-pen-light"
        case .magicPenRegular: return "magic-pen-regular"
        case .markAsUnreadBold: return "mark-as-unread-bold"
        case .markAsUnreadLight: return "mark-as-unread-light"
        case .markAsUnreadRegular: return "mark-as-unread-regular"
        case .markdownBold: return "markdown-bold"
        case .markdownFilled: return "markdown-filled"
        case .markdownLight: return "markdown-light"
        case .markdownRegular: return "markdown-regular"
        case .markerBold: return "marker-bold"
        case .markerFilled: return "marker-filled"
        case .markerLight: return "marker-light"
        case .markerRegular: return "marker-regular"
        case .maximizeBold: return "maximize-bold"
        case .maximizeLight: return "maximize-light"
        case .maximizeRegular: return "maximize-regular"
        case .mediaPlayerBold: return "media-player-bold"
        case .mediaPlayerLight: return "media-player-light"
        case .mediaPlayerRegular: return "media-player-regular"
        case .mediaQualityGoodBold: return "media-quality-good-bold"
        case .mediaQualityGoodFilled: return "media-quality-good-filled"
        case .mediaQualityGoodLight: return "media-quality-good-light"
        case .mediaQualityGoodRegular: return "media-quality-good-regular"
        case .mediaQualityPoorBold: return "media-quality-poor-bold"
        case .mediaQualityPoorFilled: return "media-quality-poor-filled"
        case .mediaQualityPoorLight: return "media-quality-poor-light"
        case .mediaQualityPoorRegular: return "media-quality-poor-regular"
        case .mediaQualityUnstableBold: return "media-quality-unstable-bold"
        case .mediaQualityUnstableFilled: return "media-quality-unstable-filled"
        case .mediaQualityUnstableLight: return "media-quality-unstable-light"
        case .mediaQualityUnstableRegular: return "media-quality-unstable-regular"
        case .meetBold: return "meet-bold"
        case .meetEndBold: return "meet-end-bold"
        case .meetEndLight: return "meet-end-light"
        case .meetEndRegular: return "meet-end-regular"
        case .meetFilled: return "meet-filled"
        case .meetLight: return "meet-light"
        case .meetRegular: return "meet-regular"
        case .meetingSummaryBold: return "meeting-summary-bold"
        case .meetingSummaryFilled: return "meeting-summary-filled"
        case .meetingSummaryLight: return "meeting-summary-light"
        case .meetingSummaryRegular: return "meeting-summary-regular"
        case .meetingsBold: return "meetings-bold"
        case .meetingsFilled: return "meetings-filled"
        case .meetingsFocusMonthBold: return "meetings-focus-month-bold"
        case .meetingsFocusMonthLight: return "meetings-focus-month-light"
        case .meetingsFocusMonthRegular: return "meetings-focus-month-regular"
        case .meetingsFocusOneDayBold: return "meetings-focus-one-day-bold"
        case .meetingsFocusOneDayLight: return "meetings-focus-one-day-light"
        case .meetingsFocusOneDayRegular: return "meetings-focus-one-day-regular"
        case .meetingsFocusThreeDayBold: return "meetings-focus-three-day-bold"
        case .meetingsFocusThreeDayLight: return "meetings-focus-three-day-light"
        case .meetingsFocusThreeDayRegular: return "meetings-focus-three-day-regular"
        case .meetingsFocusUpcomingBold: return "meetings-focus-upcoming-bold"
        case .meetingsFocusUpcomingLight: return "meetings-focus-upcoming-light"
        case .meetingsFocusUpcomingRegular: return "meetings-focus-upcoming-regular"
        case .meetingsLight: return "meetings-light"
        case .meetingsPresenceBadgeFilled: return "meetings-presence-badge-filled"
        case .meetingsPresenceBold: return "meetings-presence-bold"
        case .meetingsPresenceFilled: return "meetings-presence-filled"
        case .meetingsPresenceLight: return "meetings-presence-light"
        case .meetingsPresenceRegular: return "meetings-presence-regular"
        case .meetingsRegular: return "meetings-regular"
        case .meetingsTeamBold: return "meetings-team-bold"
        case .meetingsTeamFilled: return "meetings-team-filled"
        case .meetingsTeamLight: return "meetings-team-light"
        case .meetingsTeamNewBold: return "meetings-team-new-bold"
        case .meetingsTeamNewLight: return "meetings-team-new-light"
        case .meetingsTeamNewRegular: return "meetings-team-new-regular"
        case .meetingsTeamRegular: return "meetings-team-regular"
        case .mentionBold: return "mention-bold"
        case .mentionLight: return "mention-light"
        case .mentionRegular: return "mention-regular"
        case .messageQueingBold: return "message-queing-bold"
        case .messageQueingLight: return "message-queing-light"
        case .messageQueingRegular: return "message-queing-regular"
        case .microphoneBold: return "microphone-bold"
        case .microphoneFilled: return "microphone-filled"
        case .microphoneHardMutedBold: return "microphone-hard-muted-bold"
        case .microphoneHardMutedCircleFilled: return "microphone-hard-muted-circle-filled"
        case .microphoneHardMutedLight: return "microphone-hard-muted-light"
        case .microphoneHardMutedRegular: return "microphone-hard-muted-regular"
        case .microphoneLight: return "microphone-light"
        case .microphoneMusicModeBold: return "microphone-music-mode-bold"
        case .microphoneMusicModeLight: return "microphone-music-mode-light"
        case .microphoneMusicModeOnBold: return "microphone-music-mode-on-bold"
        case .microphoneMusicModeOnLight: return "microphone-music-mode-on-light"
        case .microphoneMusicModeOnRegular: return "microphone-music-mode-on-regular"
        case .microphoneMusicModeRegular: return "microphone-music-mode-regular"
        case .microphoneMutedBold: return "microphone-muted-bold"
        case .microphoneMutedCircleFilled: return "microphone-muted-circle-filled"
        case .microphoneMutedFilled: return "microphone-muted-filled"
        case .microphoneMutedLight: return "microphone-muted-light"
        case .microphoneMutedRegular: return "microphone-muted-regular"
        case .microphoneOnBold: return "microphone-on-bold"
        case .microphoneOnLight: return "microphone-on-light"
        case .microphoneOnRegular: return "microphone-on-regular"
        case .microphoneOptAllBold: return "microphone-opt-all-bold"
        case .microphoneOptAllLight: return "microphone-opt-all-light"
        case .microphoneOptAllMutedBold: return "microphone-opt-all-muted-bold"
        case .microphoneOptAllMutedLight: return "microphone-opt-all-muted-light"
        case .microphoneOptAllMutedRegular: return "microphone-opt-all-muted-regular"
        case .microphoneOptAllOnBold: return "microphone-opt-all-on-bold"
        case .microphoneOptAllOnLight: return "microphone-opt-all-on-light"
        case .microphoneOptAllOnRegular: return "microphone-opt-all-on-regular"
        case .microphoneOptAllRegular: return "microphone-opt-all-regular"
        case .microphoneOptMeBold: return "microphone-opt-me-bold"
        case .microphoneOptMeLight: return "microphone-opt-me-light"
        case .microphoneOptMeMutedBold: return "microphone-opt-me-muted-bold"
        case .microphoneOptMeMutedLight: return "microphone-opt-me-muted-light"
        case .microphoneOptMeMutedRegular: return "microphone-opt-me-muted-regular"
        case .microphoneOptMeOnBold: return "microphone-opt-me-on-bold"
        case .microphoneOptMeOnLight: return "microphone-opt-me-on-light"
        case .microphoneOptMeOnRegular: return "microphone-opt-me-on-regular"
        case .microphoneOptMeRegular: return "microphone-opt-me-regular"
        case .microphoneRegular: return "microphone-regular"
        case .mindMapBold: return "mind-map-bold"
        case .mindMapLight: return "mind-map-light"
        case .mindMapRegular: return "mind-map-regular"
        case .minimizeBold: return "minimize-bold"
        case .minimizeLight: return "minimize-light"
        case .minimizeRegular: return "minimize-regular"
        case .minusBold: return "minus-bold"
        case .minusLight: return "minus-light"
        case .minusRegular: return "minus-regular"
        case .mirrorBold: return "mirror-bold"
        case .mirrorFilled: return "mirror-filled"
        case .mirrorLight: return "mirror-light"
        case .mirrorRegular: return "mirror-regular"
        case .mmsFilled: return "mms-filled"
        case .moderatorBold: return "moderator-bold"
        case .moderatorLight: return "moderator-light"
        case .moderatorRegular: return "moderator-regular"
        case .monitoringBold: return "monitoring-bold"
        case .monitoringLight: return "monitoring-light"
        case .monitoringRegular: return "monitoring-regular"
        case .monthlyRecurringScheduleNodeBold: return "monthly-recurring-schedule-node-bold"
        case .monthlyRecurringScheduleNodeLight: return "monthly-recurring-schedule-node-light"
        case .monthlyRecurringScheduleNodeRegular: return "monthly-recurring-schedule-node-regular"
        case .moreAdrBold: return "more-adr-bold"
        case .moreAdrLight: return "more-adr-light"
        case .moreAdrRegular: return "more-adr-regular"
        case .moreBold: return "more-bold"
        case .moreCircleBold: return "more-circle-bold"
        case .moreCircleFilled: return "more-circle-filled"
        case .moreCircleLight: return "more-circle-light"
        case .moreCircleRegular: return "more-circle-regular"
        case .moreLight: return "more-light"
        case .moreRegular: return "more-regular"
        case .mouseCursorBold: return "mouse-cursor-bold"
        case .mouseCursorLight: return "mouse-cursor-light"
        case .mouseCursorRegular: return "mouse-cursor-regular"
        case .moveCallInAdrBold: return "move-call-in-adr-bold"
        case .moveCallInAdrLight: return "move-call-in-adr-light"
        case .moveCallInAdrRegular: return "move-call-in-adr-regular"
        case .moveCallInIphBold: return "move-call-in-iph-bold"
        case .moveCallInIphLight: return "move-call-in-iph-light"
        case .moveCallInIphRegular: return "move-call-in-iph-regular"
        case .moveCallInLaptopBold: return "move-call-in-laptop-bold"
        case .moveCallInLaptopLight: return "move-call-in-laptop-light"
        case .moveCallInLaptopRegular: return "move-call-in-laptop-regular"
        case .moveCallInOutAdrBold: return "move-call-in-out-adr-bold"
        case .moveCallInOutAdrLight: return "move-call-in-out-adr-light"
        case .moveCallInOutAdrRegular: return "move-call-in-out-adr-regular"
        case .moveCallInOutIphBold: return "move-call-in-out-iph-bold"
        case .moveCallInOutIphLight: return "move-call-in-out-iph-light"
        case .moveCallInOutIphRegular: return "move-call-in-out-iph-regular"
        case .moveCallInTabletBold: return "move-call-in-tablet-bold"
        case .moveCallInTabletLight: return "move-call-in-tablet-light"
        case .moveCallInTabletRegular: return "move-call-in-tablet-regular"
        case .moveCallOutAdrBold: return "move-call-out-adr-bold"
        case .moveCallOutAdrLight: return "move-call-out-adr-light"
        case .moveCallOutAdrRegular: return "move-call-out-adr-regular"
        case .moveCallOutIphBold: return "move-call-out-iph-bold"
        case .moveCallOutIphLight: return "move-call-out-iph-light"
        case .moveCallOutIphRegular: return "move-call-out-iph-regular"
        case .moveCallOutLaptopBold: return "move-call-out-laptop-bold"
        case .moveCallOutLaptopLight: return "move-call-out-laptop-light"
        case .moveCallOutLaptopRegular: return "move-call-out-laptop-regular"
        case .moveCallOutTabletBold: return "move-call-out-tablet-bold"
        case .moveCallOutTabletLight: return "move-call-out-tablet-light"
        case .moveCallOutTabletRegular: return "move-call-out-tablet-regular"
        case .moveToScreenBold: return "move-to-screen-bold"
        case .moveToScreenLight: return "move-to-screen-light"
        case .moveToScreenRegular: return "move-to-screen-regular"
        case .multilineChartBold: return "multiline-chart-bold"
        case .multilineChartFilled: return "multiline-chart-filled"
        case .multilineChartLight: return "multiline-chart-light"
        case .multilineChartRegular: return "multiline-chart-regular"
        case .multimediaBold: return "multimedia-bold"
        case .multimediaFilled: return "multimedia-filled"
        case .multimediaLight: return "multimedia-light"
        case .multimediaRegular: return "multimedia-regular"
        case .multipledDevicesBold: return "multipled-devices-bold"
        case .multipledDevicesLight: return "multipled-devices-light"
        case .multipledDevicesRegular: return "multipled-devices-regular"
        case .musicModeCircleBold: return "music-mode-circle-bold"
        case .musicModeCircleFilled: return "music-mode-circle-filled"
        case .musicModeCircleLight: return "music-mode-circle-light"
        case .musicModeCircleRegular: return "music-mode-circle-regular"
        case .musicNoteBold: return "music-note-bold"
        case .musicNoteFilled: return "music-note-filled"
        case .musicNoteLight: return "music-note-light"
        case .musicNoteRegular: return "music-note-regular"
        case .muteOnEntryBold: return "mute-on-entry-bold"
        case .muteOnEntryFilled: return "mute-on-entry-filled"
        case .muteOnEntryLight: return "mute-on-entry-light"
        case .muteOnEntryRegular: return "mute-on-entry-regular"
        case .newManagerBold: return "new-manager-bold"
        case .newManagerLight: return "new-manager-light"
        case .newManagerRegular: return "new-manager-regular"
        case .newTitleBold: return "new-title-bold"
        case .newTitleLight: return "new-title-light"
        case .newTitleRegular: return "new-title-regular"
        case .newVoicemailBold: return "new-voicemail-bold"
        case .newVoicemailLight: return "new-voicemail-light"
        case .newVoicemailRegular: return "new-voicemail-regular"
        case .newWhiteboardBold: return "new-whiteboard-bold"
        case .newWhiteboardLight: return "new-whiteboard-light"
        case .newWhiteboardRegular: return "new-whiteboard-regular"
        case .nextBold: return "next-bold"
        case .nextLight: return "next-light"
        case .nextRegular: return "next-regular"
        case .noDevicesBold: return "no-devices-bold"
        case .noDevicesLight: return "no-devices-light"
        case .noDevicesRegular: return "no-devices-regular"
        case .noiseDetectedCanceledFilled: return "noise-detected-canceled-filled"
        case .noiseDetectedFilled: return "noise-detected-filled"
        case .noiseNoneCanceledFilled: return "noise-none-canceled-filled"
        case .noiseNoneFilled: return "noise-none-filled"
        case .noiseRemovalBold: return "noise-removal-bold"
        case .noiseRemovalLight: return "noise-removal-light"
        case .noiseRemovalRegular: return "noise-removal-regular"
        case .noteBold: return "note-bold"
        case .noteLight: return "note-light"
        case .notePptBold: return "note-ppt-bold"
        case .notePptLight: return "note-ppt-light"
        case .notePptRegular: return "note-ppt-regular"
        case .noteRegular: return "note-regular"
        case .notesBold: return "notes-bold"
        case .notesFilled: return "notes-filled"
        case .notesLight: return "notes-light"
        case .notesRegular: return "notes-regular"
        case .numberBold: return "number-bold"
        case .numberLight: return "number-light"
        case .numberRegular: return "number-regular"
        case .oldRemoteBold: return "old-remote-bold"
        case .oldRemoteLight: return "old-remote-light"
        case .oldRemoteRegular: return "old-remote-regular"
        case .oldTouchBold: return "old-touch-bold"
        case .oldTouchLight: return "old-touch-light"
        case .oldTouchRegular: return "old-touch-regular"
        case .oneColumnBold: return "one-column-bold"
        case .oneColumnLight: return "one-column-light"
        case .oneColumnRegular: return "one-column-regular"
        case .oneTimeBold: return "one-time-bold"
        case .oneTimeLight: return "one-time-light"
        case .oneTimeRegular: return "one-time-regular"
        case .openInFolderBold: return "open-in-folder-bold"
        case .openInFolderLight: return "open-in-folder-light"
        case .openInFolderRegular: return "open-in-folder-regular"
        case .openPagesBold: return "open-pages-bold"
        case .openPagesLight: return "open-pages-light"
        case .openPagesRegular: return "open-pages-regular"
        case .otherNumberBold: return "other-number-bold"
        case .otherNumberFilled: return "other-number-filled"
        case .otherNumberLight: return "other-number-light"
        case .otherNumberRegular: return "other-number-regular"
        case .otherNumberWarningBold: return "other-number-warning-bold"
        case .otherNumberWarningLight: return "other-number-warning-light"
        case .otherNumberWarningRegular: return "other-number-warning-regular"
        case .outgoingCallLegacyBold: return "outgoing-call-legacy-bold"
        case .outgoingCallLegacyFilled: return "outgoing-call-legacy-filled"
        case .outgoingCallLegacyLight: return "outgoing-call-legacy-light"
        case .outgoingCallLegacyRegular: return "outgoing-call-legacy-regular"
        case .overflowLeftBold: return "overflow-left-bold"
        case .overflowLeftLight: return "overflow-left-light"
        case .overflowLeftRegular: return "overflow-left-regular"
        case .overflowRightBold: return "overflow-right-bold"
        case .overflowRightLight: return "overflow-right-light"
        case .overflowRightRegular: return "overflow-right-regular"
        case .pairedCameraBold: return "paired-camera-bold"
        case .pairedCameraLight: return "paired-camera-light"
        case .pairedCameraRegular: return "paired-camera-regular"
        case .pairedDeviceBold: return "paired-device-bold"
        case .pairedDeviceLight: return "paired-device-light"
        case .pairedDeviceRegular: return "paired-device-regular"
        case .pairedHandsetBold: return "paired-handset-bold"
        case .pairedHandsetLight: return "paired-handset-light"
        case .pairedHandsetRegular: return "paired-handset-regular"
        case .pairingBold: return "pairing-bold"
        case .pairingLight: return "pairing-light"
        case .pairingRegular: return "pairing-regular"
        case .parkedBold: return "parked-bold"
        case .parkedFilled: return "parked-filled"
        case .parkedLight: return "parked-light"
        case .parkedRegular: return "parked-regular"
        case .parseBold: return "parse-bold"
        case .parseLight: return "parse-light"
        case .parseRegular: return "parse-regular"
        case .partialBold: return "partial-bold"
        case .partialLight: return "partial-light"
        case .partialRegular: return "partial-regular"
        case .participantAddBold: return "participant-add-bold"
        case .participantAddLight: return "participant-add-light"
        case .participantAddRegular: return "participant-add-regular"
        case .participantBlockedBold: return "participant-blocked-bold"
        case .participantBlockedLight: return "participant-blocked-light"
        case .participantBlockedRegular: return "participant-blocked-regular"
        case .participantBold: return "participant-bold"
        case .participantFilled: return "participant-filled"
        case .participantLight: return "participant-light"
        case .participantListBold: return "participant-list-bold"
        case .participantListFilled: return "participant-list-filled"
        case .participantListLight: return "participant-list-light"
        case .participantListRegular: return "participant-list-regular"
        case .participantRegular: return "participant-regular"
        case .participantRemoveBold: return "participant-remove-bold"
        case .participantRemoveLight: return "participant-remove-light"
        case .participantRemoveRegular: return "participant-remove-regular"
        case .participantUnknownBold: return "participant-unknown-bold"
        case .participantUnknownLight: return "participant-unknown-light"
        case .participantUnknownRegular: return "participant-unknown-regular"
        case .passMouseBold: return "pass-mouse-bold"
        case .passMouseLight: return "pass-mouse-light"
        case .passMouseRegular: return "pass-mouse-regular"
        case .pauseBadgeFilled: return "pause-badge-filled"
        case .pauseBold: return "pause-bold"
        case .pauseFilled: return "pause-filled"
        case .pauseLight: return "pause-light"
        case .pauseRegular: return "pause-regular"
        case .peopleAddBold: return "people-add-bold"
        case .peopleAddFilled: return "people-add-filled"
        case .peopleAddLight: return "people-add-light"
        case .peopleAddRegular: return "people-add-regular"
        case .peopleBold: return "people-bold"
        case .peopleCircleBold: return "people-circle-bold"
        case .peopleCircleFilled: return "people-circle-filled"
        case .peopleCircleLight: return "people-circle-light"
        case .peopleCircleRegular: return "people-circle-regular"
        case .peopleFilled: return "people-filled"
        case .peopleInsightsBold: return "people-insights-bold"
        case .peopleInsightsFilled: return "people-insights-filled"
        case .peopleInsightsLight: return "people-insights-light"
        case .peopleInsightsRegular: return "people-insights-regular"
        case .peopleLight: return "people-light"
        case .peopleRegular: return "people-regular"
        case .phoneAlertBold: return "phone-alert-bold"
        case .phoneAlertLight: return "phone-alert-light"
        case .phoneAlertRegular: return "phone-alert-regular"
        case .phoneBadgeFilled: return "phone-badge-filled"
        case .phoneBold: return "phone-bold"
        case .phoneFilled: return "phone-filled"
        case .phoneLight: return "phone-light"
        case .phoneMutedBold: return "phone-muted-bold"
        case .phoneMutedLight: return "phone-muted-light"
        case .phoneMutedRegular: return "phone-muted-regular"
        case .phonePrivateBold: return "phone-private-bold"
        case .phonePrivateLight: return "phone-private-light"
        case .phonePrivateRegular: return "phone-private-regular"
        case .phoneRegular: return "phone-regular"
        case .phoneReplyAllBold: return "phone-reply-all-bold"
        case .phoneReplyAllLight: return "phone-reply-all-light"
        case .phoneReplyAllRegular: return "phone-reply-all-regular"
        case .phoneReplyBold: return "phone-reply-bold"
        case .phoneReplyLight: return "phone-reply-light"
        case .phoneReplyRegular: return "phone-reply-regular"
        case .pickerBold: return "picker-bold"
        case .pickerLight: return "picker-light"
        case .pickerRegular: return "picker-regular"
        case .pieChartBold: return "pie-chart-bold"
        case .pieChartFilled: return "pie-chart-filled"
        case .pieChartLight: return "pie-chart-light"
        case .pieChartRegular: return "pie-chart-regular"
        case .pinBold: return "pin-bold"
        case .pinFilled: return "pin-filled"
        case .pinLight: return "pin-light"
        case .pinListActivityBold: return "pin-list-activity-bold"
        case .pinListActivityLight: return "pin-list-activity-light"
        case .pinListActivityRegular: return "pin-list-activity-regular"
        case .pinListBold: return "pin-list-bold"
        case .pinListLight: return "pin-list-light"
        case .pinListRegular: return "pin-list-regular"
        case .pinMutedBold: return "pin-muted-bold"
        case .pinMutedFilled: return "pin-muted-filled"
        case .pinMutedLight: return "pin-muted-light"
        case .pinMutedRegular: return "pin-muted-regular"
        case .pinRegular: return "pin-regular"
        case .pipBold: return "pip-bold"
        case .pipEnterBold: return "pip-enter-bold"
        case .pipEnterLight: return "pip-enter-light"
        case .pipEnterRegular: return "pip-enter-regular"
        case .pipExitBold: return "pip-exit-bold"
        case .pipExitLight: return "pip-exit-light"
        case .pipExitRegular: return "pip-exit-regular"
        case .pipFilled: return "pip-filled"
        case .pipLight: return "pip-light"
        case .pipRegular: return "pip-regular"
        case .placeholderBold: return "placeholder-bold"
        case .placeholderFilled: return "placeholder-filled"
        case .placeholderLight: return "placeholder-light"
        case .placeholderRegular: return "placeholder-regular"
        case .playBold: return "play-bold"
        case .playCircleBold: return "play-circle-bold"
        case .playCircleFilled: return "play-circle-filled"
        case .playCircleLight: return "play-circle-light"
        case .playCircleRegular: return "play-circle-regular"
        case .playFilled: return "play-filled"
        case .playLight: return "play-light"
        case .playRegular: return "play-regular"
        case .plugAcBold: return "plug-ac-bold"
        case .plugAcLight: return "plug-ac-light"
        case .plugAcRegular: return "plug-ac-regular"
        case .plusBold: return "plus-bold"
        case .plusCircleBold: return "plus-circle-bold"
        case .plusCircleFilled: return "plus-circle-filled"
        case .plusCircleLight: return "plus-circle-light"
        case .plusCircleRegular: return "plus-circle-regular"
        case .plusLight: return "plus-light"
        case .plusRegular: return "plus-regular"
        case .pmrBold: return "pmr-bold"
        case .pmrFilled: return "pmr-filled"
        case .pmrLight: return "pmr-light"
        case .pmrRegular: return "pmr-regular"
        case .pollBold: return "poll-bold"
        case .pollFilled: return "poll-filled"
        case .pollLight: return "poll-light"
        case .pollRegular: return "poll-regular"
        case .popInBold: return "pop-in-bold"
        case .popInLight: return "pop-in-light"
        case .popInRegular: return "pop-in-regular"
        case .popOutBold: return "pop-out-bold"
        case .popOutLight: return "pop-out-light"
        case .popOutRegular: return "pop-out-regular"
        case .popUpBold: return "pop-up-bold"
        case .popUpLight: return "pop-up-light"
        case .popUpRegular: return "pop-up-regular"
        case .portraitLandscapeBold: return "portrait-landscape-bold"
        case .portraitLandscapeLight: return "portrait-landscape-light"
        case .portraitLandscapeRegular: return "portrait-landscape-regular"
        case .potentialFraudBold: return "potential-fraud-bold"
        case .potentialFraudFilled: return "potential-fraud-filled"
        case .potentialFraudLight: return "potential-fraud-light"
        case .potentialFraudRegular: return "potential-fraud-regular"
        case .powerAcBold: return "power-ac-bold"
        case .powerAcLight: return "power-ac-light"
        case .powerAcRegular: return "power-ac-regular"
        case .powerBold: return "power-bold"
        case .powerLight: return "power-light"
        case .powerRegular: return "power-regular"
        case .preHeaderBold: return "pre-header-bold"
        case .preHeaderLight: return "pre-header-light"
        case .preHeaderRegular: return "pre-header-regular"
        case .premiumBold: return "premium-bold"
        case .premiumLight: return "premium-light"
        case .premiumRegular: return "premium-regular"
        case .presentationBold: return "presentation-bold"
        case .presentationLight: return "presentation-light"
        case .presentationRegular: return "presentation-regular"
        case .preventDownloadBold: return "prevent-download-bold"
        case .preventDownloadFilled: return "prevent-download-filled"
        case .preventDownloadLight: return "prevent-download-light"
        case .preventDownloadRegular: return "prevent-download-regular"
        case .primaryParticipantBold: return "primary-participant-bold"
        case .primaryParticipantLight: return "primary-participant-light"
        case .primaryParticipantRegular: return "primary-participant-regular"
        case .printBold: return "print-bold"
        case .printLight: return "print-light"
        case .printRegular: return "print-regular"
        case .priorityBadgeFilled: return "priority-badge-filled"
        case .priorityCircleBold: return "priority-circle-bold"
        case .priorityCircleFilled: return "priority-circle-filled"
        case .priorityCircleLight: return "priority-circle-light"
        case .priorityCircleRegular: return "priority-circle-regular"
        case .priorityCircleTwoBold: return "priority-circle-two-bold"
        case .priorityCircleTwoFilled: return "priority-circle-two-filled"
        case .priorityCircleTwoLight: return "priority-circle-two-light"
        case .priorityCircleTwoRegular: return "priority-circle-two-regular"
        case .priorityWaveBold: return "priority-wave-bold"
        case .priorityWaveLight: return "priority-wave-light"
        case .priorityWaveRegular: return "priority-wave-regular"
        case .privacyCircleBold: return "privacy-circle-bold"
        case .privacyCircleFilled: return "privacy-circle-filled"
        case .privacyCircleLight: return "privacy-circle-light"
        case .privacyCircleRegular: return "privacy-circle-regular"
        case .privateBold: return "private-bold"
        case .privateCircleBold: return "private-circle-bold"
        case .privateCircleFilled: return "private-circle-filled"
        case .privateCircleLight: return "private-circle-light"
        case .privateCircleRegular: return "private-circle-regular"
        case .privateLight: return "private-light"
        case .privateMeetingBold: return "private-meeting-bold"
        case .privateMeetingLight: return "private-meeting-light"
        case .privateMeetingRegular: return "private-meeting-regular"
        case .privateRegular: return "private-regular"
        case .productDemoBold: return "product-demo-bold"
        case .productDemoLight: return "product-demo-light"
        case .productDemoRegular: return "product-demo-regular"
        case .proximityBold: return "proximity-bold"
        case .proximityLight: return "proximity-light"
        case .proximityMutedBold: return "proximity-muted-bold"
        case .proximityMutedLight: return "proximity-muted-light"
        case .proximityMutedRegular: return "proximity-muted-regular"
        case .proximityRegular: return "proximity-regular"
        case .proximityVideoBold: return "proximity-video-bold"
        case .proximityVideoLight: return "proximity-video-light"
        case .proximityVideoRegular: return "proximity-video-regular"
        case .ptoPresenceBold: return "pto-presence-bold"
        case .ptoPresenceFilled: return "pto-presence-filled"
        case .ptoPresenceLight: return "pto-presence-light"
        case .ptoPresenceRegular: return "pto-presence-regular"
        case .pullCallBold: return "pull-call-bold"
        case .pullCallFilled: return "pull-call-filled"
        case .pullCallLight: return "pull-call-light"
        case .pullCallRegular: return "pull-call-regular"
        case .qABold: return "q-a-bold"
        case .qALight: return "q-a-light"
        case .qARegular: return "q-a-regular"
        case .qrCodeBold: return "qr-code-bold"
        case .qrCodeLight: return "qr-code-light"
        case .qrCodeRegular: return "qr-code-regular"
        case .qrCodeScanBold: return "qr-code-scan-bold"
        case .qrCodeScanLight: return "qr-code-scan-light"
        case .qrCodeScanRegular: return "qr-code-scan-regular"
        case .qualityBold: return "quality-bold"
        case .qualityLight: return "quality-light"
        case .qualityRegular: return "quality-regular"
        case .queueContactBold: return "queue-contact-bold"
        case .queueContactFilled: return "queue-contact-filled"
        case .queueContactLight: return "queue-contact-light"
        case .queueContactRegular: return "queue-contact-regular"
        case .quietBold: return "quiet-bold"
        case .quietHoursPresenceBold: return "quiet-hours-presence-bold"
        case .quietHoursPresenceFilled: return "quiet-hours-presence-filled"
        case .quietHoursPresenceLight: return "quiet-hours-presence-light"
        case .quietHoursPresenceRegular: return "quiet-hours-presence-regular"
        case .quietLight: return "quiet-light"
        case .quietRegular: return "quiet-regular"
        case .radioButtonGroupBold: return "radio-button-group-bold"
        case .radioButtonGroupLight: return "radio-button-group-light"
        case .radioButtonGroupRegular: return "radio-button-group-regular"
        case .raiseHandBold: return "raise-hand-bold"
        case .raiseHandCircleFilled: return "raise-hand-circle-filled"
        case .raiseHandFilled: return "raise-hand-filled"
        case .raiseHandLight: return "raise-hand-light"
        case .raiseHandRegular: return "raise-hand-regular"
        case .ramBold: return "ram-bold"
        case .ramLight: return "ram-light"
        case .ramRegular: return "ram-regular"
        case .reactionsBold: return "reactions-bold"
        case .reactionsFilled: return "reactions-filled"
        case .reactionsLight: return "reactions-light"
        case .reactionsRegular: return "reactions-regular"
        case .reactivateBold: return "reactivate-bold"
        case .reactivateLight: return "reactivate-light"
        case .reactivateRegular: return "reactivate-regular"
        case .receiveVoiceBold: return "receive-voice-bold"
        case .receiveVoiceFilled: return "receive-voice-filled"
        case .receiveVoiceLight: return "receive-voice-light"
        case .receiveVoiceRegular: return "receive-voice-regular"
        case .recentsBold: return "recents-bold"
        case .recentsFilled: return "recents-filled"
        case .recentsLight: return "recents-light"
        case .recentsPresenceBadgeFilled: return "recents-presence-badge-filled"
        case .recentsPresenceBold: return "recents-presence-bold"
        case .recentsPresenceFilled: return "recents-presence-filled"
        case .recentsPresenceLight: return "recents-presence-light"
        case .recentsPresenceRegular: return "recents-presence-regular"
        case .recentsRegular: return "recents-regular"
        case .recordActiveBadgeFilled: return "record-active-badge-filled"
        case .recordActiveBold: return "record-active-bold"
        case .recordActiveFilled: return "record-active-filled"
        case .recordActiveLight: return "record-active-light"
        case .recordActiveRegular: return "record-active-regular"
        case .recordBold: return "record-bold"
        case .recordFilled: return "record-filled"
        case .recordLight: return "record-light"
        case .recordPausedBadgeFilled: return "record-paused-badge-filled"
        case .recordPausedBold: return "record-paused-bold"
        case .recordPausedFilled: return "record-paused-filled"
        case .recordPausedLight: return "record-paused-light"
        case .recordPausedRegular: return "record-paused-regular"
        case .recordRegular: return "record-regular"
        case .recurringBold: return "recurring-bold"
        case .recurringLight: return "recurring-light"
        case .recurringOffBold: return "recurring-off-bold"
        case .recurringOffLight: return "recurring-off-light"
        case .recurringOffRegular: return "recurring-off-regular"
        case .recurringRegular: return "recurring-regular"
        case .redoBold: return "redo-bold"
        case .redoLight: return "redo-light"
        case .redoRegular: return "redo-regular"
        case .refreshBold: return "refresh-bold"
        case .refreshLight: return "refresh-light"
        case .refreshRegular: return "refresh-regular"
        case .remoteDesktopControlBold: return "remote-desktop-control-bold"
        case .remoteDesktopControlFilled: return "remote-desktop-control-filled"
        case .remoteDesktopControlLight: return "remote-desktop-control-light"
        case .remoteDesktopControlRegular: return "remote-desktop-control-regular"
        case .removeBold: return "remove-bold"
        case .removeFilled: return "remove-filled"
        case .removeLight: return "remove-light"
        case .removeRegular: return "remove-regular"
        case .replyBold: return "reply-bold"
        case .replyFilled: return "reply-filled"
        case .replyLight: return "reply-light"
        case .replyListBold: return "reply-list-bold"
        case .replyListLight: return "reply-list-light"
        case .replyListRegular: return "reply-list-regular"
        case .replyPrivatelyBold: return "reply-privately-bold"
        case .replyPrivatelyLight: return "reply-privately-light"
        case .replyPrivatelyRegular: return "reply-privately-regular"
        case .replyRegular: return "reply-regular"
        case .resetBold: return "reset-bold"
        case .resetLight: return "reset-light"
        case .resetRegular: return "reset-regular"
        case .resizeCornerBold: return "resize-corner-bold"
        case .resizeCornerLight: return "resize-corner-light"
        case .resizeCornerRegular: return "resize-corner-regular"
        case .responsiveMobileBold: return "responsive-mobile-bold"
        case .responsiveMobileLight: return "responsive-mobile-light"
        case .responsiveMobileRegular: return "responsive-mobile-regular"
        case .restartBold: return "restart-bold"
        case .restartLight: return "restart-light"
        case .restartRegular: return "restart-regular"
        case .retrieveCallBold: return "retrieve-call-bold"
        case .retrieveCallFilled: return "retrieve-call-filled"
        case .retrieveCallLight: return "retrieve-call-light"
        case .retrieveCallRegular: return "retrieve-call-regular"
        case .returnBold: return "return-bold"
        case .returnLight: return "return-light"
        case .returnRegular: return "return-regular"
        case .rewindTenSecBold: return "rewind-ten-sec-bold"
        case .rewindTenSecLight: return "rewind-ten-sec-light"
        case .rewindTenSecRegular: return "rewind-ten-sec-regular"
        case .ringtoneBold: return "ringtone-bold"
        case .ringtoneLight: return "ringtone-light"
        case .ringtoneRegular: return "ringtone-regular"
        case .roomCalendarBold: return "room-calendar-bold"
        case .roomCalendarLight: return "room-calendar-light"
        case .roomCalendarRegular: return "room-calendar-regular"
        case .roomLightsBold: return "room-lights-bold"
        case .roomLightsFilled: return "room-lights-filled"
        case .roomLightsLight: return "room-lights-light"
        case .roomLightsRegular: return "room-lights-regular"
        case .rotateContentBold: return "rotate-content-bold"
        case .rotateContentFilled: return "rotate-content-filled"
        case .rotateContentLight: return "rotate-content-light"
        case .rotateContentRegular: return "rotate-content-regular"
        case .rssBold: return "rss-bold"
        case .rssFilled: return "rss-filled"
        case .rssLight: return "rss-light"
        case .rssRegular: return "rss-regular"
        case .ruleBasedBold: return "rule-based-bold"
        case .ruleBasedLight: return "rule-based-light"
        case .ruleBasedRegular: return "rule-based-regular"
        case .runningApplicationBold: return "running-application-bold"
        case .runningApplicationFilled: return "running-application-filled"
        case .runningApplicationLight: return "running-application-light"
        case .runningApplicationRegular: return "running-application-regular"
        case .saveBold: return "save-bold"
        case .saveLight: return "save-light"
        case .saveRegular: return "save-regular"
        case .saveTranscriptBold: return "save-transcript-bold"
        case .saveTranscriptFilled: return "save-transcript-filled"
        case .saveTranscriptLight: return "save-transcript-light"
        case .saveTranscriptRegular: return "save-transcript-regular"
        case .scanBold: return "scan-bold"
        case .scanLight: return "scan-light"
        case .scanRegular: return "scan-regular"
        case .scheduleSendBold: return "schedule-send-bold"
        case .scheduleSendFilled: return "schedule-send-filled"
        case .scheduleSendLight: return "schedule-send-light"
        case .scheduleSendRegular: return "schedule-send-regular"
        case .scheduleWinnerBold: return "schedule-winner-bold"
        case .scheduleWinnerFilled: return "schedule-winner-filled"
        case .scheduleWinnerLight: return "schedule-winner-light"
        case .scheduleWinnerRegular: return "schedule-winner-regular"
        case .schedulerAvailableBold: return "scheduler-available-bold"
        case .schedulerAvailableLight: return "scheduler-available-light"
        case .schedulerAvailableRegular: return "scheduler-available-regular"
        case .schedulerNotWorkingHoursBold: return "scheduler-not-working-hours-bold"
        case .schedulerNotWorkingHoursLight: return "scheduler-not-working-hours-light"
        case .schedulerNotWorkingHoursRegular: return "scheduler-not-working-hours-regular"
        case .schedulerUnavailableBold: return "scheduler-unavailable-bold"
        case .schedulerUnavailableLight: return "scheduler-unavailable-light"
        case .schedulerUnavailableRegular: return "scheduler-unavailable-regular"
        case .schedulerUnknownBold: return "scheduler-unknown-bold"
        case .schedulerUnknownLight: return "scheduler-unknown-light"
        case .schedulerUnknownRegular: return "scheduler-unknown-regular"
        case .screenshotBold: return "screenshot-bold"
        case .screenshotDocBold: return "screenshot-doc-bold"
        case .screenshotDocFilled: return "screenshot-doc-filled"
        case .screenshotDocLight: return "screenshot-doc-light"
        case .screenshotDocRegular: return "screenshot-doc-regular"
        case .screenshotLight: return "screenshot-light"
        case .screenshotRegular: return "screenshot-regular"
        case .searchBold: return "search-bold"
        case .searchFilled: return "search-filled"
        case .searchLight: return "search-light"
        case .searchRegular: return "search-regular"
        case .secondaryArrowBold: return "secondary-arrow-bold"
        case .secondaryArrowLight: return "secondary-arrow-light"
        case .secondaryArrowRegular: return "secondary-arrow-regular"
        case .secureCallLockBold: return "secure-call-lock-bold"
        case .secureCallLockFilled: return "secure-call-lock-filled"
        case .secureCallLockLight: return "secure-call-lock-light"
        case .secureCallLockRegular: return "secure-call-lock-regular"
        case .secureCallShieldBold: return "secure-call-shield-bold"
        case .secureCallShieldFilled: return "secure-call-shield-filled"
        case .secureCallShieldLight: return "secure-call-shield-light"
        case .secureCallShieldRegular: return "secure-call-shield-regular"
        case .secureCircleBold: return "secure-circle-bold"
        case .secureCircleFilled: return "secure-circle-filled"
        case .secureCircleLight: return "secure-circle-light"
        case .secureCircleRegular: return "secure-circle-regular"
        case .secureLockBold: return "secure-lock-bold"
        case .secureLockFilled: return "secure-lock-filled"
        case .secureLockLight: return "secure-lock-light"
        case .secureLockRegular: return "secure-lock-regular"
        case .segmentExcludeFilled: return "segment-exclude-filled"
        case .segmentFilterFilled: return "segment-filter-filled"
        case .segmentIncludeFilled: return "segment-include-filled"
        case .selectAllBold: return "select-all-bold"
        case .selectAllFilled: return "select-all-filled"
        case .selectAllLight: return "select-all-light"
        case .selectAllRegular: return "select-all-regular"
        case .selectionBold: return "selection-bold"
        case .selectionFilled: return "selection-filled"
        case .selectionLight: return "selection-light"
        case .selectionRegular: return "selection-regular"
        case .sendBold: return "send-bold"
        case .sendDigitsBold: return "send-digits-bold"
        case .sendDigitsFilled: return "send-digits-filled"
        case .sendDigitsLight: return "send-digits-light"
        case .sendDigitsRegular: return "send-digits-regular"
        case .sendFilled: return "send-filled"
        case .sendLight: return "send-light"
        case .sendRegular: return "send-regular"
        case .sendVoiceBold: return "send-voice-bold"
        case .sendVoiceFilled: return "send-voice-filled"
        case .sendVoiceLight: return "send-voice-light"
        case .sendVoiceRegular: return "send-voice-regular"
        case .serverBold: return "server-bold"
        case .serverErrorBold: return "server-error-bold"
        case .serverErrorLight: return "server-error-light"
        case .serverErrorRegular: return "server-error-regular"
        case .serverLight: return "server-light"
        case .serverRegular: return "server-regular"
        case .servicesBold: return "services-bold"
        case .servicesLight: return "services-light"
        case .servicesRegular: return "services-regular"
        case .setVariableBold: return "set-variable-bold"
        case .setVariableLight: return "set-variable-light"
        case .setVariableRegular: return "set-variable-regular"
        case .settingsBold: return "settings-bold"
        case .settingsFilled: return "settings-filled"
        case .settingsLight: return "settings-light"
        case .settingsRegular: return "settings-regular"
        case .setupAssistantBold: return "setup-assistant-bold"
        case .setupAssistantLight: return "setup-assistant-light"
        case .setupAssistantRegular: return "setup-assistant-regular"
        case .sftpBold: return "sftp-bold"
        case .sftpLight: return "sftp-light"
        case .sftpRegular: return "sftp-regular"
        case .shapeCircleBold: return "shape-circle-bold"
        case .shapeCircleFilled: return "shape-circle-filled"
        case .shapeCircleLight: return "shape-circle-light"
        case .shapeCircleMdFilled: return "shape-circle-md-filled"
        case .shapeCircleRegular: return "shape-circle-regular"
        case .shapeCircleSmFilled: return "shape-circle-sm-filled"
        case .shapeDiagonalLineBold: return "shape-diagonal-line-bold"
        case .shapeDiagonalLineLight: return "shape-diagonal-line-light"
        case .shapeDiagonalLineRegular: return "shape-diagonal-line-regular"
        case .shapeDiamondBold: return "shape-diamond-bold"
        case .shapeDiamondFilled: return "shape-diamond-filled"
        case .shapeDiamondLight: return "shape-diamond-light"
        case .shapeDiamondRegular: return "shape-diamond-regular"
        case .shapeOvalBold: return "shape-oval-bold"
        case .shapeOvalLight: return "shape-oval-light"
        case .shapeOvalRegular: return "shape-oval-regular"
        case .shapeSquareBold: return "shape-square-bold"
        case .shapeSquareFilled: return "shape-square-filled"
        case .shapeSquareLight: return "shape-square-light"
        case .shapeSquareRegular: return "shape-square-regular"
        case .shapeTriangleBold: return "shape-triangle-bold"
        case .shapeTriangleFilled: return "shape-triangle-filled"
        case .shapeTriangleLight: return "shape-triangle-light"
        case .shapeTriangleRegular: return "shape-triangle-regular"
        case .shapesBold: return "shapes-bold"
        case .shapesFilled: return "shapes-filled"
        case .shapesLight: return "shapes-light"
        case .shapesRegular: return "shapes-regular"
        case .shareCNativeAdrBold: return "share-c-native-adr-bold"
        case .shareCNativeAdrFilled: return "share-c-native-adr-filled"
        case .shareCNativeAdrLight: return "share-c-native-adr-light"
        case .shareCNativeAdrRegular: return "share-c-native-adr-regular"
        case .shareCNativeIphBold: return "share-c-native-iph-bold"
        case .shareCNativeIphLight: return "share-c-native-iph-light"
        case .shareCNativeIphRegular: return "share-c-native-iph-regular"
        case .shareContentOnDeviceBold: return "share-content-on-device-bold"
        case .shareContentOnDeviceLight: return "share-content-on-device-light"
        case .shareContentOnDeviceRegular: return "share-content-on-device-regular"
        case .shareScreenAddBold: return "share-screen-add-bold"
        case .shareScreenAddLight: return "share-screen-add-light"
        case .shareScreenAddRegular: return "share-screen-add-regular"
        case .shareScreenBadgeFilled: return "share-screen-badge-filled"
        case .shareScreenBold: return "share-screen-bold"
        case .shareScreenFilled: return "share-screen-filled"
        case .shareScreenLight: return "share-screen-light"
        case .shareScreenRegular: return "share-screen-regular"
        case .shareSpaceBold: return "share-space-bold"
        case .shareSpaceLight: return "share-space-light"
        case .shareSpaceRegular: return "share-space-regular"
        case .shieldBold: return "shield-bold"
        case .shieldLight: return "shield-light"
        case .shieldRegular: return "shield-regular"
        case .shoppingCartBold: return "shopping-cart-bold"
        case .shoppingCartFilled: return "shopping-cart-filled"
        case .shoppingCartLight: return "shopping-cart-light"
        case .shoppingCartRegular: return "shopping-cart-regular"
        case .shortTextBoxBold: return "short-text-box-bold"
        case .shortTextBoxLight: return "short-text-box-light"
        case .shortTextBoxRegular: return "short-text-box-regular"
        case .showBold: return "show-bold"
        case .showFilled: return "show-filled"
        case .showLight: return "show-light"
        case .showRegular: return "show-regular"
        case .signInBold: return "sign-in-bold"
        case .signInFilled: return "sign-in-filled"
        case .signInForcedBold: return "sign-in-forced-bold"
        case .signInForcedLight: return "sign-in-forced-light"
        case .signInForcedRegular: return "sign-in-forced-regular"
        case .signInLight: return "sign-in-light"
        case .signInRegular: return "sign-in-regular"
        case .signLangIntBold: return "sign-lang-int-bold"
        case .signLangIntLight: return "sign-lang-int-light"
        case .signLangIntRegular: return "sign-lang-int-regular"
        case .signOutBold: return "sign-out-bold"
        case .signOutLight: return "sign-out-light"
        case .signOutRegular: return "sign-out-regular"
        case .signalFourBold: return "signal-four-bold"
        case .signalFourLight: return "signal-four-light"
        case .signalFourRegular: return "signal-four-regular"
        case .signalOneBold: return "signal-one-bold"
        case .signalOneLight: return "signal-one-light"
        case .signalOneRegular: return "signal-one-regular"
        case .signalThreeBold: return "signal-three-bold"
        case .signalThreeLight: return "signal-three-light"
        case .signalThreeRegular: return "signal-three-regular"
        case .signalTwoBold: return "signal-two-bold"
        case .signalTwoLight: return "signal-two-light"
        case .signalTwoRegular: return "signal-two-regular"
        case .signalZeroBold: return "signal-zero-bold"
        case .signalZeroLight: return "signal-zero-light"
        case .signalZeroRegular: return "signal-zero-regular"
        case .simplePromotionBold: return "simple-promotion-bold"
        case .simplePromotionLight: return "simple-promotion-light"
        case .simplePromotionRegular: return "simple-promotion-regular"
        case .singleNumberReachBold: return "single-number-reach-bold"
        case .singleNumberReachLight: return "single-number-reach-light"
        case .singleNumberReachRegular: return "single-number-reach-regular"
        case .sipRegistrationInProgressBold: return "sip-registration-in-progress-bold"
        case .sipRegistrationInProgressFilled: return "sip-registration-in-progress-filled"
        case .sipRegistrationInProgressLight: return "sip-registration-in-progress-light"
        case .sipRegistrationInProgressRegular: return "sip-registration-in-progress-regular"
        case .skipBold: return "skip-bold"
        case .skipBwBold: return "skip-bw-bold"
        case .skipBwFilled: return "skip-bw-filled"
        case .skipBwLight: return "skip-bw-light"
        case .skipBwRegular: return "skip-bw-regular"
        case .skipFwBold: return "skip-fw-bold"
        case .skipFwFilled: return "skip-fw-filled"
        case .skipFwLight: return "skip-fw-light"
        case .skipFwRegular: return "skip-fw-regular"
        case .skipLight: return "skip-light"
        case .skipRegular: return "skip-regular"
        case .smartAudioBold: return "smart-audio-bold"
        case .smartAudioLight: return "smart-audio-light"
        case .smartAudioRegular: return "smart-audio-regular"
        case .smsFilled: return "sms-filled"
        case .smsInboundBold: return "sms-inbound-bold"
        case .smsInboundLight: return "sms-inbound-light"
        case .smsInboundRegular: return "sms-inbound-regular"
        case .smsMessageBold: return "sms-message-bold"
        case .smsMessageFilled: return "sms-message-filled"
        case .smsMessageLight: return "sms-message-light"
        case .smsMessageRegular: return "sms-message-regular"
        case .smsOutgoingFilled: return "sms-outgoing-filled"
        case .smsUnreadBold: return "sms-unread-bold"
        case .smsUnreadLight: return "sms-unread-light"
        case .smsUnreadRegular: return "sms-unread-regular"
        case .sortAscendingBold: return "sort-ascending-bold"
        case .sortAscendingLight: return "sort-ascending-light"
        case .sortAscendingRegular: return "sort-ascending-regular"
        case .sortDescendingBold: return "sort-descending-bold"
        case .sortDescendingLight: return "sort-descending-light"
        case .sortDescendingRegular: return "sort-descending-regular"
        case .soundDefaultBold: return "sound-default-bold"
        case .soundDefaultLight: return "sound-default-light"
        case .soundDefaultRegular: return "sound-default-regular"
        case .sparkleBold: return "sparkle-bold"
        case .sparkleFilled: return "sparkle-filled"
        case .sparkleLight: return "sparkle-light"
        case .sparkleRegular: return "sparkle-regular"
        case .speakerBold: return "speaker-bold"
        case .speakerDisconnectedBold: return "speaker-disconnected-bold"
        case .speakerDisconnectedFilled: return "speaker-disconnected-filled"
        case .speakerDisconnectedLight: return "speaker-disconnected-light"
        case .speakerDisconnectedRegular: return "speaker-disconnected-regular"
        case .speakerFilled: return "speaker-filled"
        case .speakerLight: return "speaker-light"
        case .speakerMutedBold: return "speaker-muted-bold"
        case .speakerMutedFilled: return "speaker-muted-filled"
        case .speakerMutedLight: return "speaker-muted-light"
        case .speakerMutedRegular: return "speaker-muted-regular"
        case .speakerOffBold: return "speaker-off-bold"
        case .speakerOffFilled: return "speaker-off-filled"
        case .speakerOffLight: return "speaker-off-light"
        case .speakerOffRegular: return "speaker-off-regular"
        case .speakerOnBold: return "speaker-on-bold"
        case .speakerOnLight: return "speaker-on-light"
        case .speakerOnRegular: return "speaker-on-regular"
        case .speakerRegular: return "speaker-regular"
        case .speakerTurnDownBold: return "speaker-turn-down-bold"
        case .speakerTurnDownFilled: return "speaker-turn-down-filled"
        case .speakerTurnDownLight: return "speaker-turn-down-light"
        case .speakerTurnDownRegular: return "speaker-turn-down-regular"
        case .speakerTurnUpBold: return "speaker-turn-up-bold"
        case .speakerTurnUpFilled: return "speaker-turn-up-filled"
        case .speakerTurnUpLight: return "speaker-turn-up-light"
        case .speakerTurnUpRegular: return "speaker-turn-up-regular"
        case .speedDialBold: return "speed-dial-bold"
        case .speedDialFilled: return "speed-dial-filled"
        case .speedDialLight: return "speed-dial-light"
        case .speedDialRegular: return "speed-dial-regular"
        case .spellCheckerBold: return "spell-checker-bold"
        case .spellCheckerLight: return "spell-checker-light"
        case .spellCheckerRegular: return "spell-checker-regular"
        case .splitViewBold: return "split-view-bold"
        case .splitViewLight: return "split-view-light"
        case .splitViewRegular: return "split-view-regular"
        case .stackedAreaChartBold: return "stacked-area-chart-bold"
        case .stackedAreaChartFilled: return "stacked-area-chart-filled"
        case .stackedAreaChartFullBold: return "stacked-area-chart-full-bold"
        case .stackedAreaChartFullFilled: return "stacked-area-chart-full-filled"
        case .stackedAreaChartFullLight: return "stacked-area-chart-full-light"
        case .stackedAreaChartFullRegular: return "stacked-area-chart-full-regular"
        case .stackedAreaChartLight: return "stacked-area-chart-light"
        case .stackedAreaChartRegular: return "stacked-area-chart-regular"
        case .stackedBarChartBold: return "stacked-bar-chart-bold"
        case .stackedBarChartFilled: return "stacked-bar-chart-filled"
        case .stackedBarChartFullBold: return "stacked-bar-chart-full-bold"
        case .stackedBarChartFullFilled: return "stacked-bar-chart-full-filled"
        case .stackedBarChartFullLight: return "stacked-bar-chart-full-light"
        case .stackedBarChartFullRegular: return "stacked-bar-chart-full-regular"
        case .stackedBarChartLight: return "stacked-bar-chart-light"
        case .stackedBarChartRegular: return "stacked-bar-chart-regular"
        case .startChatBold: return "start-chat-bold"
        case .startChatLight: return "start-chat-light"
        case .startChatRegular: return "start-chat-regular"
        case .stethoscopeBold: return "stethoscope-bold"
        case .stethoscopeLight: return "stethoscope-light"
        case .stethoscopeRegular: return "stethoscope-regular"
        case .stickersBold: return "stickers-bold"
        case .stickersLight: return "stickers-light"
        case .stickersRegular: return "stickers-regular"
        case .stickiesBold: return "stickies-bold"
        case .stickiesLight: return "stickies-light"
        case .stickiesRegular: return "stickies-regular"
        case .stopBold: return "stop-bold"
        case .stopCircleBold: return "stop-circle-bold"
        case .stopCircleFilled: return "stop-circle-filled"
        case .stopCircleLight: return "stop-circle-light"
        case .stopCircleRegular: return "stop-circle-regular"
        case .stopContentShareBold: return "stop-content-share-bold"
        case .stopContentShareLight: return "stop-content-share-light"
        case .stopContentShareRegular: return "stop-content-share-regular"
        case .stopFilled: return "stop-filled"
        case .stopLight: return "stop-light"
        case .stopRegular: return "stop-regular"
        case .storedInfoBold: return "stored-info-bold"
        case .storedInfoFilled: return "stored-info-filled"
        case .storedInfoLight: return "stored-info-light"
        case .storedInfoRegular: return "stored-info-regular"
        case .streamingBold: return "streaming-bold"
        case .streamingLight: return "streaming-light"
        case .streamingRegular: return "streaming-regular"
        case .strikethroughBold: return "strikethrough-bold"
        case .strikethroughFilled: return "strikethrough-filled"
        case .strikethroughLight: return "strikethrough-light"
        case .strikethroughRegular: return "strikethrough-regular"
        case .studioModeBold: return "studio-mode-bold"
        case .studioModeLight: return "studio-mode-light"
        case .studioModeRegular: return "studio-mode-regular"
        case .subscriptBold: return "subscript-bold"
        case .subscriptLight: return "subscript-light"
        case .subscriptRegular: return "subscript-regular"
        case .superscriptBold: return "superscript-bold"
        case .superscriptLight: return "superscript-light"
        case .superscriptRegular: return "superscript-regular"
        case .surveyBold: return "survey-bold"
        case .surveyFilled: return "survey-filled"
        case .surveyLight: return "survey-light"
        case .surveyRegular: return "survey-regular"
        case .sxEightyCodecBold: return "sx-eighty-codec-bold"
        case .sxEightyCodecLight: return "sx-eighty-codec-light"
        case .sxEightyCodecRegular: return "sx-eighty-codec-regular"
        case .sxTenBold: return "sx-ten-bold"
        case .sxTenLight: return "sx-ten-light"
        case .sxTenRegular: return "sx-ten-regular"
        case .sxTwentyBold: return "sx-twenty-bold"
        case .sxTwentyLight: return "sx-twenty-light"
        case .sxTwentyRegular: return "sx-twenty-regular"
        case .tableBold: return "table-bold"
        case .tableLight: return "table-light"
        case .tableRegular: return "table-regular"
        case .tabletBold: return "tablet-bold"
        case .tabletLight: return "tablet-light"
        case .tabletRegular: return "tablet-regular"
        case .tabsBold: return "tabs-bold"
        case .tabsLight: return "tabs-light"
        case .tabsRegular: return "tabs-regular"
        case .tagBold: return "tag-bold"
        case .tagLight: return "tag-light"
        case .tagRegular: return "tag-regular"
        case .tapBold: return "tap-bold"
        case .tapFilled: return "tap-filled"
        case .tapLight: return "tap-light"
        case .tapRegular: return "tap-regular"
        case .telepresenceAlertBold: return "telepresence-alert-bold"
        case .telepresenceAlertLight: return "telepresence-alert-light"
        case .telepresenceAlertMutedBold: return "telepresence-alert-muted-bold"
        case .telepresenceAlertMutedLight: return "telepresence-alert-muted-light"
        case .telepresenceAlertMutedRegular: return "telepresence-alert-muted-regular"
        case .telepresenceAlertRegular: return "telepresence-alert-regular"
        case .telepresenceBold: return "telepresence-bold"
        case .telepresenceIxFiveThousandBold: return "telepresence-ix-five-thousand-bold"
        case .telepresenceIxFiveThousandLight: return "telepresence-ix-five-thousand-light"
        case .telepresenceIxFiveThousandRegular: return "telepresence-ix-five-thousand-regular"
        case .telepresenceLight: return "telepresence-light"
        case .telepresenceMutedBold: return "telepresence-muted-bold"
        case .telepresenceMutedLight: return "telepresence-muted-light"
        case .telepresenceMutedRegular: return "telepresence-muted-regular"
        case .telepresencePrivateBold: return "telepresence-private-bold"
        case .telepresencePrivateLight: return "telepresence-private-light"
        case .telepresencePrivateRegular: return "telepresence-private-regular"
        case .telepresenceRegular: return "telepresence-regular"
        case .temperatureBold: return "temperature-bold"
        case .temperatureLight: return "temperature-light"
        case .temperatureRegular: return "temperature-regular"
        case .testTubeBold: return "test-tube-bold"
        case .testTubeFilled: return "test-tube-filled"
        case .testTubeLight: return "test-tube-light"
        case .testTubeRegular: return "test-tube-regular"
        case .textAlignCenterBold: return "text-align-center-bold"
        case .textAlignCenterFilled: return "text-align-center-filled"
        case .textAlignCenterLight: return "text-align-center-light"
        case .textAlignCenterRegular: return "text-align-center-regular"
        case .textAlignLeftBold: return "text-align-left-bold"
        case .textAlignLeftFilled: return "text-align-left-filled"
        case .textAlignLeftLight: return "text-align-left-light"
        case .textAlignLeftRegular: return "text-align-left-regular"
        case .textAlignRightBold: return "text-align-right-bold"
        case .textAlignRightFilled: return "text-align-right-filled"
        case .textAlignRightLight: return "text-align-right-light"
        case .textAlignRightRegular: return "text-align-right-regular"
        case .textBold: return "text-bold"
        case .textBoxCursorLight: return "text-box-cursor-light"
        case .textCodeBlockBold: return "text-code-block-bold"
        case .textCodeBlockLight: return "text-code-block-light"
        case .textCodeBlockRegular: return "text-code-block-regular"
        case .textHighlightBold: return "text-highlight-bold"
        case .textHighlightFilled: return "text-highlight-filled"
        case .textHighlightLight: return "text-highlight-light"
        case .textHighlightRegular: return "text-highlight-regular"
        case .textLight: return "text-light"
        case .textRegular: return "text-regular"
        case .threeColumnBold: return "three-column-bold"
        case .threeColumnLight: return "three-column-light"
        case .threeColumnRegular: return "three-column-regular"
        case .threeDObjectBold: return "three-d-object-bold"
        case .threeDObjectLight: return "three-d-object-light"
        case .threeDObjectRegular: return "three-d-object-regular"
        case .timeExclusionBold: return "time-exclusion-bold"
        case .timeExclusionLight: return "time-exclusion-light"
        case .timeExclusionRegular: return "time-exclusion-regular"
        case .tooFastBold: return "too-fast-bold"
        case .tooFastLight: return "too-fast-light"
        case .tooFastRegular: return "too-fast-regular"
        case .tooSlowBold: return "too-slow-bold"
        case .tooSlowLight: return "too-slow-light"
        case .tooSlowRegular: return "too-slow-regular"
        case .toolsBold: return "tools-bold"
        case .toolsFilled: return "tools-filled"
        case .toolsLight: return "tools-light"
        case .toolsRegular: return "tools-regular"
        case .touchTenBold: return "touch-ten-bold"
        case .touchTenLight: return "touch-ten-light"
        case .touchTenRegular: return "touch-ten-regular"
        case .transcriptBold: return "transcript-bold"
        case .transcriptFilled: return "transcript-filled"
        case .transcriptLight: return "transcript-light"
        case .transcriptRegular: return "transcript-regular"
        case .translateBold: return "translate-bold"
        case .translateLight: return "translate-light"
        case .translateRegular: return "translate-regular"
        case .translateUndoBold: return "translate-undo-bold"
        case .translateUndoLight: return "translate-undo-light"
        case .translateUndoRegular: return "translate-undo-regular"
        case .trendingBold: return "trending-bold"
        case .trendingDownBold: return "trending-down-bold"
        case .trendingDownFilled: return "trending-down-filled"
        case .trendingDownLight: return "trending-down-light"
        case .trendingDownRegular: return "trending-down-regular"
        case .trendingFilled: return "trending-filled"
        case .trendingLight: return "trending-light"
        case .trendingRegular: return "trending-regular"
        case .trimBold: return "trim-bold"
        case .trimLight: return "trim-light"
        case .trimRegular: return "trim-regular"
        case .twoColumnBold: return "two-column-bold"
        case .twoColumnLight: return "two-column-light"
        case .twoColumnRegular: return "two-column-regular"
        case .twoWayVoiceStreamBold: return "two-way-voice-stream-bold"
        case .twoWayVoiceStreamFilled: return "two-way-voice-stream-filled"
        case .twoWayVoiceStreamLight: return "two-way-voice-stream-light"
        case .twoWayVoiceStreamRegular: return "two-way-voice-stream-regular"
        case .ucmCloudBold: return "ucm-cloud-bold"
        case .ucmCloudLight: return "ucm-cloud-light"
        case .ucmCloudRegular: return "ucm-cloud-regular"
        case .unblockBold: return "unblock-bold"
        case .unblockFilled: return "unblock-filled"
        case .unblockLight: return "unblock-light"
        case .unblockRegular: return "unblock-regular"
        case .underlineBold: return "underline-bold"
        case .underlineFilled: return "underline-filled"
        case .underlineLight: return "underline-light"
        case .underlineRegular: return "underline-regular"
        case .undoBold: return "undo-bold"
        case .undoLight: return "undo-light"
        case .undoRegular: return "undo-regular"
        case .unlinkBold: return "unlink-bold"
        case .unlinkLight: return "unlink-light"
        case .unlinkRegular: return "unlink-regular"
        case .unreadBold: return "unread-bold"
        case .unreadFilled: return "unread-filled"
        case .unreadLight: return "unread-light"
        case .unreadRegular: return "unread-regular"
        case .unsecureUnlockedBold: return "unsecure-unlocked-bold"
        case .unsecureUnlockedFilled: return "unsecure-unlocked-filled"
        case .unsecureUnlockedLight: return "unsecure-unlocked-light"
        case .unsecureUnlockedRegular: return "unsecure-unlocked-regular"
        case .unsortedBold: return "unsorted-bold"
        case .unsortedLight: return "unsorted-light"
        case .unsortedRegular: return "unsorted-regular"
        case .updateFileShareBold: return "update-file-share-bold"
        case .updateFileShareLight: return "update-file-share-light"
        case .updateFileShareRegular: return "update-file-share-regular"
        case .uploadBold: return "upload-bold"
        case .uploadImageBold: return "upload-image-bold"
        case .uploadImageLight: return "upload-image-light"
        case .uploadImageRegular: return "upload-image-regular"
        case .uploadLight: return "upload-light"
        case .uploadRegular: return "upload-regular"
        case .urgentVoicemailBold: return "urgent-voicemail-bold"
        case .urgentVoicemailFilled: return "urgent-voicemail-filled"
        case .usbBold: return "usb-bold"
        case .usbHeadsetBold: return "usb-headset-bold"
        case .usbHeadsetLight: return "usb-headset-light"
        case .usbHeadsetMutedBold: return "usb-headset-muted-bold"
        case .usbHeadsetMutedLight: return "usb-headset-muted-light"
        case .usbHeadsetMutedRegular: return "usb-headset-muted-regular"
        case .usbHeadsetRegular: return "usb-headset-regular"
        case .usbLight: return "usb-light"
        case .usbRegular: return "usb-regular"
        case .userBold: return "user-bold"
        case .userDeactivateBold: return "user-deactivate-bold"
        case .userDeactivateLight: return "user-deactivate-light"
        case .userDeactivateRegular: return "user-deactivate-regular"
        case .userLight: return "user-light"
        case .userRegular: return "user-regular"
        case .videoBlurBold: return "video-blur-bold"
        case .videoBlurFilled: return "video-blur-filled"
        case .videoBlurLight: return "video-blur-light"
        case .videoBlurRegular: return "video-blur-regular"
        case .videoBold: return "video-bold"
        case .videoEffectBold: return "video-effect-bold"
        case .videoEffectFilled: return "video-effect-filled"
        case .videoEffectLight: return "video-effect-light"
        case .videoEffectRegular: return "video-effect-regular"
        case .videoFilled: return "video-filled"
        case .videoLayoutBold: return "video-layout-bold"
        case .videoLayoutEqualBold: return "video-layout-equal-bold"
        case .videoLayoutEqualDualBold: return "video-layout-equal-dual-bold"
        case .videoLayoutEqualDualLight: return "video-layout-equal-dual-light"
        case .videoLayoutEqualDualRegular: return "video-layout-equal-dual-regular"
        case .videoLayoutEqualFilled: return "video-layout-equal-filled"
        case .videoLayoutEqualLight: return "video-layout-equal-light"
        case .videoLayoutEqualRegular: return "video-layout-equal-regular"
        case .videoLayoutFilled: return "video-layout-filled"
        case .videoLayoutLight: return "video-layout-light"
        case .videoLayoutOverlayBold: return "video-layout-overlay-bold"
        case .videoLayoutOverlayFilled: return "video-layout-overlay-filled"
        case .videoLayoutOverlayLight: return "video-layout-overlay-light"
        case .videoLayoutOverlayRegular: return "video-layout-overlay-regular"
        case .videoLayoutPresenterDominantBold: return "video-layout-presenter-dominant-bold"
        case .videoLayoutPresenterDominantLight: return "video-layout-presenter-dominant-light"
        case .videoLayoutPresenterDominantRegular: return "video-layout-presenter-dominant-regular"
        case .videoLayoutProminentBold: return "video-layout-prominent-bold"
        case .videoLayoutProminentFilled: return "video-layout-prominent-filled"
        case .videoLayoutProminentLight: return "video-layout-prominent-light"
        case .videoLayoutProminentRegular: return "video-layout-prominent-regular"
        case .videoLayoutRegular: return "video-layout-regular"
        case .videoLayoutShareDominantBold: return "video-layout-share-dominant-bold"
        case .videoLayoutShareDominantLight: return "video-layout-share-dominant-light"
        case .videoLayoutShareDominantRegular: return "video-layout-share-dominant-regular"
        case .videoLayoutSingleBold: return "video-layout-single-bold"
        case .videoLayoutSingleFilled: return "video-layout-single-filled"
        case .videoLayoutSingleLight: return "video-layout-single-light"
        case .videoLayoutSingleRegular: return "video-layout-single-regular"
        case .videoLayoutStackBold: return "video-layout-stack-bold"
        case .videoLayoutStackFilled: return "video-layout-stack-filled"
        case .videoLayoutStackLight: return "video-layout-stack-light"
        case .videoLayoutStackRegular: return "video-layout-stack-regular"
        case .videoLayoutVideoDominantBold: return "video-layout-video-dominant-bold"
        case .videoLayoutVideoDominantFilled: return "video-layout-video-dominant-filled"
        case .videoLayoutVideoDominantLight: return "video-layout-video-dominant-light"
        case .videoLayoutVideoDominantRegular: return "video-layout-video-dominant-regular"
        case .videoLight: return "video-light"
        case .videoPlusBold: return "video-plus-bold"
        case .videoPlusFilled: return "video-plus-filled"
        case .videoPlusLight: return "video-plus-light"
        case .videoPlusRegular: return "video-plus-regular"
        case .videoRegular: return "video-regular"
        case .videoSpeakerTrackBold: return "video-speaker-track-bold"
        case .videoSpeakerTrackFilled: return "video-speaker-track-filled"
        case .videoSpeakerTrackLight: return "video-speaker-track-light"
        case .videoSpeakerTrackRegular: return "video-speaker-track-regular"
        case .viewAllBold: return "view-all-bold"
        case .viewAllLight: return "view-all-light"
        case .viewAllRegular: return "view-all-regular"
        case .viewListBold: return "view-list-bold"
        case .viewListFilled: return "view-list-filled"
        case .viewListLight: return "view-list-light"
        case .viewListRegular: return "view-list-regular"
        case .viewStackedBold: return "view-stacked-bold"
        case .viewStackedFilled: return "view-stacked-filled"
        case .viewStackedLight: return "view-stacked-light"
        case .viewStackedRegular: return "view-stacked-regular"
        case .viewThumbnailBold: return "view-thumbnail-bold"
        case .viewThumbnailFilled: return "view-thumbnail-filled"
        case .viewThumbnailLight: return "view-thumbnail-light"
        case .viewThumbnailRegular: return "view-thumbnail-regular"
        case .visionproBold: return "visionpro-bold"
        case .visionproFilled: return "visionpro-filled"
        case .visionproLight: return "visionpro-light"
        case .visionproMoveCallInBold: return "visionpro-move-call-in-bold"
        case .visionproMoveCallInFilled: return "visionpro-move-call-in-filled"
        case .visionproMoveCallInLight: return "visionpro-move-call-in-light"
        case .visionproMoveCallInOutBold: return "visionpro-move-call-in-out-bold"
        case .visionproMoveCallInOutFilled: return "visionpro-move-call-in-out-filled"
        case .visionproMoveCallInOutLight: return "visionpro-move-call-in-out-light"
        case .visionproMoveCallInOutRegular: return "visionpro-move-call-in-out-regular"
        case .visionproMoveCallInRegular: return "visionpro-move-call-in-regular"
        case .visionproMoveCallOutBold: return "visionpro-move-call-out-bold"
        case .visionproMoveCallOutFilled: return "visionpro-move-call-out-filled"
        case .visionproMoveCallOutLight: return "visionpro-move-call-out-light"
        case .visionproMoveCallOutRegular: return "visionpro-move-call-out-regular"
        case .visionproRegular: return "visionpro-regular"
        case .voicemailBold: return "voicemail-bold"
        case .voicemailFilled: return "voicemail-filled"
        case .voicemailLight: return "voicemail-light"
        case .voicemailRegular: return "voicemail-regular"
        case .vpnBold: return "vpn-bold"
        case .vpnFilled: return "vpn-filled"
        case .vpnLight: return "vpn-light"
        case .vpnRegular: return "vpn-regular"
        case .vscBold: return "vsc-bold"
        case .vscLight: return "vsc-light"
        case .vscRegular: return "vsc-regular"
        case .waffleMenuBold: return "waffle-menu-bold"
        case .waffleMenuLight: return "waffle-menu-light"
        case .waffleMenuRegular: return "waffle-menu-regular"
        case .waitingRoomBold: return "waiting-room-bold"
        case .waitingRoomLight: return "waiting-room-light"
        case .waitingRoomRegular: return "waiting-room-regular"
        case .wallpaperBold: return "wallpaper-bold"
        case .wallpaperLight: return "wallpaper-light"
        case .wallpaperRegular: return "wallpaper-regular"
        case .warningBadgeFilled: return "warning-badge-filled"
        case .warningBold: return "warning-bold"
        case .warningFilled: return "warning-filled"
        case .warningLight: return "warning-light"
        case .warningRegular: return "warning-regular"
        case .webexBoardBold: return "webex-board-bold"
        case .webexBoardLight: return "webex-board-light"
        case .webexBoardRegular: return "webex-board-regular"
        case .webexCodecPlusBold: return "webex-codec-plus-bold"
        case .webexCodecPlusLight: return "webex-codec-plus-light"
        case .webexCodecPlusRegular: return "webex-codec-plus-regular"
        case .webexDeskCameraBold: return "webex-desk-camera-bold"
        case .webexDeskCameraLight: return "webex-desk-camera-light"
        case .webexDeskCameraRegular: return "webex-desk-camera-regular"
        case .webexMeetingsBold: return "webex-meetings-bold"
        case .webexMeetingsFilled: return "webex-meetings-filled"
        case .webexMeetingsLight: return "webex-meetings-light"
        case .webexMeetingsRegular: return "webex-meetings-regular"
        case .webexQuadCameraBold: return "webex-quad-camera-bold"
        case .webexQuadCameraLight: return "webex-quad-camera-light"
        case .webexQuadCameraRegular: return "webex-quad-camera-regular"
        case .webexRoomKitBold: return "webex-room-kit-bold"
        case .webexRoomKitLight: return "webex-room-kit-light"
        case .webexRoomKitPlusBold: return "webex-room-kit-plus-bold"
        case .webexRoomKitPlusLight: return "webex-room-kit-plus-light"
        case .webexRoomKitPlusRegular: return "webex-room-kit-plus-regular"
        case .webexRoomKitRegular: return "webex-room-kit-regular"
        case .webexShareBold: return "webex-share-bold"
        case .webexShareLight: return "webex-share-light"
        case .webexShareRegular: return "webex-share-regular"
        case .webexTeamsBold: return "webex-teams-bold"
        case .webexTeamsFilled: return "webex-teams-filled"
        case .webexTeamsLight: return "webex-teams-light"
        case .webexTeamsNewBold: return "webex-teams-new-bold"
        case .webexTeamsNewFilled: return "webex-teams-new-filled"
        case .webexTeamsNewLight: return "webex-teams-new-light"
        case .webexTeamsNewRegular: return "webex-teams-new-regular"
        case .webexTeamsRegular: return "webex-teams-regular"
        case .webexTeamsRemoveBold: return "webex-teams-remove-bold"
        case .webexTeamsRemoveLight: return "webex-teams-remove-light"
        case .webexTeamsRemoveRegular: return "webex-teams-remove-regular"
        case .webinarBold: return "webinar-bold"
        case .webinarFilled: return "webinar-filled"
        case .webinarLight: return "webinar-light"
        case .webinarRegular: return "webinar-regular"
        case .weeklyRecurringScheduleBold: return "weekly-recurring-schedule-bold"
        case .weeklyRecurringScheduleLight: return "weekly-recurring-schedule-light"
        case .weeklyRecurringScheduleRegular: return "weekly-recurring-schedule-regular"
        case .whisperAnnouncementBold: return "whisper-announcement-bold"
        case .whisperAnnouncementFilled: return "whisper-announcement-filled"
        case .whisperAnnouncementLight: return "whisper-announcement-light"
        case .whisperAnnouncementRegular: return "whisper-announcement-regular"
        case .whisperCoachBold: return "whisper-coach-bold"
        case .whisperCoachFilled: return "whisper-coach-filled"
        case .whisperCoachLight: return "whisper-coach-light"
        case .whisperCoachRegular: return "whisper-coach-regular"
        case .whiteboardBold: return "whiteboard-bold"
        case .whiteboardContentBold: return "whiteboard-content-bold"
        case .whiteboardContentFilled: return "whiteboard-content-filled"
        case .whiteboardContentLight: return "whiteboard-content-light"
        case .whiteboardContentRegular: return "whiteboard-content-regular"
        case .whiteboardFilled: return "whiteboard-filled"
        case .whiteboardLight: return "whiteboard-light"
        case .whiteboardRegular: return "whiteboard-regular"
        case .widgetBold: return "widget-bold"
        case .widgetFilled: return "widget-filled"
        case .widgetLight: return "widget-light"
        case .widgetRegular: return "widget-regular"
        case .wifiBold: return "wifi-bold"
        case .wifiErrorBold: return "wifi-error-bold"
        case .wifiErrorLight: return "wifi-error-light"
        case .wifiErrorRegular: return "wifi-error-regular"
        case .wifiLight: return "wifi-light"
        case .wifiRegular: return "wifi-regular"
        case .wifiSignalGoodBold: return "wifi-signal-good-bold"
        case .wifiSignalGoodLight: return "wifi-signal-good-light"
        case .wifiSignalGoodRegular: return "wifi-signal-good-regular"
        case .wifiSignalPoorBold: return "wifi-signal-poor-bold"
        case .wifiSignalPoorLight: return "wifi-signal-poor-light"
        case .wifiSignalPoorRegular: return "wifi-signal-poor-regular"
        case .wifiSignalUnstableBold: return "wifi-signal-unstable-bold"
        case .wifiSignalUnstableLight: return "wifi-signal-unstable-light"
        case .wifiSignalUnstableRegular: return "wifi-signal-unstable-regular"
        case .windowCornerScrubBold: return "window-corner-scrub-bold"
        case .windowCornerScrubLight: return "window-corner-scrub-light"
        case .windowCornerScrubRegular: return "window-corner-scrub-regular"
        case .windowRightCornerScrubBold: return "window-right-corner-scrub-bold"
        case .windowRightCornerScrubLight: return "window-right-corner-scrub-light"
        case .windowRightCornerScrubRegular: return "window-right-corner-scrub-regular"
        case .windowVerticalScrubBold: return "window-vertical-scrub-bold"
        case .windowVerticalScrubLight: return "window-vertical-scrub-light"
        case .windowVerticalScrubRegular: return "window-vertical-scrub-regular"
        case .workflowDeploymentsBold: return "workflow-deployments-bold"
        case .workflowDeploymentsFilled: return "workflow-deployments-filled"
        case .workflowDeploymentsLight: return "workflow-deployments-light"
        case .workflowDeploymentsRegular: return "workflow-deployments-regular"
        case .workphoneBold: return "workphone-bold"
        case .workphoneLight: return "workphone-light"
        case .workphoneRegular: return "workphone-regular"
        case .zoomInBold: return "zoom-in-bold"
        case .zoomInLight: return "zoom-in-light"
        case .zoomInRegular: return "zoom-in-regular"
        case .zoomOutBold: return "zoom-out-bold"
        case .zoomOutLight: return "zoom-out-light"
        case .zoomOutRegular: return "zoom-out-regular"

        default:
            // We need a default case to prevent the Xcode11 error: "the compiler is unable to check that this switch is exhaustive in reasonable time"
            assertionFailure("Unknown icon type: \(self)")
            return ""
        }
    }

    private static var suppressAssert: Bool = false

    public static func fromFileName(fileName: String) -> MomentumIconsType? {
        MomentumIconsType.suppressAssert = true
        let iconType = MomentumIconsType.allCases.first{ "\($0.filename)" == fileName }
        MomentumIconsType.suppressAssert = false
        return iconType
    }
}