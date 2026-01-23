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
    case activeInteractionBold
    case activeInteractionFilled
    case activeInteractionLight
    case activeInteractionRegular
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
    case agentUniqueCodeFilled
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
    case archiveBadgeFilled
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
    case autoAnswerBold
    case autoAnswerFilled
    case autoAnswerLight
    case autoAnswerRegular
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
    case booleanBold
    case booleanFilled
    case booleanLight
    case booleanRegular
    case botBold
    case botCustomerAssistantBold
    case botCustomerAssistantFilled
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
    case brightnessAutoFilled
    case brightnessAutoLight
    case brightnessAutoRegular
    case brightnessBold
    case brightnessFilled
    case brightnessHighBold
    case brightnessHighFilled
    case brightnessHighLight
    case brightnessHighRegular
    case brightnessLight
    case brightnessLowBold
    case brightnessLowFilled
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
    case callMergeFilled
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
    case cancelFilled
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
    case certifiedFilled
    case certifiedLight
    case certifiedRegular
    case chPSearchBold
    case chPSearchLight
    case chPSearchRegular
    case channelUssdBold
    case channelUssdFilled
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
    case checkFilled
    case checkLight
    case checkRegular
    case checkboxGroupBold
    case checkboxGroupFilled
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
    case colorAccessoriesBold
    case colorAccessoriesFilled
    case colorAccessoriesLight
    case colorAccessoriesRegular
    case colorBold
    case colorFilled
    case colorLight
    case colorMeetingSummaryBold
    case colorMeetingSummaryFilled
    case colorMeetingSummaryLight
    case colorMeetingSummaryRegular
    case colorPromptsAiBold
    case colorPromptsAiLight
    case colorPromptsAiRegular
    case colorRegular
    case colorScheduleAiBold
    case colorScheduleAiLight
    case colorScheduleAiRegular
    case colorSearchAiBold
    case colorSearchAiLight
    case colorSearchAiRegular
    case colorSendBold
    case colorSendFilled
    case colorSendLight
    case colorSendRegular
    case colorSparkleBold
    case colorSparkleFilled
    case colorSparkleLight
    case colorSparkleRegular
    case colorSummarizeAiBold
    case colorSummarizeAiLight
    case colorSummarizeAiRegular
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
    case completedInteractionBold
    case completedInteractionFilled
    case completedInteractionLight
    case completedInteractionRegular
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
    case customTaskBold
    case customTaskFilled
    case customTaskIndBold
    case customTaskIndFilled
    case customTaskIndLight
    case customTaskIndRegular
    case customTaskLight
    case customTaskRegular
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
    case devicesBold
    case devicesFilled
    case devicesLight
    case devicesRegular
    case diagnosticsBold
    case diagnosticsLight
    case diagnosticsRegular
    case dialpadBold
    case dialpadLight
    case dialpadRegular
    case diamondBold
    case diamondFilled
    case diamondLight
    case diamondRegular
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
    case divideBold
    case divideFilled
    case divideLight
    case divideRegular
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
    case folderFilled
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
    case formulaBold
    case formulaFilled
    case formulaLight
    case formulaRegular
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
    case headsetBluetoothBold
    case headsetBluetoothLight
    case headsetBluetoothRegular
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
    case integerBold
    case integerFilled
    case integerLight
    case integerRegular
    case integrationsBold
    case integrationsFilled
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
    case laserPointerCursorBlackLight
    case laserPointerCursorBlueLight
    case laserPointerCursorGreenLight
    case laserPointerCursorPurpleLight
    case laserPointerCursorRedLight
    case laserPointerCursorWhiteLight
    case laserPointerCursorYellowLight
    case laserPointerFilled
    case laserPointerLight
    case laserPointerRegular
    case launchBold
    case launchFilled
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
    case markAsUnreadFilled
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
    case mcpBold
    case mcpFilled
    case mcpLight
    case mcpRegular
    case mediaPlayerBold
    case mediaPlayerLight
    case mediaPlayerRegular
    case mediaQualityGoodBold
    case mediaQualityGoodFilled
    case mediaQualityGoodLight
    case mediaQualityGoodRegular
    case mediaQualityPoorBold
    case mediaQualityPoorColoredBold
    case mediaQualityPoorFilled
    case mediaQualityPoorLight
    case mediaQualityPoorRegular
    case mediaQualityUnstableBold
    case mediaQualityUnstableColoredBold
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
    case mentionFilled
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
    case minusFilled
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
    case moveToBottomBold
    case moveToBottomFilled
    case moveToBottomLight
    case moveToBottomRegular
    case moveToScreenBold
    case moveToScreenLight
    case moveToScreenRegular
    case moveToTopBold
    case moveToTopFilled
    case moveToTopLight
    case moveToTopRegular
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
    case networkSwitchBold
    case networkSwitchFilled
    case networkSwitchLight
    case networkSwitchRegular
    case newManagerBold
    case newManagerFilled
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
    case noteFilled
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
    case openInFolderFilled
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
    case parenthesisBold
    case parenthesisFilled
    case parenthesisLight
    case parenthesisRegular
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
    case participantSpeakerBold
    case participantSpeakerFilled
    case participantSpeakerLight
    case participantSpeakerRegular
    case participantUnknownBold
    case participantUnknownLight
    case participantUnknownRegular
    case passMouseBold
    case passMouseLight
    case passMouseRegular
    case pauseBadgeFilled
    case pauseBold
    case pauseFilled
    case pauseInteractionBold
    case pauseInteractionFilled
    case pauseInteractionLight
    case pauseInteractionRegular
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
    case peopleManageBold
    case peopleManageFilled
    case peopleManageLight
    case peopleManageRegular
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
    case primaryParticipantFilled
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
    case promptsAiBold
    case promptsAiLight
    case promptsAiRegular
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
    case purchaseOrderBold
    case purchaseOrderFilled
    case purchaseOrderLight
    case purchaseOrderRegular
    case qABold
    case qAFilled
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
    case queuedInteractionBold
    case queuedInteractionFilled
    case queuedInteractionLight
    case queuedInteractionRegular
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
    case replyListFilled
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
    case resumeInteractionBold
    case resumeInteractionFilled
    case resumeInteractionLight
    case resumeInteractionRegular
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
    case rulerBold
    case rulerFilled
    case rulerLight
    case rulerRegular
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
    case scheduleAiBold
    case scheduleAiLight
    case scheduleAiRegular
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
    case searchAiBold
    case searchAiLight
    case searchAiRegular
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
    case sidePanelBold
    case sidePanelFilled
    case sidePanelLight
    case sidePanelRegular
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
    case smsMessageOutgoingBold
    case smsMessageOutgoingFilled
    case smsMessageOutgoingLight
    case smsMessageOutgoingRegular
    case smsMessageRegular
    case smsMessageStartBold
    case smsMessageStartFilled
    case smsMessageStartLight
    case smsMessageStartRegular
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
    case summarizeAiBold
    case summarizeAiLight
    case summarizeAiRegular
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
    case tableExtenderBold
    case tableExtenderFilled
    case tableExtenderLight
    case tableExtenderRegular
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
    case timezoneBold
    case timezoneFilled
    case timezoneLight
    case timezoneRegular
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
    case videoLayoutCustomBold
    case videoLayoutCustomFilled
    case videoLayoutCustomLight
    case videoLayoutCustomRegular
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
    case videoLayoutPresentationBold
    case videoLayoutPresentationFilled
    case videoLayoutPresentationLight
    case videoLayoutPresentationRegular
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
    case videoLayoutSpeakerBold
    case videoLayoutSpeakerFilled
    case videoLayoutSpeakerLight
    case videoLayoutSpeakerRegular
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
    case webexHelixBold
    case webexHelixLight
    case webexHelixRegular
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
    case webhookBold
    case webhookLight
    case webhookRegular
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
        case .activeInteractionBold: return "\u{f10b}"
        case .activeInteractionFilled: return "\u{f10c}"
        case .activeInteractionLight: return "\u{f10d}"
        case .activeInteractionRegular: return "\u{f10e}"
        case .activePresenceSmallFilled: return "\u{f10f}"
        case .activeSpeakerAlertBold: return "\u{f110}"
        case .activeSpeakerAlertLight: return "\u{f111}"
        case .activeSpeakerAlertRegular: return "\u{f112}"
        case .activeSpeakerBold: return "\u{f113}"
        case .activeSpeakerLight: return "\u{f114}"
        case .activeSpeakerLockBold: return "\u{f115}"
        case .activeSpeakerLockLight: return "\u{f116}"
        case .activeSpeakerLockRegular: return "\u{f117}"
        case .activeSpeakerRegular: return "\u{f118}"
        case .addOptionBold: return "\u{f119}"
        case .addOptionLight: return "\u{f11a}"
        case .addOptionRegular: return "\u{f11b}"
        case .addPhotoBold: return "\u{f11c}"
        case .addPhotoLight: return "\u{f11d}"
        case .addPhotoRegular: return "\u{f11e}"
        case .addPollBold: return "\u{f11f}"
        case .addPollLight: return "\u{f120}"
        case .addPollRegular: return "\u{f121}"
        case .addQuestionBold: return "\u{f122}"
        case .addQuestionLight: return "\u{f123}"
        case .addQuestionRegular: return "\u{f124}"
        case .addVideoMarkerBold: return "\u{f125}"
        case .addVideoMarkerLight: return "\u{f126}"
        case .addVideoMarkerRegular: return "\u{f127}"
        case .adjustAudioBold: return "\u{f128}"
        case .adjustAudioLight: return "\u{f129}"
        case .adjustAudioRegular: return "\u{f12a}"
        case .adjustBold: return "\u{f12b}"
        case .adjustFilled: return "\u{f12c}"
        case .adjustHorizontalBold: return "\u{f12d}"
        case .adjustHorizontalFilled: return "\u{f12e}"
        case .adjustHorizontalLight: return "\u{f12f}"
        case .adjustHorizontalRegular: return "\u{f130}"
        case .adjustLight: return "\u{f131}"
        case .adjustMicrophoneBold: return "\u{f132}"
        case .adjustMicrophoneLight: return "\u{f133}"
        case .adjustMicrophoneRegular: return "\u{f134}"
        case .adjustRegular: return "\u{f135}"
        case .adjustVideoBold: return "\u{f136}"
        case .adjustVideoLight: return "\u{f137}"
        case .adjustVideoRegular: return "\u{f138}"
        case .adminBold: return "\u{f139}"
        case .adminFilled: return "\u{f13a}"
        case .adminLight: return "\u{f13b}"
        case .adminRegular: return "\u{f13c}"
        case .advanceScheduleBold: return "\u{f13d}"
        case .advanceScheduleLight: return "\u{f13e}"
        case .advanceScheduleRegular: return "\u{f13f}"
        case .advancedNoiseRemovalBold: return "\u{f140}"
        case .advancedNoiseRemovalLight: return "\u{f141}"
        case .advancedNoiseRemovalRegular: return "\u{f142}"
        case .agentUniqueCodeBold: return "\u{f143}"
        case .agentUniqueCodeFilled: return "\u{f144}"
        case .agentUniqueCodeLight: return "\u{f145}"
        case .agentUniqueCodeRegular: return "\u{f146}"
        case .airplayBold: return "\u{f147}"
        case .airplayLight: return "\u{f148}"
        case .airplayRegular: return "\u{f149}"
        case .alarmBold: return "\u{f14a}"
        case .alarmFilled: return "\u{f14b}"
        case .alarmLight: return "\u{f14c}"
        case .alarmRegular: return "\u{f14d}"
        case .alertActiveBold: return "\u{f14e}"
        case .alertActiveFilled: return "\u{f14f}"
        case .alertActiveLight: return "\u{f150}"
        case .alertActiveRegular: return "\u{f151}"
        case .alertBold: return "\u{f152}"
        case .alertFilled: return "\u{f153}"
        case .alertLight: return "\u{f154}"
        case .alertMutedBold: return "\u{f155}"
        case .alertMutedFilled: return "\u{f156}"
        case .alertMutedLight: return "\u{f157}"
        case .alertMutedRegular: return "\u{f158}"
        case .alertRegular: return "\u{f159}"
        case .alignBold: return "\u{f15a}"
        case .alignBottomBold: return "\u{f15b}"
        case .alignBottomFilled: return "\u{f15c}"
        case .alignBottomLight: return "\u{f15d}"
        case .alignBottomRegular: return "\u{f15e}"
        case .alignFilled: return "\u{f15f}"
        case .alignHorizontalCenterBold: return "\u{f160}"
        case .alignHorizontalCenterFilled: return "\u{f161}"
        case .alignHorizontalCenterLight: return "\u{f162}"
        case .alignHorizontalCenterRegular: return "\u{f163}"
        case .alignLeftBold: return "\u{f164}"
        case .alignLeftFilled: return "\u{f165}"
        case .alignLeftLight: return "\u{f166}"
        case .alignLeftRegular: return "\u{f167}"
        case .alignLight: return "\u{f168}"
        case .alignRegular: return "\u{f169}"
        case .alignRightBold: return "\u{f16a}"
        case .alignRightFilled: return "\u{f16b}"
        case .alignRightLight: return "\u{f16c}"
        case .alignRightRegular: return "\u{f16d}"
        case .alignTopBold: return "\u{f16e}"
        case .alignTopFilled: return "\u{f16f}"
        case .alignTopLight: return "\u{f170}"
        case .alignTopRegular: return "\u{f171}"
        case .alignVerticalCenterBold: return "\u{f172}"
        case .alignVerticalCenterFilled: return "\u{f173}"
        case .alignVerticalCenterLight: return "\u{f174}"
        case .alignVerticalCenterRegular: return "\u{f175}"
        case .allowToAnnotateBold: return "\u{f176}"
        case .allowToAnnotateLight: return "\u{f177}"
        case .allowToAnnotateRegular: return "\u{f178}"
        case .alternateResponseBold: return "\u{f179}"
        case .alternateResponseLight: return "\u{f17a}"
        case .alternateResponseRegular: return "\u{f17b}"
        case .analogHeadsetBold: return "\u{f17c}"
        case .analogHeadsetLight: return "\u{f17d}"
        case .analogHeadsetRegular: return "\u{f17e}"
        case .analysisBold: return "\u{f17f}"
        case .analysisFilled: return "\u{f180}"
        case .analysisLight: return "\u{f181}"
        case .analysisRegular: return "\u{f182}"
        case .annotateBold: return "\u{f183}"
        case .annotateFilled: return "\u{f184}"
        case .annotateLight: return "\u{f185}"
        case .annotateRegular: return "\u{f186}"
        case .announcementBold: return "\u{f187}"
        case .announcementFilled: return "\u{f188}"
        case .announcementLight: return "\u{f189}"
        case .announcementMutedBold: return "\u{f18a}"
        case .announcementMutedFilled: return "\u{f18b}"
        case .announcementMutedLight: return "\u{f18c}"
        case .announcementMutedRegular: return "\u{f18d}"
        case .announcementRegular: return "\u{f18e}"
        case .appPushBold: return "\u{f18f}"
        case .appPushLight: return "\u{f190}"
        case .appPushRegular: return "\u{f191}"
        case .appearanceBold: return "\u{f192}"
        case .appearanceLight: return "\u{f193}"
        case .appearanceRegular: return "\u{f194}"
        case .applauseBold: return "\u{f195}"
        case .applauseLight: return "\u{f196}"
        case .applauseRegular: return "\u{f197}"
        case .appleBold: return "\u{f198}"
        case .appleFilled: return "\u{f199}"
        case .appleLight: return "\u{f19a}"
        case .appleRegular: return "\u{f19b}"
        case .applicationBold: return "\u{f19c}"
        case .applicationLight: return "\u{f19d}"
        case .applicationPanelBold: return "\u{f19e}"
        case .applicationPanelLight: return "\u{f19f}"
        case .applicationPanelRegular: return "\u{f1a0}"
        case .applicationRegular: return "\u{f1a1}"
        case .applicationsBold: return "\u{f1a2}"
        case .applicationsFilled: return "\u{f1a3}"
        case .applicationsLight: return "\u{f1a4}"
        case .applicationsRegular: return "\u{f1a5}"
        case .approvalPendingBold: return "\u{f1a6}"
        case .approvalPendingLight: return "\u{f1a7}"
        case .approvalPendingRegular: return "\u{f1a8}"
        case .approvalsBold: return "\u{f1a9}"
        case .approvalsLight: return "\u{f1aa}"
        case .approvalsRegular: return "\u{f1ab}"
        case .appsBold: return "\u{f1ac}"
        case .appsFilled: return "\u{f1ad}"
        case .appsLight: return "\u{f1ae}"
        case .appsRegular: return "\u{f1af}"
        case .archiveBadgeFilled: return "\u{f1b0}"
        case .archiveBold: return "\u{f1b1}"
        case .archiveFilled: return "\u{f1b2}"
        case .archiveLight: return "\u{f1b3}"
        case .archiveRegular: return "\u{f1b4}"
        case .areaChartBold: return "\u{f1b5}"
        case .areaChartFilled: return "\u{f1b6}"
        case .areaChartLight: return "\u{f1b7}"
        case .areaChartRegular: return "\u{f1b8}"
        case .areaSelectorBold: return "\u{f1b9}"
        case .areaSelectorLight: return "\u{f1ba}"
        case .areaSelectorRegular: return "\u{f1bb}"
        case .arrowCircleDownBold: return "\u{f1bc}"
        case .arrowCircleDownFilled: return "\u{f1bd}"
        case .arrowCircleDownLight: return "\u{f1be}"
        case .arrowCircleDownRegular: return "\u{f1bf}"
        case .arrowCircleLeftBold: return "\u{f1c0}"
        case .arrowCircleLeftFilled: return "\u{f1c1}"
        case .arrowCircleLeftLight: return "\u{f1c2}"
        case .arrowCircleLeftRegular: return "\u{f1c3}"
        case .arrowCircleRightBold: return "\u{f1c4}"
        case .arrowCircleRightFilled: return "\u{f1c5}"
        case .arrowCircleRightLight: return "\u{f1c6}"
        case .arrowCircleRightRegular: return "\u{f1c7}"
        case .arrowCircleUpBold: return "\u{f1c8}"
        case .arrowCircleUpFilled: return "\u{f1c9}"
        case .arrowCircleUpLight: return "\u{f1ca}"
        case .arrowCircleUpRegular: return "\u{f1cb}"
        case .arrowDownBold: return "\u{f1cc}"
        case .arrowDownFilled: return "\u{f1cd}"
        case .arrowDownLight: return "\u{f1ce}"
        case .arrowDownRegular: return "\u{f1cf}"
        case .arrowLeftBold: return "\u{f1d0}"
        case .arrowLeftFilled: return "\u{f1d1}"
        case .arrowLeftLight: return "\u{f1d2}"
        case .arrowLeftRegular: return "\u{f1d3}"
        case .arrowPointerCursorLight: return "\u{f1d4}"
        case .arrowRightBold: return "\u{f1d5}"
        case .arrowRightFilled: return "\u{f1d6}"
        case .arrowRightLight: return "\u{f1d7}"
        case .arrowRightRegular: return "\u{f1d8}"
        case .arrowTailDownBold: return "\u{f1d9}"
        case .arrowTailDownLight: return "\u{f1da}"
        case .arrowTailDownRegular: return "\u{f1db}"
        case .arrowTailUpBold: return "\u{f1dc}"
        case .arrowTailUpLight: return "\u{f1dd}"
        case .arrowTailUpRegular: return "\u{f1de}"
        case .arrowUpBold: return "\u{f1df}"
        case .arrowUpFilled: return "\u{f1e0}"
        case .arrowUpLight: return "\u{f1e1}"
        case .arrowUpRegular: return "\u{f1e2}"
        case .askForHelpBold: return "\u{f1e3}"
        case .askForHelpFilled: return "\u{f1e4}"
        case .askForHelpLight: return "\u{f1e5}"
        case .askForHelpRegular: return "\u{f1e6}"
        case .assetsBold: return "\u{f1e7}"
        case .assetsFilled: return "\u{f1e8}"
        case .assetsLight: return "\u{f1e9}"
        case .assetsRegular: return "\u{f1ea}"
        case .assignHostBold: return "\u{f1eb}"
        case .assignHostLight: return "\u{f1ec}"
        case .assignHostRegular: return "\u{f1ed}"
        case .assignPrivilegeBold: return "\u{f1ee}"
        case .assignPrivilegeFilled: return "\u{f1ef}"
        case .assignPrivilegeLight: return "\u{f1f0}"
        case .assignPrivilegeRegular: return "\u{f1f1}"
        case .attachmentBold: return "\u{f1f2}"
        case .attachmentLight: return "\u{f1f3}"
        case .attachmentRegular: return "\u{f1f4}"
        case .attendantConsoleBold: return "\u{f1f5}"
        case .attendantConsoleFilled: return "\u{f1f6}"
        case .attendantConsoleLight: return "\u{f1f7}"
        case .attendantConsoleRegular: return "\u{f1f8}"
        case .audioBroadcastBold: return "\u{f1f9}"
        case .audioBroadcastLight: return "\u{f1fa}"
        case .audioBroadcastRegular: return "\u{f1fb}"
        case .audioCallBold: return "\u{f1fc}"
        case .audioCallFilled: return "\u{f1fd}"
        case .audioCallLight: return "\u{f1fe}"
        case .audioCallRegular: return "\u{f1ff}"
        case .audioEnhancementBold: return "\u{f200}"
        case .audioEnhancementFilled: return "\u{f201}"
        case .audioEnhancementLight: return "\u{f202}"
        case .audioEnhancementRegular: return "\u{f203}"
        case .audioOnlyBold: return "\u{f204}"
        case .audioOnlyLight: return "\u{f205}"
        case .audioOnlyRegular: return "\u{f206}"
        case .audioOptAllBold: return "\u{f207}"
        case .audioOptAllLight: return "\u{f208}"
        case .audioOptAllRegular: return "\u{f209}"
        case .autoAnswerBold: return "\u{f20a}"
        case .autoAnswerFilled: return "\u{f20b}"
        case .autoAnswerLight: return "\u{f20c}"
        case .autoAnswerRegular: return "\u{f20d}"
        case .autoDetectionBold: return "\u{f20e}"
        case .autoDetectionLight: return "\u{f20f}"
        case .autoDetectionRegular: return "\u{f210}"
        case .automationBold: return "\u{f211}"
        case .automationLight: return "\u{f212}"
        case .automationRegular: return "\u{f213}"
        case .awayCallingPresenceBold: return "\u{f214}"
        case .awayCallingPresenceFilled: return "\u{f215}"
        case .awayCallingPresenceLight: return "\u{f216}"
        case .awayCallingPresenceRegular: return "\u{f217}"
        case .backBold: return "\u{f218}"
        case .backLight: return "\u{f219}"
        case .backRegular: return "\u{f21a}"
        case .backToFullScreenBold: return "\u{f21b}"
        case .backToFullScreenLight: return "\u{f21c}"
        case .backToFullScreenRegular: return "\u{f21d}"
        case .backToTopBold: return "\u{f21e}"
        case .backToTopLight: return "\u{f21f}"
        case .backToTopRegular: return "\u{f220}"
        case .backlightBold: return "\u{f221}"
        case .backlightLight: return "\u{f222}"
        case .backlightRegular: return "\u{f223}"
        case .backspaceBold: return "\u{f224}"
        case .backspaceLight: return "\u{f225}"
        case .backspaceRegular: return "\u{f226}"
        case .backupDataBold: return "\u{f227}"
        case .backupDataLight: return "\u{f228}"
        case .backupDataRegular: return "\u{f229}"
        case .barcodeBold: return "\u{f22a}"
        case .barcodeLight: return "\u{f22b}"
        case .barcodeRegular: return "\u{f22c}"
        case .batteryChargingBold: return "\u{f22d}"
        case .batteryChargingLight: return "\u{f22e}"
        case .batteryChargingRegular: return "\u{f22f}"
        case .batteryEmptyBold: return "\u{f230}"
        case .batteryEmptyLight: return "\u{f231}"
        case .batteryEmptyRegular: return "\u{f232}"
        case .batteryHighBold: return "\u{f233}"
        case .batteryHighLight: return "\u{f234}"
        case .batteryHighRegular: return "\u{f235}"
        case .batteryLowBold: return "\u{f236}"
        case .batteryLowLight: return "\u{f237}"
        case .batteryLowRegular: return "\u{f238}"
        case .batteryMediumBold: return "\u{f239}"
        case .batteryMediumLight: return "\u{f23a}"
        case .batteryMediumRegular: return "\u{f23b}"
        case .bitmojiConnectBold: return "\u{f23c}"
        case .bitmojiConnectLight: return "\u{f23d}"
        case .bitmojiConnectRegular: return "\u{f23e}"
        case .bitmojiConnectedBold: return "\u{f23f}"
        case .bitmojiConnectedFilled: return "\u{f240}"
        case .bitmojiConnectedLight: return "\u{f241}"
        case .bitmojiConnectedRegular: return "\u{f242}"
        case .blindTransferBold: return "\u{f243}"
        case .blindTransferLight: return "\u{f244}"
        case .blindTransferRegular: return "\u{f245}"
        case .blockQuoteBold: return "\u{f246}"
        case .blockQuoteLight: return "\u{f247}"
        case .blockQuoteRegular: return "\u{f248}"
        case .blockedBold: return "\u{f249}"
        case .blockedFilled: return "\u{f24a}"
        case .blockedLight: return "\u{f24b}"
        case .blockedRegular: return "\u{f24c}"
        case .bluetoothBold: return "\u{f24d}"
        case .bluetoothFilled: return "\u{f24e}"
        case .bluetoothLight: return "\u{f24f}"
        case .bluetoothMutedBold: return "\u{f250}"
        case .bluetoothMutedLight: return "\u{f251}"
        case .bluetoothMutedRegular: return "\u{f252}"
        case .bluetoothRegular: return "\u{f253}"
        case .boldBold: return "\u{f254}"
        case .boldFilled: return "\u{f255}"
        case .boldLight: return "\u{f256}"
        case .boldRegular: return "\u{f257}"
        case .bookmarkBold: return "\u{f258}"
        case .bookmarkLight: return "\u{f259}"
        case .bookmarkRegular: return "\u{f25a}"
        case .booleanBold: return "\u{f25b}"
        case .booleanFilled: return "\u{f25c}"
        case .booleanLight: return "\u{f25d}"
        case .booleanRegular: return "\u{f25e}"
        case .botBold: return "\u{f25f}"
        case .botCustomerAssistantBold: return "\u{f260}"
        case .botCustomerAssistantFilled: return "\u{f261}"
        case .botCustomerAssistantLight: return "\u{f262}"
        case .botCustomerAssistantRegular: return "\u{f263}"
        case .botExpertAssistantBold: return "\u{f264}"
        case .botExpertAssistantLight: return "\u{f265}"
        case .botExpertAssistantRegular: return "\u{f266}"
        case .botLight: return "\u{f267}"
        case .botRegular: return "\u{f268}"
        case .boxBold: return "\u{f269}"
        case .boxLight: return "\u{f26a}"
        case .boxRegular: return "\u{f26b}"
        case .breakoutSessionBold: return "\u{f26c}"
        case .breakoutSessionFilled: return "\u{f26d}"
        case .breakoutSessionLight: return "\u{f26e}"
        case .breakoutSessionRegular: return "\u{f26f}"
        case .brightnessAutoBold: return "\u{f270}"
        case .brightnessAutoFilled: return "\u{f271}"
        case .brightnessAutoLight: return "\u{f272}"
        case .brightnessAutoRegular: return "\u{f273}"
        case .brightnessBold: return "\u{f274}"
        case .brightnessFilled: return "\u{f275}"
        case .brightnessHighBold: return "\u{f276}"
        case .brightnessHighFilled: return "\u{f277}"
        case .brightnessHighLight: return "\u{f278}"
        case .brightnessHighRegular: return "\u{f279}"
        case .brightnessLight: return "\u{f27a}"
        case .brightnessLowBold: return "\u{f27b}"
        case .brightnessLowFilled: return "\u{f27c}"
        case .brightnessLowLight: return "\u{f27d}"
        case .brightnessLowRegular: return "\u{f27e}"
        case .brightnessRegular: return "\u{f27f}"
        case .brokenFileBold: return "\u{f280}"
        case .brokenFileFilled: return "\u{f281}"
        case .brokenFileLight: return "\u{f282}"
        case .brokenFileRegular: return "\u{f283}"
        case .browserBold: return "\u{f284}"
        case .browserLight: return "\u{f285}"
        case .browserRegular: return "\u{f286}"
        case .busyPresenceBold: return "\u{f287}"
        case .busyPresenceLight: return "\u{f288}"
        case .busyPresenceRegular: return "\u{f289}"
        case .buttonCursorBold: return "\u{f28a}"
        case .buttonCursorLight: return "\u{f28b}"
        case .buttonCursorRegular: return "\u{f28c}"
        case .calendarAddBold: return "\u{f28d}"
        case .calendarAddFilled: return "\u{f28e}"
        case .calendarAddLight: return "\u{f28f}"
        case .calendarAddRegular: return "\u{f290}"
        case .calendarDayBold: return "\u{f291}"
        case .calendarDayFilled: return "\u{f292}"
        case .calendarDayLight: return "\u{f293}"
        case .calendarDayRegular: return "\u{f294}"
        case .calendarEmptyBold: return "\u{f295}"
        case .calendarEmptyFilled: return "\u{f296}"
        case .calendarEmptyLight: return "\u{f297}"
        case .calendarEmptyRegular: return "\u{f298}"
        case .calendarExternalBold: return "\u{f299}"
        case .calendarExternalLight: return "\u{f29a}"
        case .calendarExternalRegular: return "\u{f29b}"
        case .calendarFilterBold: return "\u{f29c}"
        case .calendarFilterLight: return "\u{f29d}"
        case .calendarFilterRegular: return "\u{f29e}"
        case .calendarMonthBold: return "\u{f29f}"
        case .calendarMonthFilled: return "\u{f2a0}"
        case .calendarMonthLight: return "\u{f2a1}"
        case .calendarMonthMoreBold: return "\u{f2a2}"
        case .calendarMonthMoreLight: return "\u{f2a3}"
        case .calendarMonthMoreRegular: return "\u{f2a4}"
        case .calendarMonthRegular: return "\u{f2a5}"
        case .calendarTodayBold: return "\u{f2a6}"
        case .calendarTodayLight: return "\u{f2a7}"
        case .calendarTodayRegular: return "\u{f2a8}"
        case .calendarWeekBold: return "\u{f2a9}"
        case .calendarWeekFilled: return "\u{f2aa}"
        case .calendarWeekLight: return "\u{f2ab}"
        case .calendarWeekRegular: return "\u{f2ac}"
        case .calendarWeekViewBold: return "\u{f2ad}"
        case .calendarWeekViewFilled: return "\u{f2ae}"
        case .calendarWeekViewLight: return "\u{f2af}"
        case .calendarWeekViewRegular: return "\u{f2b0}"
        case .calendarWorkWeekBold: return "\u{f2b1}"
        case .calendarWorkWeekFilled: return "\u{f2b2}"
        case .calendarWorkWeekLight: return "\u{f2b3}"
        case .calendarWorkWeekRegular: return "\u{f2b4}"
        case .callBargeBold: return "\u{f2b5}"
        case .callBargeFilled: return "\u{f2b6}"
        case .callBargeLight: return "\u{f2b7}"
        case .callBargeRegular: return "\u{f2b8}"
        case .callBargeSilentBold: return "\u{f2b9}"
        case .callBargeSilentLight: return "\u{f2ba}"
        case .callBargeSilentRegular: return "\u{f2bb}"
        case .callForwardSettingsBold: return "\u{f2bc}"
        case .callForwardSettingsFilled: return "\u{f2bd}"
        case .callForwardSettingsLight: return "\u{f2be}"
        case .callForwardSettingsRegular: return "\u{f2bf}"
        case .callGroupPickupBold: return "\u{f2c0}"
        case .callGroupPickupFilled: return "\u{f2c1}"
        case .callGroupPickupLight: return "\u{f2c2}"
        case .callGroupPickupRegular: return "\u{f2c3}"
        case .callHandlingBold: return "\u{f2c4}"
        case .callHandlingLight: return "\u{f2c5}"
        case .callHandlingRegular: return "\u{f2c6}"
        case .callHoldBold: return "\u{f2c7}"
        case .callHoldFilled: return "\u{f2c8}"
        case .callHoldLight: return "\u{f2c9}"
        case .callHoldRegular: return "\u{f2ca}"
        case .callIncomingBold: return "\u{f2cb}"
        case .callIncomingLight: return "\u{f2cc}"
        case .callIncomingRegular: return "\u{f2cd}"
        case .callListBold: return "\u{f2ce}"
        case .callListLight: return "\u{f2cf}"
        case .callListRegular: return "\u{f2d0}"
        case .callMergeBold: return "\u{f2d1}"
        case .callMergeFilled: return "\u{f2d2}"
        case .callMergeLight: return "\u{f2d3}"
        case .callMergeRegular: return "\u{f2d4}"
        case .callMissedBold: return "\u{f2d5}"
        case .callMissedFilled: return "\u{f2d6}"
        case .callMissedLight: return "\u{f2d7}"
        case .callMissedRegular: return "\u{f2d8}"
        case .callMoreBold: return "\u{f2d9}"
        case .callMoreLight: return "\u{f2da}"
        case .callMoreRegular: return "\u{f2db}"
        case .callOutgoingBold: return "\u{f2dc}"
        case .callOutgoingLight: return "\u{f2dd}"
        case .callOutgoingRegular: return "\u{f2de}"
        case .callPickupBold: return "\u{f2df}"
        case .callPickupFilled: return "\u{f2e0}"
        case .callPickupLight: return "\u{f2e1}"
        case .callPickupOtherBold: return "\u{f2e2}"
        case .callPickupOtherFilled: return "\u{f2e3}"
        case .callPickupOtherLight: return "\u{f2e4}"
        case .callPickupOtherRegular: return "\u{f2e5}"
        case .callPickupRegular: return "\u{f2e6}"
        case .callPrivateBold: return "\u{f2e7}"
        case .callPrivateFilled: return "\u{f2e8}"
        case .callPrivateLight: return "\u{f2e9}"
        case .callPrivateRegular: return "\u{f2ea}"
        case .callRemoteBold: return "\u{f2eb}"
        case .callRemoteFilled: return "\u{f2ec}"
        case .callRemoteLight: return "\u{f2ed}"
        case .callRemoteRegular: return "\u{f2ee}"
        case .callRequestBold: return "\u{f2ef}"
        case .callRequestFilled: return "\u{f2f0}"
        case .callRequestLight: return "\u{f2f1}"
        case .callRequestRegular: return "\u{f2f2}"
        case .callReturnBold: return "\u{f2f3}"
        case .callReturnFilled: return "\u{f2f4}"
        case .callReturnLight: return "\u{f2f5}"
        case .callReturnRegular: return "\u{f2f6}"
        case .callRoomBold: return "\u{f2f7}"
        case .callRoomLight: return "\u{f2f8}"
        case .callRoomRegular: return "\u{f2f9}"
        case .callSettingsBold: return "\u{f2fa}"
        case .callSettingsLight: return "\u{f2fb}"
        case .callSettingsRegular: return "\u{f2fc}"
        case .callSplitBold: return "\u{f2fd}"
        case .callSplitLight: return "\u{f2fe}"
        case .callSplitRegular: return "\u{f2ff}"
        case .callSwapBold: return "\u{f300}"
        case .callSwapLight: return "\u{f301}"
        case .callSwapRegular: return "\u{f302}"
        case .callVoicemailBold: return "\u{f303}"
        case .callVoicemailLight: return "\u{f304}"
        case .callVoicemailRegular: return "\u{f305}"
        case .callrateBold: return "\u{f306}"
        case .callrateLight: return "\u{f307}"
        case .callrateRegular: return "\u{f308}"
        case .cameraAuxBold: return "\u{f309}"
        case .cameraAuxFilled: return "\u{f30a}"
        case .cameraAuxLight: return "\u{f30b}"
        case .cameraAuxRegular: return "\u{f30c}"
        case .cameraBold: return "\u{f30d}"
        case .cameraFilled: return "\u{f30e}"
        case .cameraLight: return "\u{f30f}"
        case .cameraMutedBold: return "\u{f310}"
        case .cameraMutedCircleFilled: return "\u{f311}"
        case .cameraMutedFilled: return "\u{f312}"
        case .cameraMutedLight: return "\u{f313}"
        case .cameraMutedRegular: return "\u{f314}"
        case .cameraOnBold: return "\u{f315}"
        case .cameraOnFilled: return "\u{f316}"
        case .cameraOnLight: return "\u{f317}"
        case .cameraOnRegular: return "\u{f318}"
        case .cameraPhotoBold: return "\u{f319}"
        case .cameraPhotoFilled: return "\u{f31a}"
        case .cameraPhotoLight: return "\u{f31b}"
        case .cameraPhotoRegular: return "\u{f31c}"
        case .cameraPresenceBold: return "\u{f31d}"
        case .cameraPresenceFilled: return "\u{f31e}"
        case .cameraPresenceLight: return "\u{f31f}"
        case .cameraPresenceRegular: return "\u{f320}"
        case .cameraRegular: return "\u{f321}"
        case .cameraSwapBold: return "\u{f322}"
        case .cameraSwapLight: return "\u{f323}"
        case .cameraSwapRegular: return "\u{f324}"
        case .campaignManagementBold: return "\u{f325}"
        case .campaignManagementLight: return "\u{f326}"
        case .campaignManagementRegular: return "\u{f327}"
        case .cancelBold: return "\u{f328}"
        case .cancelFilled: return "\u{f329}"
        case .cancelLight: return "\u{f32a}"
        case .cancelRegular: return "\u{f32b}"
        case .capsLockBold: return "\u{f32c}"
        case .capsLockLight: return "\u{f32d}"
        case .capsLockRegular: return "\u{f32e}"
        case .captureRewindBold: return "\u{f32f}"
        case .captureRewindLight: return "\u{f330}"
        case .captureRewindRegular: return "\u{f331}"
        case .caroselBold: return "\u{f332}"
        case .caroselLight: return "\u{f333}"
        case .caroselRegular: return "\u{f334}"
        case .carouselTextBold: return "\u{f335}"
        case .carouselTextLight: return "\u{f336}"
        case .carouselTextRegular: return "\u{f337}"
        case .cellularBold: return "\u{f338}"
        case .cellularLight: return "\u{f339}"
        case .cellularRegular: return "\u{f33a}"
        case .centerAlignedBold: return "\u{f33b}"
        case .centerAlignedLight: return "\u{f33c}"
        case .centerAlignedRegular: return "\u{f33d}"
        case .centerBold: return "\u{f33e}"
        case .centerLight: return "\u{f33f}"
        case .centerRegular: return "\u{f340}"
        case .certificateBold: return "\u{f341}"
        case .certificateInvalidBold: return "\u{f342}"
        case .certificateInvalidLight: return "\u{f343}"
        case .certificateInvalidRegular: return "\u{f344}"
        case .certificateLight: return "\u{f345}"
        case .certificateRegular: return "\u{f346}"
        case .certifiedBold: return "\u{f347}"
        case .certifiedFilled: return "\u{f348}"
        case .certifiedLight: return "\u{f349}"
        case .certifiedRegular: return "\u{f34a}"
        case .chPSearchBold: return "\u{f34b}"
        case .chPSearchLight: return "\u{f34c}"
        case .chPSearchRegular: return "\u{f34d}"
        case .channelUssdBold: return "\u{f34e}"
        case .channelUssdFilled: return "\u{f34f}"
        case .channelUssdLight: return "\u{f350}"
        case .channelUssdRegular: return "\u{f351}"
        case .chatBold: return "\u{f352}"
        case .chatFilled: return "\u{f353}"
        case .chatGroupBold: return "\u{f354}"
        case .chatGroupFilled: return "\u{f355}"
        case .chatGroupLight: return "\u{f356}"
        case .chatGroupRegular: return "\u{f357}"
        case .chatLight: return "\u{f358}"
        case .chatMuteBold: return "\u{f359}"
        case .chatMuteLight: return "\u{f35a}"
        case .chatMuteRegular: return "\u{f35b}"
        case .chatOutboundFilled: return "\u{f35c}"
        case .chatRegular: return "\u{f35d}"
        case .checkBold: return "\u{f35e}"
        case .checkCircleBadgeFilled: return "\u{f35f}"
        case .checkCircleBold: return "\u{f360}"
        case .checkCircleFilled: return "\u{f361}"
        case .checkCircleLight: return "\u{f362}"
        case .checkCircleRegular: return "\u{f363}"
        case .checkFilled: return "\u{f364}"
        case .checkLight: return "\u{f365}"
        case .checkRegular: return "\u{f366}"
        case .checkboxGroupBold: return "\u{f367}"
        case .checkboxGroupFilled: return "\u{f368}"
        case .checkboxGroupLight: return "\u{f369}"
        case .checkboxGroupRegular: return "\u{f36a}"
        case .cleanUpBold: return "\u{f36b}"
        case .cleanUpLight: return "\u{f36c}"
        case .cleanUpRegular: return "\u{f36d}"
        case .clearBadgeFilled: return "\u{f36e}"
        case .clearBold: return "\u{f36f}"
        case .clearFilled: return "\u{f370}"
        case .clearLight: return "\u{f371}"
        case .clearRegular: return "\u{f372}"
        case .closeSpaceBold: return "\u{f373}"
        case .closeSpaceLight: return "\u{f374}"
        case .closeSpaceRegular: return "\u{f375}"
        case .closedCaptionBadgeBold: return "\u{f376}"
        case .closedCaptionBadgeFilled: return "\u{f377}"
        case .closedCaptionBadgeLight: return "\u{f378}"
        case .closedCaptionBadgeRegular: return "\u{f379}"
        case .closedCaptionsBold: return "\u{f37a}"
        case .closedCaptionsFilled: return "\u{f37b}"
        case .closedCaptionsLight: return "\u{f37c}"
        case .closedCaptionsRegular: return "\u{f37d}"
        case .cloudBold: return "\u{f37e}"
        case .cloudDownloadBold: return "\u{f37f}"
        case .cloudDownloadLight: return "\u{f380}"
        case .cloudDownloadRegular: return "\u{f381}"
        case .cloudFilled: return "\u{f382}"
        case .cloudFrameBold: return "\u{f383}"
        case .cloudFrameFilled: return "\u{f384}"
        case .cloudFrameLight: return "\u{f385}"
        case .cloudFrameRegular: return "\u{f386}"
        case .cloudLight: return "\u{f387}"
        case .cloudMutedBold: return "\u{f388}"
        case .cloudMutedFilled: return "\u{f389}"
        case .cloudMutedLight: return "\u{f38a}"
        case .cloudMutedRegular: return "\u{f38b}"
        case .cloudRegular: return "\u{f38c}"
        case .cloudUploadBold: return "\u{f38d}"
        case .cloudUploadLight: return "\u{f38e}"
        case .cloudUploadRegular: return "\u{f38f}"
        case .codeBlockBold: return "\u{f390}"
        case .codeBlockLight: return "\u{f391}"
        case .codeBlockRegular: return "\u{f392}"
        case .coffeeBold: return "\u{f393}"
        case .coffeeLight: return "\u{f394}"
        case .coffeeRegular: return "\u{f395}"
        case .colorAccessoriesBold: return "\u{f396}"
        case .colorAccessoriesFilled: return "\u{f397}"
        case .colorAccessoriesLight: return "\u{f398}"
        case .colorAccessoriesRegular: return "\u{f399}"
        case .colorBold: return "\u{f39a}"
        case .colorFilled: return "\u{f39b}"
        case .colorLight: return "\u{f39c}"
        case .colorMeetingSummaryBold: return "\u{f39d}"
        case .colorMeetingSummaryFilled: return "\u{f39e}"
        case .colorMeetingSummaryLight: return "\u{f39f}"
        case .colorMeetingSummaryRegular: return "\u{f3a0}"
        case .colorPromptsAiBold: return "\u{f3a1}"
        case .colorPromptsAiLight: return "\u{f3a2}"
        case .colorPromptsAiRegular: return "\u{f3a3}"
        case .colorRegular: return "\u{f3a4}"
        case .colorScheduleAiBold: return "\u{f3a5}"
        case .colorScheduleAiLight: return "\u{f3a6}"
        case .colorScheduleAiRegular: return "\u{f3a7}"
        case .colorSearchAiBold: return "\u{f3a8}"
        case .colorSearchAiLight: return "\u{f3a9}"
        case .colorSearchAiRegular: return "\u{f3aa}"
        case .colorSendBold: return "\u{f3ab}"
        case .colorSendFilled: return "\u{f3ac}"
        case .colorSendLight: return "\u{f3ad}"
        case .colorSendRegular: return "\u{f3ae}"
        case .colorSparkleBold: return "\u{f3af}"
        case .colorSparkleFilled: return "\u{f3b0}"
        case .colorSparkleLight: return "\u{f3b1}"
        case .colorSparkleRegular: return "\u{f3b2}"
        case .colorSummarizeAiBold: return "\u{f3b3}"
        case .colorSummarizeAiLight: return "\u{f3b4}"
        case .colorSummarizeAiRegular: return "\u{f3b5}"
        case .colourPaletteBold: return "\u{f3b6}"
        case .colourPaletteFilled: return "\u{f3b7}"
        case .colourPaletteLight: return "\u{f3b8}"
        case .colourPaletteRegular: return "\u{f3b9}"
        case .commentingBold: return "\u{f3ba}"
        case .commentingFilled: return "\u{f3bb}"
        case .commentingLight: return "\u{f3bc}"
        case .commentingRegular: return "\u{f3bd}"
        case .companyBold: return "\u{f3be}"
        case .companyLight: return "\u{f3bf}"
        case .companyRegular: return "\u{f3c0}"
        case .completedByBaseBold: return "\u{f3c1}"
        case .completedByBaseLight: return "\u{f3c2}"
        case .completedByBaseRegular: return "\u{f3c3}"
        case .completedByTimeBold: return "\u{f3c4}"
        case .completedByTimeLight: return "\u{f3c5}"
        case .completedByTimeRegular: return "\u{f3c6}"
        case .completedInteractionBold: return "\u{f3c7}"
        case .completedInteractionFilled: return "\u{f3c8}"
        case .completedInteractionLight: return "\u{f3c9}"
        case .completedInteractionRegular: return "\u{f3ca}"
        case .computerBold: return "\u{f3cb}"
        case .computerLight: return "\u{f3cc}"
        case .computerRegular: return "\u{f3cd}"
        case .conciergeBold: return "\u{f3ce}"
        case .conciergeLight: return "\u{f3cf}"
        case .conciergeRegular: return "\u{f3d0}"
        case .conditionalBlockBold: return "\u{f3d1}"
        case .conditionalBlockLight: return "\u{f3d2}"
        case .conditionalBlockRegular: return "\u{f3d3}"
        case .connectBold: return "\u{f3d4}"
        case .connectLight: return "\u{f3d5}"
        case .connectRegular: return "\u{f3d6}"
        case .contactCardBold: return "\u{f3d7}"
        case .contactCardFilled: return "\u{f3d8}"
        case .contactCardLight: return "\u{f3d9}"
        case .contactCardRegular: return "\u{f3da}"
        case .contactsBold: return "\u{f3db}"
        case .contactsFilled: return "\u{f3dc}"
        case .contactsLight: return "\u{f3dd}"
        case .contactsRegular: return "\u{f3de}"
        case .contentDownloadBold: return "\u{f3df}"
        case .contentDownloadFilled: return "\u{f3e0}"
        case .contentDownloadLight: return "\u{f3e1}"
        case .contentDownloadRegular: return "\u{f3e2}"
        case .contentShareBold: return "\u{f3e3}"
        case .contentShareLight: return "\u{f3e4}"
        case .contentShareRegular: return "\u{f3e5}"
        case .contrastBold: return "\u{f3e6}"
        case .contrastLight: return "\u{f3e7}"
        case .contrastRegular: return "\u{f3e8}"
        case .copyBold: return "\u{f3e9}"
        case .copyLight: return "\u{f3ea}"
        case .copyRegular: return "\u{f3eb}"
        case .cpuBold: return "\u{f3ec}"
        case .cpuLight: return "\u{f3ed}"
        case .cpuRegular: return "\u{f3ee}"
        case .createAGroupBold: return "\u{f3ef}"
        case .createAGroupFilled: return "\u{f3f0}"
        case .createAGroupLight: return "\u{f3f1}"
        case .createAGroupRegular: return "\u{f3f2}"
        case .cropBold: return "\u{f3f3}"
        case .cropLight: return "\u{f3f4}"
        case .cropRegular: return "\u{f3f5}"
        case .cucmConnectionBold: return "\u{f3f6}"
        case .cucmConnectionLight: return "\u{f3f7}"
        case .cucmConnectionRegular: return "\u{f3f8}"
        case .customCodeEditorBold: return "\u{f3f9}"
        case .customCodeEditorLight: return "\u{f3fa}"
        case .customCodeEditorRegular: return "\u{f3fb}"
        case .customTaskBold: return "\u{f3fc}"
        case .customTaskFilled: return "\u{f3fd}"
        case .customTaskIndBold: return "\u{f3fe}"
        case .customTaskIndFilled: return "\u{f3ff}"
        case .customTaskIndLight: return "\u{f400}"
        case .customTaskIndRegular: return "\u{f401}"
        case .customTaskLight: return "\u{f402}"
        case .customTaskRegular: return "\u{f403}"
        case .dailyRecurringScheduleBold: return "\u{f404}"
        case .dailyRecurringScheduleLight: return "\u{f405}"
        case .dailyRecurringScheduleRegular: return "\u{f406}"
        case .dashboardBold: return "\u{f407}"
        case .dashboardFilled: return "\u{f408}"
        case .dashboardLight: return "\u{f409}"
        case .dashboardRegular: return "\u{f40a}"
        case .dataManagementBold: return "\u{f40b}"
        case .dataManagementFilled: return "\u{f40c}"
        case .dataManagementLight: return "\u{f40d}"
        case .dataManagementRegular: return "\u{f40e}"
        case .dataRangeSelectionBold: return "\u{f40f}"
        case .dataRangeSelectionFilled: return "\u{f410}"
        case .dataRangeSelectionLight: return "\u{f411}"
        case .dataRangeSelectionRegular: return "\u{f412}"
        case .declineBold: return "\u{f413}"
        case .declineFilled: return "\u{f414}"
        case .declineLight: return "\u{f415}"
        case .declineRegular: return "\u{f416}"
        case .dectHandsetBold: return "\u{f417}"
        case .dectHandsetFilled: return "\u{f418}"
        case .dectHandsetLight: return "\u{f419}"
        case .dectHandsetRegular: return "\u{f41a}"
        case .deleteBold: return "\u{f41b}"
        case .deleteFilled: return "\u{f41c}"
        case .deleteLight: return "\u{f41d}"
        case .deleteRegular: return "\u{f41e}"
        case .deploymentEvaluationProgressBold: return "\u{f41f}"
        case .deploymentEvaluationProgressLight: return "\u{f420}"
        case .deploymentEvaluationProgressRegular: return "\u{f421}"
        case .deploymentProgressBold: return "\u{f422}"
        case .deploymentProgressLight: return "\u{f423}"
        case .deploymentProgressRegular: return "\u{f424}"
        case .deploymentRecurringBold: return "\u{f425}"
        case .deploymentRecurringLight: return "\u{f426}"
        case .deploymentRecurringRegular: return "\u{f427}"
        case .deploymentWinnerPendingBold: return "\u{f428}"
        case .deploymentWinnerPendingLight: return "\u{f429}"
        case .deploymentWinnerPendingRegular: return "\u{f42a}"
        case .deskPhoneBold: return "\u{f42b}"
        case .deskPhoneFilled: return "\u{f42c}"
        case .deskPhoneLight: return "\u{f42d}"
        case .deskPhoneRegular: return "\u{f42e}"
        case .deskPhoneWarningBold: return "\u{f42f}"
        case .deskPhoneWarningLight: return "\u{f430}"
        case .deskPhoneWarningRegular: return "\u{f431}"
        case .deviceConnectionBold: return "\u{f432}"
        case .deviceConnectionFilled: return "\u{f433}"
        case .deviceConnectionLight: return "\u{f434}"
        case .deviceConnectionRegular: return "\u{f435}"
        case .deviceInRoomBold: return "\u{f436}"
        case .deviceInRoomEndBold: return "\u{f437}"
        case .deviceInRoomEndLight: return "\u{f438}"
        case .deviceInRoomEndRegular: return "\u{f439}"
        case .deviceInRoomFilled: return "\u{f43a}"
        case .deviceInRoomLight: return "\u{f43b}"
        case .deviceInRoomRegular: return "\u{f43c}"
        case .deviceMutedBold: return "\u{f43d}"
        case .deviceMutedLight: return "\u{f43e}"
        case .deviceMutedRegular: return "\u{f43f}"
        case .devicePolicyControllerBold: return "\u{f440}"
        case .devicePolicyControllerLight: return "\u{f441}"
        case .devicePolicyControllerRegular: return "\u{f442}"
        case .devicesBold: return "\u{f443}"
        case .devicesFilled: return "\u{f444}"
        case .devicesLight: return "\u{f445}"
        case .devicesRegular: return "\u{f446}"
        case .diagnosticsBold: return "\u{f447}"
        case .diagnosticsLight: return "\u{f448}"
        case .diagnosticsRegular: return "\u{f449}"
        case .dialpadBold: return "\u{f44a}"
        case .dialpadLight: return "\u{f44b}"
        case .dialpadRegular: return "\u{f44c}"
        case .diamondBold: return "\u{f44d}"
        case .diamondFilled: return "\u{f44e}"
        case .diamondLight: return "\u{f44f}"
        case .diamondRegular: return "\u{f450}"
        case .directionalPadBold: return "\u{f451}"
        case .directionalPadFilled: return "\u{f452}"
        case .directionalPadLight: return "\u{f453}"
        case .directionalPadRegular: return "\u{f454}"
        case .directoryBold: return "\u{f455}"
        case .directoryLight: return "\u{f456}"
        case .directoryRegular: return "\u{f457}"
        case .disappearingPenBold: return "\u{f458}"
        case .disappearingPenLight: return "\u{f459}"
        case .disappearingPenRegular: return "\u{f45a}"
        case .discBold: return "\u{f45b}"
        case .discConnectedBold: return "\u{f45c}"
        case .discConnectedLight: return "\u{f45d}"
        case .discConnectedRegular: return "\u{f45e}"
        case .discLight: return "\u{f45f}"
        case .discRegular: return "\u{f460}"
        case .disconnectBold: return "\u{f461}"
        case .disconnectFilled: return "\u{f462}"
        case .disconnectLight: return "\u{f463}"
        case .disconnectRegular: return "\u{f464}"
        case .dislikeBold: return "\u{f465}"
        case .dislikeFilled: return "\u{f466}"
        case .dislikeLight: return "\u{f467}"
        case .dislikeRegular: return "\u{f468}"
        case .displayBold: return "\u{f469}"
        case .displayInputBold: return "\u{f46a}"
        case .displayInputLight: return "\u{f46b}"
        case .displayInputRegular: return "\u{f46c}"
        case .displayLight: return "\u{f46d}"
        case .displayRegular: return "\u{f46e}"
        case .displayWarningBold: return "\u{f46f}"
        case .displayWarningLight: return "\u{f470}"
        case .displayWarningRegular: return "\u{f471}"
        case .distributeHorizontalBold: return "\u{f472}"
        case .distributeHorizontalFilled: return "\u{f473}"
        case .distributeHorizontalLight: return "\u{f474}"
        case .distributeHorizontalRegular: return "\u{f475}"
        case .distributeVerticallyBold: return "\u{f476}"
        case .distributeVerticallyFilled: return "\u{f477}"
        case .distributeVerticallyLight: return "\u{f478}"
        case .distributeVerticallyRegular: return "\u{f479}"
        case .divideBold: return "\u{f47a}"
        case .divideFilled: return "\u{f47b}"
        case .divideLight: return "\u{f47c}"
        case .divideRegular: return "\u{f47d}"
        case .dndPresenceBadgeFilled: return "\u{f47e}"
        case .dndPresenceBold: return "\u{f47f}"
        case .dndPresenceFilled: return "\u{f480}"
        case .dndPresenceLight: return "\u{f481}"
        case .dndPresenceRegular: return "\u{f482}"
        case .dockWindowBold: return "\u{f483}"
        case .dockWindowLight: return "\u{f484}"
        case .dockWindowRegular: return "\u{f485}"
        case .documentBold: return "\u{f486}"
        case .documentCameraBold: return "\u{f487}"
        case .documentCameraDisconnectedBold: return "\u{f488}"
        case .documentCameraDisconnectedLight: return "\u{f489}"
        case .documentCameraDisconnectedRegular: return "\u{f48a}"
        case .documentCameraLight: return "\u{f48b}"
        case .documentCameraRegular: return "\u{f48c}"
        case .documentCreateBold: return "\u{f48d}"
        case .documentCreateFilled: return "\u{f48e}"
        case .documentCreateLight: return "\u{f48f}"
        case .documentCreateRegular: return "\u{f490}"
        case .documentFilled: return "\u{f491}"
        case .documentLight: return "\u{f492}"
        case .documentMoveBold: return "\u{f493}"
        case .documentMoveFilled: return "\u{f494}"
        case .documentMoveLight: return "\u{f495}"
        case .documentMoveRegular: return "\u{f496}"
        case .documentRegular: return "\u{f497}"
        case .documentShareBold: return "\u{f498}"
        case .documentShareFilled: return "\u{f499}"
        case .documentShareLight: return "\u{f49a}"
        case .documentShareRegular: return "\u{f49b}"
        case .doneAllBold: return "\u{f49c}"
        case .doneAllLight: return "\u{f49d}"
        case .doneAllRegular: return "\u{f49e}"
        case .donutChartBold: return "\u{f49f}"
        case .donutChartFilled: return "\u{f4a0}"
        case .donutChartLight: return "\u{f4a1}"
        case .donutChartRegular: return "\u{f4a2}"
        case .downloadBold: return "\u{f4a3}"
        case .downloadFilled: return "\u{f4a4}"
        case .downloadLight: return "\u{f4a5}"
        case .downloadRegular: return "\u{f4a6}"
        case .draftBold: return "\u{f4a7}"
        case .draftFilled: return "\u{f4a8}"
        case .draftIndicatorBold: return "\u{f4a9}"
        case .draftIndicatorSmallFilled: return "\u{f4aa}"
        case .draftLight: return "\u{f4ab}"
        case .draftRegular: return "\u{f4ac}"
        case .dragBold: return "\u{f4ad}"
        case .dragLight: return "\u{f4ae}"
        case .dragRegular: return "\u{f4af}"
        case .draggerHorizontalBold: return "\u{f4b0}"
        case .draggerHorizontalLight: return "\u{f4b1}"
        case .draggerHorizontalRegular: return "\u{f4b2}"
        case .draggerVerticalBold: return "\u{f4b3}"
        case .draggerVerticalLight: return "\u{f4b4}"
        case .draggerVerticalRegular: return "\u{f4b5}"
        case .driveModeBold: return "\u{f4b6}"
        case .driveModeLight: return "\u{f4b7}"
        case .driveModeRegular: return "\u{f4b8}"
        case .dropdownBold: return "\u{f4b9}"
        case .dropdownLight: return "\u{f4ba}"
        case .dropdownRegular: return "\u{f4bb}"
        case .dxEightyBold: return "\u{f4bc}"
        case .dxEightyFilled: return "\u{f4bd}"
        case .dxEightyLight: return "\u{f4be}"
        case .dxEightyRegular: return "\u{f4bf}"
        case .dxSeventyBold: return "\u{f4c0}"
        case .dxSeventyLight: return "\u{f4c1}"
        case .dxSeventyRegular: return "\u{f4c2}"
        case .editBold: return "\u{f4c3}"
        case .editFilled: return "\u{f4c4}"
        case .editLight: return "\u{f4c5}"
        case .editRegular: return "\u{f4c6}"
        case .editablePartialBold: return "\u{f4c7}"
        case .editablePartialLight: return "\u{f4c8}"
        case .editablePartialRegular: return "\u{f4c9}"
        case .educationBold: return "\u{f4ca}"
        case .educationFilled: return "\u{f4cb}"
        case .educationLight: return "\u{f4cc}"
        case .educationRegular: return "\u{f4cd}"
        case .emailBold: return "\u{f4ce}"
        case .emailDeliveredBold: return "\u{f4cf}"
        case .emailDeliveredLight: return "\u{f4d0}"
        case .emailDeliveredRegular: return "\u{f4d1}"
        case .emailFailureBold: return "\u{f4d2}"
        case .emailFailureLight: return "\u{f4d3}"
        case .emailFailureRegular: return "\u{f4d4}"
        case .emailFilled: return "\u{f4d5}"
        case .emailInviteBold: return "\u{f4d6}"
        case .emailInviteLight: return "\u{f4d7}"
        case .emailInviteRegular: return "\u{f4d8}"
        case .emailLight: return "\u{f4d9}"
        case .emailOutgoingBold: return "\u{f4da}"
        case .emailOutgoingFilled: return "\u{f4db}"
        case .emailOutgoingLight: return "\u{f4dc}"
        case .emailOutgoingRegular: return "\u{f4dd}"
        case .emailReadBold: return "\u{f4de}"
        case .emailReadFilled: return "\u{f4df}"
        case .emailReadLight: return "\u{f4e0}"
        case .emailReadRegular: return "\u{f4e1}"
        case .emailRegular: return "\u{f4e2}"
        case .emojiExcitedBold: return "\u{f4e3}"
        case .emojiExcitedFilled: return "\u{f4e4}"
        case .emojiExcitedLight: return "\u{f4e5}"
        case .emojiExcitedRegular: return "\u{f4e6}"
        case .emojiHappyBold: return "\u{f4e7}"
        case .emojiHappyFilled: return "\u{f4e8}"
        case .emojiHappyLight: return "\u{f4e9}"
        case .emojiHappyRegular: return "\u{f4ea}"
        case .emojiPassiveBold: return "\u{f4eb}"
        case .emojiPassiveFilled: return "\u{f4ec}"
        case .emojiPassiveLight: return "\u{f4ed}"
        case .emojiPassiveRegular: return "\u{f4ee}"
        case .emojiSadBold: return "\u{f4ef}"
        case .emojiSadFilled: return "\u{f4f0}"
        case .emojiSadLight: return "\u{f4f1}"
        case .emojiSadRegular: return "\u{f4f2}"
        case .emojiUnhappyBold: return "\u{f4f3}"
        case .emojiUnhappyFilled: return "\u{f4f4}"
        case .emojiUnhappyLight: return "\u{f4f5}"
        case .emojiUnhappyRegular: return "\u{f4f6}"
        case .encryptionCircleFilled: return "\u{f4f7}"
        case .encryptionFilled: return "\u{f4f8}"
        case .endRemoteDesktopControlBold: return "\u{f4f9}"
        case .endRemoteDesktopControlLight: return "\u{f4fa}"
        case .endRemoteDesktopControlRegular: return "\u{f4fb}"
        case .endToEndEncryptionCircleFilled: return "\u{f4fc}"
        case .endToEndEncryptionFilled: return "\u{f4fd}"
        case .endpointBlockedBold: return "\u{f4fe}"
        case .endpointBlockedLight: return "\u{f4ff}"
        case .endpointBlockedRegular: return "\u{f500}"
        case .endpointBold: return "\u{f501}"
        case .endpointGTwoBold: return "\u{f502}"
        case .endpointGTwoLight: return "\u{f503}"
        case .endpointGTwoRegular: return "\u{f504}"
        case .endpointGTwoSeventyBold: return "\u{f505}"
        case .endpointGTwoSeventyDualBold: return "\u{f506}"
        case .endpointGTwoSeventyDualLight: return "\u{f507}"
        case .endpointGTwoSeventyDualRegular: return "\u{f508}"
        case .endpointGTwoSeventyLight: return "\u{f509}"
        case .endpointGTwoSeventyRegular: return "\u{f50a}"
        case .endpointGTwoStandBold: return "\u{f50b}"
        case .endpointGTwoStandLight: return "\u{f50c}"
        case .endpointGTwoStandRegular: return "\u{f50d}"
        case .endpointLight: return "\u{f50e}"
        case .endpointMxEightHundredBold: return "\u{f50f}"
        case .endpointMxEightHundredDualBold: return "\u{f510}"
        case .endpointMxEightHundredDualLight: return "\u{f511}"
        case .endpointMxEightHundredDualRegular: return "\u{f512}"
        case .endpointMxEightHundredLight: return "\u{f513}"
        case .endpointMxEightHundredRegular: return "\u{f514}"
        case .endpointRegular: return "\u{f515}"
        case .endpointStandBold: return "\u{f516}"
        case .endpointStandFilled: return "\u{f517}"
        case .endpointStandLight: return "\u{f518}"
        case .endpointStandRegular: return "\u{f519}"
        case .endpointWarningBold: return "\u{f51a}"
        case .endpointWarningLight: return "\u{f51b}"
        case .endpointWarningRegular: return "\u{f51c}"
        case .enterBold: return "\u{f51d}"
        case .enterLight: return "\u{f51e}"
        case .enterRegular: return "\u{f51f}"
        case .enterRoomBold: return "\u{f520}"
        case .enterRoomFilled: return "\u{f521}"
        case .enterRoomLight: return "\u{f522}"
        case .enterRoomRegular: return "\u{f523}"
        case .eraserBold: return "\u{f524}"
        case .eraserFilled: return "\u{f525}"
        case .eraserLight: return "\u{f526}"
        case .eraserRegular: return "\u{f527}"
        case .errorLegacyBadgeFilled: return "\u{f528}"
        case .errorLegacyBold: return "\u{f529}"
        case .errorLegacyFilled: return "\u{f52a}"
        case .errorLegacyLight: return "\u{f52b}"
        case .errorLegacyRegular: return "\u{f52c}"
        case .ethernetBold: return "\u{f52d}"
        case .ethernetFilled: return "\u{f52e}"
        case .ethernetLight: return "\u{f52f}"
        case .ethernetRegular: return "\u{f530}"
        case .exchangeBold: return "\u{f531}"
        case .exchangeLight: return "\u{f532}"
        case .exchangeRegular: return "\u{f533}"
        case .exclamationBold: return "\u{f534}"
        case .exclamationLight: return "\u{f535}"
        case .exclamationRegular: return "\u{f536}"
        case .excludeBold: return "\u{f537}"
        case .excludeLight: return "\u{f538}"
        case .excludeRegular: return "\u{f539}"
        case .existingTargetGroupBold: return "\u{f53a}"
        case .existingTargetGroupLight: return "\u{f53b}"
        case .existingTargetGroupRegular: return "\u{f53c}"
        case .exitRoomBold: return "\u{f53d}"
        case .exitRoomLight: return "\u{f53e}"
        case .exitRoomRegular: return "\u{f53f}"
        case .exploreBold: return "\u{f540}"
        case .exploreLight: return "\u{f541}"
        case .exploreRegular: return "\u{f542}"
        case .exportBold: return "\u{f543}"
        case .exportLight: return "\u{f544}"
        case .exportRegular: return "\u{f545}"
        case .extensionMobilityBold: return "\u{f546}"
        case .extensionMobilityLight: return "\u{f547}"
        case .extensionMobilityRegular: return "\u{f548}"
        case .externalMessageBold: return "\u{f549}"
        case .externalMessageLight: return "\u{f54a}"
        case .externalMessageRegular: return "\u{f54b}"
        case .externalUserBold: return "\u{f54c}"
        case .externalUserLight: return "\u{f54d}"
        case .externalUserRegular: return "\u{f54e}"
        case .familyFontBold: return "\u{f54f}"
        case .familyFontLight: return "\u{f550}"
        case .familyFontRegular: return "\u{f551}"
        case .fastForwardBold: return "\u{f552}"
        case .fastForwardLight: return "\u{f553}"
        case .fastForwardRegular: return "\u{f554}"
        case .favoriteBold: return "\u{f555}"
        case .favoriteFilled: return "\u{f556}"
        case .favoriteLight: return "\u{f557}"
        case .favoriteRegular: return "\u{f558}"
        case .favoritesBold: return "\u{f559}"
        case .favoritesFilled: return "\u{f55a}"
        case .favoritesLight: return "\u{f55b}"
        case .favoritesRegular: return "\u{f55c}"
        case .fbwBold: return "\u{f55d}"
        case .fbwFilled: return "\u{f55e}"
        case .fbwLight: return "\u{f55f}"
        case .fbwRegular: return "\u{f560}"
        case .ffwBold: return "\u{f561}"
        case .ffwFilled: return "\u{f562}"
        case .ffwLight: return "\u{f563}"
        case .ffwRegular: return "\u{f564}"
        case .fileAnalysisBold: return "\u{f565}"
        case .fileAnalysisFilled: return "\u{f566}"
        case .fileAnalysisLight: return "\u{f567}"
        case .fileAnalysisRegular: return "\u{f568}"
        case .fileAnnotationBold: return "\u{f569}"
        case .fileAnnotationFilled: return "\u{f56a}"
        case .fileAnnotationLight: return "\u{f56b}"
        case .fileAnnotationRegular: return "\u{f56c}"
        case .fileAudioBold: return "\u{f56d}"
        case .fileAudioFilled: return "\u{f56e}"
        case .fileAudioLight: return "\u{f56f}"
        case .fileAudioRegular: return "\u{f570}"
        case .fileBugBold: return "\u{f571}"
        case .fileBugFilled: return "\u{f572}"
        case .fileBugLight: return "\u{f573}"
        case .fileBugRegular: return "\u{f574}"
        case .fileCodeBold: return "\u{f575}"
        case .fileCodeFilled: return "\u{f576}"
        case .fileCodeLight: return "\u{f577}"
        case .fileCodeRegular: return "\u{f578}"
        case .fileDashboardBold: return "\u{f579}"
        case .fileDashboardFilled: return "\u{f57a}"
        case .fileDashboardLight: return "\u{f57b}"
        case .fileDashboardRegular: return "\u{f57c}"
        case .fileExcelBold: return "\u{f57d}"
        case .fileExcelFilled: return "\u{f57e}"
        case .fileExcelLight: return "\u{f57f}"
        case .fileExcelRegular: return "\u{f580}"
        case .fileGraphBold: return "\u{f581}"
        case .fileGraphFilled: return "\u{f582}"
        case .fileGraphLight: return "\u{f583}"
        case .fileGraphRegular: return "\u{f584}"
        case .fileImageBold: return "\u{f585}"
        case .fileImageFilled: return "\u{f586}"
        case .fileImageLight: return "\u{f587}"
        case .fileImageNoneBold: return "\u{f588}"
        case .fileImageNoneLight: return "\u{f589}"
        case .fileImageNoneRegular: return "\u{f58a}"
        case .fileImageRegular: return "\u{f58b}"
        case .fileJsBold: return "\u{f58c}"
        case .fileJsFilled: return "\u{f58d}"
        case .fileJsLight: return "\u{f58e}"
        case .fileJsRegular: return "\u{f58f}"
        case .fileKeynoteBold: return "\u{f590}"
        case .fileKeynoteFilled: return "\u{f591}"
        case .fileKeynoteLight: return "\u{f592}"
        case .fileKeynoteRegular: return "\u{f593}"
        case .fileLockedBold: return "\u{f594}"
        case .fileLockedFilled: return "\u{f595}"
        case .fileLockedLight: return "\u{f596}"
        case .fileLockedRegular: return "\u{f597}"
        case .fileMissingBold: return "\u{f598}"
        case .fileMissingFilled: return "\u{f599}"
        case .fileMissingLight: return "\u{f59a}"
        case .fileMissingRegular: return "\u{f59b}"
        case .fileMusicBold: return "\u{f59c}"
        case .fileMusicFilled: return "\u{f59d}"
        case .fileMusicLight: return "\u{f59e}"
        case .fileMusicRegular: return "\u{f59f}"
        case .fileOnenoteBold: return "\u{f5a0}"
        case .fileOnenoteFilled: return "\u{f5a1}"
        case .fileOnenoteLight: return "\u{f5a2}"
        case .fileOnenoteRegular: return "\u{f5a3}"
        case .filePdfBold: return "\u{f5a4}"
        case .filePdfFilled: return "\u{f5a5}"
        case .filePdfLight: return "\u{f5a6}"
        case .filePdfRegular: return "\u{f5a7}"
        case .filePowerpointBold: return "\u{f5a8}"
        case .filePowerpointFilled: return "\u{f5a9}"
        case .filePowerpointLight: return "\u{f5aa}"
        case .filePowerpointRegular: return "\u{f5ab}"
        case .fileSpreadsheetBold: return "\u{f5ac}"
        case .fileSpreadsheetFilled: return "\u{f5ad}"
        case .fileSpreadsheetLight: return "\u{f5ae}"
        case .fileSpreadsheetRegular: return "\u{f5af}"
        case .fileTextBold: return "\u{f5b0}"
        case .fileTextFilled: return "\u{f5b1}"
        case .fileTextLight: return "\u{f5b2}"
        case .fileTextRegular: return "\u{f5b3}"
        case .fileThreeDBold: return "\u{f5b4}"
        case .fileThreeDFilled: return "\u{f5b5}"
        case .fileThreeDLight: return "\u{f5b6}"
        case .fileThreeDRegular: return "\u{f5b7}"
        case .fileVectorBold: return "\u{f5b8}"
        case .fileVectorFilled: return "\u{f5b9}"
        case .fileVectorLight: return "\u{f5ba}"
        case .fileVectorRegular: return "\u{f5bb}"
        case .fileVideoBold: return "\u{f5bc}"
        case .fileVideoFilled: return "\u{f5bd}"
        case .fileVideoLight: return "\u{f5be}"
        case .fileVideoRegular: return "\u{f5bf}"
        case .fileWordBold: return "\u{f5c0}"
        case .fileWordFilled: return "\u{f5c1}"
        case .fileWordLight: return "\u{f5c2}"
        case .fileWordRegular: return "\u{f5c3}"
        case .fileXmlBold: return "\u{f5c4}"
        case .fileXmlFilled: return "\u{f5c5}"
        case .fileXmlLight: return "\u{f5c6}"
        case .fileXmlRegular: return "\u{f5c7}"
        case .fileZipBold: return "\u{f5c8}"
        case .fileZipFilled: return "\u{f5c9}"
        case .fileZipLight: return "\u{f5ca}"
        case .fileZipRegular: return "\u{f5cb}"
        case .filesBold: return "\u{f5cc}"
        case .filesFilled: return "\u{f5cd}"
        case .filesLight: return "\u{f5ce}"
        case .filesRegular: return "\u{f5cf}"
        case .fillColourBold: return "\u{f5d0}"
        case .fillColourFilled: return "\u{f5d1}"
        case .fillColourLight: return "\u{f5d2}"
        case .fillColourRegular: return "\u{f5d3}"
        case .filterBold: return "\u{f5d4}"
        case .filterCircleBold: return "\u{f5d5}"
        case .filterCircleFilled: return "\u{f5d6}"
        case .filterCircleLight: return "\u{f5d7}"
        case .filterCircleRegular: return "\u{f5d8}"
        case .filterLight: return "\u{f5d9}"
        case .filterRegular: return "\u{f5da}"
        case .fitToWidthBold: return "\u{f5db}"
        case .fitToWidthLight: return "\u{f5dc}"
        case .fitToWidthRegular: return "\u{f5dd}"
        case .fitToWindowExpandBold: return "\u{f5de}"
        case .fitToWindowExpandLight: return "\u{f5df}"
        case .fitToWindowExpandRegular: return "\u{f5e0}"
        case .fitToWindowShrinkBold: return "\u{f5e1}"
        case .fitToWindowShrinkLight: return "\u{f5e2}"
        case .fitToWindowShrinkRegular: return "\u{f5e3}"
        case .flagBold: return "\u{f5e4}"
        case .flagCircleBold: return "\u{f5e5}"
        case .flagCircleFilled: return "\u{f5e6}"
        case .flagCircleLight: return "\u{f5e7}"
        case .flagCircleRegular: return "\u{f5e8}"
        case .flagFilled: return "\u{f5e9}"
        case .flagLight: return "\u{f5ea}"
        case .flagRegular: return "\u{f5eb}"
        case .folderBold: return "\u{f5ec}"
        case .folderEditBold: return "\u{f5ed}"
        case .folderEditLight: return "\u{f5ee}"
        case .folderEditRegular: return "\u{f5ef}"
        case .folderFilled: return "\u{f5f0}"
        case .folderLight: return "\u{f5f1}"
        case .folderLockBold: return "\u{f5f2}"
        case .folderLockLight: return "\u{f5f3}"
        case .folderLockRegular: return "\u{f5f4}"
        case .folderRegular: return "\u{f5f5}"
        case .folderViewBold: return "\u{f5f6}"
        case .folderViewLight: return "\u{f5f7}"
        case .folderViewRegular: return "\u{f5f8}"
        case .followUpBold: return "\u{f5f9}"
        case .followUpLight: return "\u{f5fa}"
        case .followUpRegular: return "\u{f5fb}"
        case .foodBold: return "\u{f5fc}"
        case .foodFilled: return "\u{f5fd}"
        case .foodLight: return "\u{f5fe}"
        case .foodRegular: return "\u{f5ff}"
        case .formatBold: return "\u{f600}"
        case .formatDefaultAppBold: return "\u{f601}"
        case .formatDefaultAppFilled: return "\u{f602}"
        case .formatDefaultAppLight: return "\u{f603}"
        case .formatDefaultAppRegular: return "\u{f604}"
        case .formatLight: return "\u{f605}"
        case .formatPanelControlBarBold: return "\u{f606}"
        case .formatPanelControlBarLight: return "\u{f607}"
        case .formatPanelControlBarRegular: return "\u{f608}"
        case .formatPanelControlDownBold: return "\u{f609}"
        case .formatPanelControlDownLight: return "\u{f60a}"
        case .formatPanelControlDownRegular: return "\u{f60b}"
        case .formatPanelControlLeftBold: return "\u{f60c}"
        case .formatPanelControlLeftLight: return "\u{f60d}"
        case .formatPanelControlLeftRegular: return "\u{f60e}"
        case .formatPanelControlRightBold: return "\u{f60f}"
        case .formatPanelControlRightLight: return "\u{f610}"
        case .formatPanelControlRightRegular: return "\u{f611}"
        case .formatPanelControlUpBold: return "\u{f612}"
        case .formatPanelControlUpDownBold: return "\u{f613}"
        case .formatPanelControlUpDownLight: return "\u{f614}"
        case .formatPanelControlUpDownRegular: return "\u{f615}"
        case .formatPanelControlUpLight: return "\u{f616}"
        case .formatPanelControlUpRegular: return "\u{f617}"
        case .formatRegular: return "\u{f618}"
        case .formatViewMixedBold: return "\u{f619}"
        case .formatViewMixedLight: return "\u{f61a}"
        case .formatViewMixedRegular: return "\u{f61b}"
        case .formulaBold: return "\u{f61c}"
        case .formulaFilled: return "\u{f61d}"
        case .formulaLight: return "\u{f61e}"
        case .formulaRegular: return "\u{f61f}"
        case .forwardMessageBold: return "\u{f620}"
        case .forwardMessageFilled: return "\u{f621}"
        case .forwardMessageLight: return "\u{f622}"
        case .forwardMessageRegular: return "\u{f623}"
        case .forwardTenSecBold: return "\u{f624}"
        case .forwardTenSecLight: return "\u{f625}"
        case .forwardTenSecRegular: return "\u{f626}"
        case .fourColumnBold: return "\u{f627}"
        case .fourColumnLight: return "\u{f628}"
        case .fourColumnRegular: return "\u{f629}"
        case .fourWayNavigationBold: return "\u{f62a}"
        case .fourWayNavigationLight: return "\u{f62b}"
        case .fourWayNavigationRegular: return "\u{f62c}"
        case .frequencyCappingBold: return "\u{f62d}"
        case .frequencyCappingLight: return "\u{f62e}"
        case .frequencyCappingRegular: return "\u{f62f}"
        case .fulfillmentBold: return "\u{f630}"
        case .fulfillmentLight: return "\u{f631}"
        case .fulfillmentRegular: return "\u{f632}"
        case .fullscreenBold: return "\u{f633}"
        case .fullscreenExitBold: return "\u{f634}"
        case .fullscreenExitLight: return "\u{f635}"
        case .fullscreenExitRegular: return "\u{f636}"
        case .fullscreenLight: return "\u{f637}"
        case .fullscreenRegular: return "\u{f638}"
        case .genericDeviceVideoBadgeFilled: return "\u{f639}"
        case .genericDeviceVideoBold: return "\u{f63a}"
        case .genericDeviceVideoFilled: return "\u{f63b}"
        case .genericDeviceVideoLight: return "\u{f63c}"
        case .genericDeviceVideoRegular: return "\u{f63d}"
        case .gifBold: return "\u{f63e}"
        case .gifFilled: return "\u{f63f}"
        case .gifHorizontalBold: return "\u{f640}"
        case .gifHorizontalFilled: return "\u{f641}"
        case .gifHorizontalLight: return "\u{f642}"
        case .gifHorizontalRegular: return "\u{f643}"
        case .gifLight: return "\u{f644}"
        case .gifRegular: return "\u{f645}"
        case .giftBold: return "\u{f646}"
        case .giftFilled: return "\u{f647}"
        case .giftLight: return "\u{f648}"
        case .giftRegular: return "\u{f649}"
        case .greenLeafBold: return "\u{f64a}"
        case .greenLeafFilled: return "\u{f64b}"
        case .greenLeafLight: return "\u{f64c}"
        case .greenLeafRegular: return "\u{f64d}"
        case .greenRoomBold: return "\u{f64e}"
        case .greenRoomFilled: return "\u{f64f}"
        case .greenRoomLight: return "\u{f650}"
        case .greenRoomRegular: return "\u{f651}"
        case .guestIssuerBold: return "\u{f652}"
        case .guestIssuerLight: return "\u{f653}"
        case .guestIssuerRegular: return "\u{f654}"
        case .guideBold: return "\u{f655}"
        case .guideLight: return "\u{f656}"
        case .guideRegular: return "\u{f657}"
        case .handPointerBold: return "\u{f658}"
        case .handPointerLight: return "\u{f659}"
        case .handPointerRegular: return "\u{f65a}"
        case .handlerBold: return "\u{f65b}"
        case .handlerHorizontalBold: return "\u{f65c}"
        case .handlerHorizontalLight: return "\u{f65d}"
        case .handlerHorizontalRegular: return "\u{f65e}"
        case .handlerLight: return "\u{f65f}"
        case .handlerRegular: return "\u{f660}"
        case .handsetAlertBold: return "\u{f661}"
        case .handsetAlertFilled: return "\u{f662}"
        case .handsetAlertLight: return "\u{f663}"
        case .handsetAlertRegular: return "\u{f664}"
        case .handsetBold: return "\u{f665}"
        case .handsetDownSlashBold: return "\u{f666}"
        case .handsetDownSlashFilled: return "\u{f667}"
        case .handsetDownSlashLight: return "\u{f668}"
        case .handsetDownSlashRegular: return "\u{f669}"
        case .handsetFilled: return "\u{f66a}"
        case .handsetLight: return "\u{f66b}"
        case .handsetMutedBold: return "\u{f66c}"
        case .handsetMutedFilled: return "\u{f66d}"
        case .handsetMutedLight: return "\u{f66e}"
        case .handsetMutedRegular: return "\u{f66f}"
        case .handsetRegular: return "\u{f670}"
        case .handsetsArrowLeftBold: return "\u{f671}"
        case .handsetsArrowLeftLight: return "\u{f672}"
        case .handsetsArrowLeftRegular: return "\u{f673}"
        case .handshakeBold: return "\u{f674}"
        case .handshakeLight: return "\u{f675}"
        case .handshakeRegular: return "\u{f676}"
        case .headingOneBold: return "\u{f677}"
        case .headingOneLight: return "\u{f678}"
        case .headingOneRegular: return "\u{f679}"
        case .headingThreeBold: return "\u{f67a}"
        case .headingThreeLight: return "\u{f67b}"
        case .headingThreeRegular: return "\u{f67c}"
        case .headingTwoBold: return "\u{f67d}"
        case .headingTwoLight: return "\u{f67e}"
        case .headingTwoRegular: return "\u{f67f}"
        case .headphonesBold: return "\u{f680}"
        case .headphonesFilled: return "\u{f681}"
        case .headphonesLight: return "\u{f682}"
        case .headphonesMutedBold: return "\u{f683}"
        case .headphonesMutedFilled: return "\u{f684}"
        case .headphonesMutedLight: return "\u{f685}"
        case .headphonesMutedRegular: return "\u{f686}"
        case .headphonesRegular: return "\u{f687}"
        case .headsetAlertBold: return "\u{f688}"
        case .headsetAlertLight: return "\u{f689}"
        case .headsetAlertRegular: return "\u{f68a}"
        case .headsetArrowDownBold: return "\u{f68b}"
        case .headsetArrowDownFilled: return "\u{f68c}"
        case .headsetArrowDownLight: return "\u{f68d}"
        case .headsetArrowDownRegular: return "\u{f68e}"
        case .headsetBluetoothBold: return "\u{f68f}"
        case .headsetBluetoothLight: return "\u{f690}"
        case .headsetBluetoothRegular: return "\u{f691}"
        case .headsetBold: return "\u{f692}"
        case .headsetFilled: return "\u{f693}"
        case .headsetLight: return "\u{f694}"
        case .headsetMutedBold: return "\u{f695}"
        case .headsetMutedLight: return "\u{f696}"
        case .headsetMutedRegular: return "\u{f697}"
        case .headsetPrivateBold: return "\u{f698}"
        case .headsetPrivateLight: return "\u{f699}"
        case .headsetPrivateRegular: return "\u{f69a}"
        case .headsetRegular: return "\u{f69b}"
        case .hearingBold: return "\u{f69c}"
        case .hearingImpairedBold: return "\u{f69d}"
        case .hearingImpairedLight: return "\u{f69e}"
        case .hearingImpairedRegular: return "\u{f69f}"
        case .hearingLight: return "\u{f6a0}"
        case .hearingRegular: return "\u{f6a1}"
        case .helpBold: return "\u{f6a2}"
        case .helpCircleBold: return "\u{f6a3}"
        case .helpCircleFilled: return "\u{f6a4}"
        case .helpCircleLight: return "\u{f6a5}"
        case .helpCircleRegular: return "\u{f6a6}"
        case .helpLight: return "\u{f6a7}"
        case .helpRegular: return "\u{f6a8}"
        case .helpdeskBold: return "\u{f6a9}"
        case .helpdeskFilled: return "\u{f6aa}"
        case .helpdeskLight: return "\u{f6ab}"
        case .helpdeskRegular: return "\u{f6ac}"
        case .hideBold: return "\u{f6ad}"
        case .hideFilled: return "\u{f6ae}"
        case .hideLight: return "\u{f6af}"
        case .hideRegular: return "\u{f6b0}"
        case .homeBold: return "\u{f6b1}"
        case .homeFilled: return "\u{f6b2}"
        case .homeLight: return "\u{f6b3}"
        case .homeRegular: return "\u{f6b4}"
        case .horizontalLineBold: return "\u{f6b5}"
        case .horizontalLineLight: return "\u{f6b6}"
        case .horizontalLineRegular: return "\u{f6b7}"
        case .hotelingBold: return "\u{f6b8}"
        case .hotelingFilled: return "\u{f6b9}"
        case .hotelingLight: return "\u{f6ba}"
        case .hotelingRegular: return "\u{f6bb}"
        case .humidityBold: return "\u{f6bc}"
        case .humidityLight: return "\u{f6bd}"
        case .humidityRegular: return "\u{f6be}"
        case .huntGroupBold: return "\u{f6bf}"
        case .huntGroupFilled: return "\u{f6c0}"
        case .huntGroupLight: return "\u{f6c1}"
        case .huntGroupRegular: return "\u{f6c2}"
        case .idleBold: return "\u{f6c3}"
        case .idleFilled: return "\u{f6c4}"
        case .idleLight: return "\u{f6c5}"
        case .idleRegular: return "\u{f6c6}"
        case .immediateBold: return "\u{f6c7}"
        case .immediateFilled: return "\u{f6c8}"
        case .immediateLight: return "\u{f6c9}"
        case .immediateRegular: return "\u{f6ca}"
        case .importBold: return "\u{f6cb}"
        case .importLight: return "\u{f6cc}"
        case .importRegular: return "\u{f6cd}"
        case .inCommonBold: return "\u{f6ce}"
        case .inCommonLight: return "\u{f6cf}"
        case .inCommonRegular: return "\u{f6d0}"
        case .inboxBold: return "\u{f6d1}"
        case .inboxFilled: return "\u{f6d2}"
        case .inboxLight: return "\u{f6d3}"
        case .inboxRegular: return "\u{f6d4}"
        case .includeBold: return "\u{f6d5}"
        case .includeLight: return "\u{f6d6}"
        case .includeRegular: return "\u{f6d7}"
        case .incognitoBold: return "\u{f6d8}"
        case .incognitoFilled: return "\u{f6d9}"
        case .incognitoLight: return "\u{f6da}"
        case .incognitoRegular: return "\u{f6db}"
        case .incomingCallLegacyBold: return "\u{f6dc}"
        case .incomingCallLegacyFilled: return "\u{f6dd}"
        case .incomingCallLegacyLight: return "\u{f6de}"
        case .incomingCallLegacyRegular: return "\u{f6df}"
        case .indentDecreaseBold: return "\u{f6e0}"
        case .indentDecreaseLight: return "\u{f6e1}"
        case .indentDecreaseRegular: return "\u{f6e2}"
        case .indentIncreaseBold: return "\u{f6e3}"
        case .indentIncreaseLight: return "\u{f6e4}"
        case .indentIncreaseRegular: return "\u{f6e5}"
        case .infoBadgeFilled: return "\u{f6e6}"
        case .infoCircleBold: return "\u{f6e7}"
        case .infoCircleFilled: return "\u{f6e8}"
        case .infoCircleLight: return "\u{f6e9}"
        case .infoCircleRegular: return "\u{f6ea}"
        case .infoCircleTwoBold: return "\u{f6eb}"
        case .infoCircleTwoFilled: return "\u{f6ec}"
        case .infoCircleTwoLight: return "\u{f6ed}"
        case .infoCircleTwoRegular: return "\u{f6ee}"
        case .inputBold: return "\u{f6ef}"
        case .inputDisconnectedBold: return "\u{f6f0}"
        case .inputDisconnectedLight: return "\u{f6f1}"
        case .inputDisconnectedRegular: return "\u{f6f2}"
        case .inputLight: return "\u{f6f3}"
        case .inputRegular: return "\u{f6f4}"
        case .instantScheduleBold: return "\u{f6f5}"
        case .instantScheduleFilled: return "\u{f6f6}"
        case .instantScheduleLight: return "\u{f6f7}"
        case .instantScheduleRegular: return "\u{f6f8}"
        case .integerBold: return "\u{f6f9}"
        case .integerFilled: return "\u{f6fa}"
        case .integerLight: return "\u{f6fb}"
        case .integerRegular: return "\u{f6fc}"
        case .integrationsBold: return "\u{f6fd}"
        case .integrationsFilled: return "\u{f6fe}"
        case .integrationsLight: return "\u{f6ff}"
        case .integrationsRegular: return "\u{f700}"
        case .intelligentRoutingBold: return "\u{f701}"
        case .intelligentRoutingLight: return "\u{f702}"
        case .intelligentRoutingRegular: return "\u{f703}"
        case .interactionBold: return "\u{f704}"
        case .interactionFilled: return "\u{f705}"
        case .interactionLight: return "\u{f706}"
        case .interactionRegular: return "\u{f707}"
        case .invitedUserBold: return "\u{f708}"
        case .invitedUserLight: return "\u{f709}"
        case .invitedUserRegular: return "\u{f70a}"
        case .italicBold: return "\u{f70b}"
        case .italicFilled: return "\u{f70c}"
        case .italicLight: return "\u{f70d}"
        case .italicRegular: return "\u{f70e}"
        case .joinAudioBold: return "\u{f70f}"
        case .joinAudioFilled: return "\u{f710}"
        case .joinAudioLight: return "\u{f711}"
        case .joinAudioRegular: return "\u{f712}"
        case .keepInTouchBold: return "\u{f713}"
        case .keepInTouchFilled: return "\u{f714}"
        case .keepInTouchLight: return "\u{f715}"
        case .keepInTouchRegular: return "\u{f716}"
        case .keyboardBold: return "\u{f717}"
        case .keyboardCloseBold: return "\u{f718}"
        case .keyboardCloseLight: return "\u{f719}"
        case .keyboardCloseRegular: return "\u{f71a}"
        case .keyboardLight: return "\u{f71b}"
        case .keyboardRegular: return "\u{f71c}"
        case .languageBold: return "\u{f71d}"
        case .languageFilled: return "\u{f71e}"
        case .languageLight: return "\u{f71f}"
        case .languageRegular: return "\u{f720}"
        case .laptopBold: return "\u{f721}"
        case .laptopDisconnectedBold: return "\u{f722}"
        case .laptopDisconnectedLight: return "\u{f723}"
        case .laptopDisconnectedRegular: return "\u{f724}"
        case .laptopFilled: return "\u{f725}"
        case .laptopLight: return "\u{f726}"
        case .laptopRegular: return "\u{f727}"
        case .laserPointerBold: return "\u{f728}"
        case .laserPointerCursorBlackLight: return "\u{f729}"
        case .laserPointerCursorBlueLight: return "\u{f72a}"
        case .laserPointerCursorGreenLight: return "\u{f72b}"
        case .laserPointerCursorPurpleLight: return "\u{f72c}"
        case .laserPointerCursorRedLight: return "\u{f72d}"
        case .laserPointerCursorWhiteLight: return "\u{f72e}"
        case .laserPointerCursorYellowLight: return "\u{f72f}"
        case .laserPointerFilled: return "\u{f730}"
        case .laserPointerLight: return "\u{f731}"
        case .laserPointerRegular: return "\u{f732}"
        case .launchBold: return "\u{f733}"
        case .launchFilled: return "\u{f734}"
        case .launchLight: return "\u{f735}"
        case .launchRegular: return "\u{f736}"
        case .layoutSideBySideVerticalBold: return "\u{f737}"
        case .layoutSideBySideVerticalFilled: return "\u{f738}"
        case .layoutSideBySideVerticalLight: return "\u{f739}"
        case .layoutSideBySideVerticalRegular: return "\u{f73a}"
        case .leaveBreakoutSessionBold: return "\u{f73b}"
        case .leaveBreakoutSessionLight: return "\u{f73c}"
        case .leaveBreakoutSessionRegular: return "\u{f73d}"
        case .leaveDeviceBold: return "\u{f73e}"
        case .leaveDeviceLight: return "\u{f73f}"
        case .leaveDeviceRegular: return "\u{f740}"
        case .likeBold: return "\u{f741}"
        case .likeFilled: return "\u{f742}"
        case .likeLight: return "\u{f743}"
        case .likeRegular: return "\u{f744}"
        case .linkBold: return "\u{f745}"
        case .linkLight: return "\u{f746}"
        case .linkRegular: return "\u{f747}"
        case .listBulletedBold: return "\u{f748}"
        case .listBulletedLight: return "\u{f749}"
        case .listBulletedRegular: return "\u{f74a}"
        case .listMenuBold: return "\u{f74b}"
        case .listMenuLight: return "\u{f74c}"
        case .listMenuRegular: return "\u{f74d}"
        case .listNumberedBold: return "\u{f74e}"
        case .listNumberedLight: return "\u{f74f}"
        case .listNumberedRegular: return "\u{f750}"
        case .liveBold: return "\u{f751}"
        case .liveFilled: return "\u{f752}"
        case .liveLight: return "\u{f753}"
        case .liveRegular: return "\u{f754}"
        case .locationBold: return "\u{f755}"
        case .locationFilled: return "\u{f756}"
        case .locationLight: return "\u{f757}"
        case .locationRegular: return "\u{f758}"
        case .longTextBoxBold: return "\u{f759}"
        case .longTextBoxLight: return "\u{f75a}"
        case .longTextBoxRegular: return "\u{f75b}"
        case .lowerHandBold: return "\u{f75c}"
        case .lowerHandLight: return "\u{f75d}"
        case .lowerHandRegular: return "\u{f75e}"
        case .magicPenBold: return "\u{f75f}"
        case .magicPenFilled: return "\u{f760}"
        case .magicPenLight: return "\u{f761}"
        case .magicPenRegular: return "\u{f762}"
        case .markAsUnreadBold: return "\u{f763}"
        case .markAsUnreadFilled: return "\u{f764}"
        case .markAsUnreadLight: return "\u{f765}"
        case .markAsUnreadRegular: return "\u{f766}"
        case .markdownBold: return "\u{f767}"
        case .markdownFilled: return "\u{f768}"
        case .markdownLight: return "\u{f769}"
        case .markdownRegular: return "\u{f76a}"
        case .markerBold: return "\u{f76b}"
        case .markerFilled: return "\u{f76c}"
        case .markerLight: return "\u{f76d}"
        case .markerRegular: return "\u{f76e}"
        case .maximizeBold: return "\u{f76f}"
        case .maximizeLight: return "\u{f770}"
        case .maximizeRegular: return "\u{f771}"
        case .mcpBold: return "\u{f772}"
        case .mcpFilled: return "\u{f773}"
        case .mcpLight: return "\u{f774}"
        case .mcpRegular: return "\u{f775}"
        case .mediaPlayerBold: return "\u{f776}"
        case .mediaPlayerLight: return "\u{f777}"
        case .mediaPlayerRegular: return "\u{f778}"
        case .mediaQualityGoodBold: return "\u{f779}"
        case .mediaQualityGoodFilled: return "\u{f77a}"
        case .mediaQualityGoodLight: return "\u{f77b}"
        case .mediaQualityGoodRegular: return "\u{f77c}"
        case .mediaQualityPoorBold: return "\u{f77d}"
        case .mediaQualityPoorColoredBold: return "\u{f77e}"
        case .mediaQualityPoorFilled: return "\u{f77f}"
        case .mediaQualityPoorLight: return "\u{f780}"
        case .mediaQualityPoorRegular: return "\u{f781}"
        case .mediaQualityUnstableBold: return "\u{f782}"
        case .mediaQualityUnstableColoredBold: return "\u{f783}"
        case .mediaQualityUnstableFilled: return "\u{f784}"
        case .mediaQualityUnstableLight: return "\u{f785}"
        case .mediaQualityUnstableRegular: return "\u{f786}"
        case .meetBold: return "\u{f787}"
        case .meetEndBold: return "\u{f788}"
        case .meetEndLight: return "\u{f789}"
        case .meetEndRegular: return "\u{f78a}"
        case .meetFilled: return "\u{f78b}"
        case .meetLight: return "\u{f78c}"
        case .meetRegular: return "\u{f78d}"
        case .meetingSummaryBold: return "\u{f78e}"
        case .meetingSummaryFilled: return "\u{f78f}"
        case .meetingSummaryLight: return "\u{f790}"
        case .meetingSummaryRegular: return "\u{f791}"
        case .meetingsBold: return "\u{f792}"
        case .meetingsFilled: return "\u{f793}"
        case .meetingsFocusMonthBold: return "\u{f794}"
        case .meetingsFocusMonthLight: return "\u{f795}"
        case .meetingsFocusMonthRegular: return "\u{f796}"
        case .meetingsFocusOneDayBold: return "\u{f797}"
        case .meetingsFocusOneDayLight: return "\u{f798}"
        case .meetingsFocusOneDayRegular: return "\u{f799}"
        case .meetingsFocusThreeDayBold: return "\u{f79a}"
        case .meetingsFocusThreeDayLight: return "\u{f79b}"
        case .meetingsFocusThreeDayRegular: return "\u{f79c}"
        case .meetingsFocusUpcomingBold: return "\u{f79d}"
        case .meetingsFocusUpcomingLight: return "\u{f79e}"
        case .meetingsFocusUpcomingRegular: return "\u{f79f}"
        case .meetingsLight: return "\u{f7a0}"
        case .meetingsPresenceBadgeFilled: return "\u{f7a1}"
        case .meetingsPresenceBold: return "\u{f7a2}"
        case .meetingsPresenceFilled: return "\u{f7a3}"
        case .meetingsPresenceLight: return "\u{f7a4}"
        case .meetingsPresenceRegular: return "\u{f7a5}"
        case .meetingsRegular: return "\u{f7a6}"
        case .meetingsTeamBold: return "\u{f7a7}"
        case .meetingsTeamFilled: return "\u{f7a8}"
        case .meetingsTeamLight: return "\u{f7a9}"
        case .meetingsTeamNewBold: return "\u{f7aa}"
        case .meetingsTeamNewLight: return "\u{f7ab}"
        case .meetingsTeamNewRegular: return "\u{f7ac}"
        case .meetingsTeamRegular: return "\u{f7ad}"
        case .mentionBold: return "\u{f7ae}"
        case .mentionFilled: return "\u{f7af}"
        case .mentionLight: return "\u{f7b0}"
        case .mentionRegular: return "\u{f7b1}"
        case .messageQueingBold: return "\u{f7b2}"
        case .messageQueingLight: return "\u{f7b3}"
        case .messageQueingRegular: return "\u{f7b4}"
        case .microphoneBold: return "\u{f7b5}"
        case .microphoneFilled: return "\u{f7b6}"
        case .microphoneHardMutedBold: return "\u{f7b7}"
        case .microphoneHardMutedCircleFilled: return "\u{f7b8}"
        case .microphoneHardMutedLight: return "\u{f7b9}"
        case .microphoneHardMutedRegular: return "\u{f7ba}"
        case .microphoneLight: return "\u{f7bb}"
        case .microphoneMusicModeBold: return "\u{f7bc}"
        case .microphoneMusicModeLight: return "\u{f7bd}"
        case .microphoneMusicModeOnBold: return "\u{f7be}"
        case .microphoneMusicModeOnLight: return "\u{f7bf}"
        case .microphoneMusicModeOnRegular: return "\u{f7c0}"
        case .microphoneMusicModeRegular: return "\u{f7c1}"
        case .microphoneMutedBold: return "\u{f7c2}"
        case .microphoneMutedCircleFilled: return "\u{f7c3}"
        case .microphoneMutedFilled: return "\u{f7c4}"
        case .microphoneMutedLight: return "\u{f7c5}"
        case .microphoneMutedRegular: return "\u{f7c6}"
        case .microphoneOnBold: return "\u{f7c7}"
        case .microphoneOnLight: return "\u{f7c8}"
        case .microphoneOnRegular: return "\u{f7c9}"
        case .microphoneOptAllBold: return "\u{f7ca}"
        case .microphoneOptAllLight: return "\u{f7cb}"
        case .microphoneOptAllMutedBold: return "\u{f7cc}"
        case .microphoneOptAllMutedLight: return "\u{f7cd}"
        case .microphoneOptAllMutedRegular: return "\u{f7ce}"
        case .microphoneOptAllOnBold: return "\u{f7cf}"
        case .microphoneOptAllOnLight: return "\u{f7d0}"
        case .microphoneOptAllOnRegular: return "\u{f7d1}"
        case .microphoneOptAllRegular: return "\u{f7d2}"
        case .microphoneOptMeBold: return "\u{f7d3}"
        case .microphoneOptMeLight: return "\u{f7d4}"
        case .microphoneOptMeMutedBold: return "\u{f7d5}"
        case .microphoneOptMeMutedLight: return "\u{f7d6}"
        case .microphoneOptMeMutedRegular: return "\u{f7d7}"
        case .microphoneOptMeOnBold: return "\u{f7d8}"
        case .microphoneOptMeOnLight: return "\u{f7d9}"
        case .microphoneOptMeOnRegular: return "\u{f7da}"
        case .microphoneOptMeRegular: return "\u{f7db}"
        case .microphoneRegular: return "\u{f7dc}"
        case .mindMapBold: return "\u{f7dd}"
        case .mindMapLight: return "\u{f7de}"
        case .mindMapRegular: return "\u{f7df}"
        case .minimizeBold: return "\u{f7e0}"
        case .minimizeLight: return "\u{f7e1}"
        case .minimizeRegular: return "\u{f7e2}"
        case .minusBold: return "\u{f7e3}"
        case .minusFilled: return "\u{f7e4}"
        case .minusLight: return "\u{f7e5}"
        case .minusRegular: return "\u{f7e6}"
        case .mirrorBold: return "\u{f7e7}"
        case .mirrorFilled: return "\u{f7e8}"
        case .mirrorLight: return "\u{f7e9}"
        case .mirrorRegular: return "\u{f7ea}"
        case .mmsFilled: return "\u{f7eb}"
        case .moderatorBold: return "\u{f7ec}"
        case .moderatorLight: return "\u{f7ed}"
        case .moderatorRegular: return "\u{f7ee}"
        case .monitoringBold: return "\u{f7ef}"
        case .monitoringLight: return "\u{f7f0}"
        case .monitoringRegular: return "\u{f7f1}"
        case .monthlyRecurringScheduleNodeBold: return "\u{f7f2}"
        case .monthlyRecurringScheduleNodeLight: return "\u{f7f3}"
        case .monthlyRecurringScheduleNodeRegular: return "\u{f7f4}"
        case .moreAdrBold: return "\u{f7f5}"
        case .moreAdrLight: return "\u{f7f6}"
        case .moreAdrRegular: return "\u{f7f7}"
        case .moreBold: return "\u{f7f8}"
        case .moreCircleBold: return "\u{f7f9}"
        case .moreCircleFilled: return "\u{f7fa}"
        case .moreCircleLight: return "\u{f7fb}"
        case .moreCircleRegular: return "\u{f7fc}"
        case .moreLight: return "\u{f7fd}"
        case .moreRegular: return "\u{f7fe}"
        case .mouseCursorBold: return "\u{f7ff}"
        case .mouseCursorLight: return "\u{f800}"
        case .mouseCursorRegular: return "\u{f801}"
        case .moveCallInAdrBold: return "\u{f802}"
        case .moveCallInAdrLight: return "\u{f803}"
        case .moveCallInAdrRegular: return "\u{f804}"
        case .moveCallInIphBold: return "\u{f805}"
        case .moveCallInIphLight: return "\u{f806}"
        case .moveCallInIphRegular: return "\u{f807}"
        case .moveCallInLaptopBold: return "\u{f808}"
        case .moveCallInLaptopLight: return "\u{f809}"
        case .moveCallInLaptopRegular: return "\u{f80a}"
        case .moveCallInOutAdrBold: return "\u{f80b}"
        case .moveCallInOutAdrLight: return "\u{f80c}"
        case .moveCallInOutAdrRegular: return "\u{f80d}"
        case .moveCallInOutIphBold: return "\u{f80e}"
        case .moveCallInOutIphLight: return "\u{f80f}"
        case .moveCallInOutIphRegular: return "\u{f810}"
        case .moveCallInTabletBold: return "\u{f811}"
        case .moveCallInTabletLight: return "\u{f812}"
        case .moveCallInTabletRegular: return "\u{f813}"
        case .moveCallOutAdrBold: return "\u{f814}"
        case .moveCallOutAdrLight: return "\u{f815}"
        case .moveCallOutAdrRegular: return "\u{f816}"
        case .moveCallOutIphBold: return "\u{f817}"
        case .moveCallOutIphLight: return "\u{f818}"
        case .moveCallOutIphRegular: return "\u{f819}"
        case .moveCallOutLaptopBold: return "\u{f81a}"
        case .moveCallOutLaptopLight: return "\u{f81b}"
        case .moveCallOutLaptopRegular: return "\u{f81c}"
        case .moveCallOutTabletBold: return "\u{f81d}"
        case .moveCallOutTabletLight: return "\u{f81e}"
        case .moveCallOutTabletRegular: return "\u{f81f}"
        case .moveToBottomBold: return "\u{f820}"
        case .moveToBottomFilled: return "\u{f821}"
        case .moveToBottomLight: return "\u{f822}"
        case .moveToBottomRegular: return "\u{f823}"
        case .moveToScreenBold: return "\u{f824}"
        case .moveToScreenLight: return "\u{f825}"
        case .moveToScreenRegular: return "\u{f826}"
        case .moveToTopBold: return "\u{f827}"
        case .moveToTopFilled: return "\u{f828}"
        case .moveToTopLight: return "\u{f829}"
        case .moveToTopRegular: return "\u{f82a}"
        case .multilineChartBold: return "\u{f82b}"
        case .multilineChartFilled: return "\u{f82c}"
        case .multilineChartLight: return "\u{f82d}"
        case .multilineChartRegular: return "\u{f82e}"
        case .multimediaBold: return "\u{f82f}"
        case .multimediaFilled: return "\u{f830}"
        case .multimediaLight: return "\u{f831}"
        case .multimediaRegular: return "\u{f832}"
        case .multipledDevicesBold: return "\u{f833}"
        case .multipledDevicesLight: return "\u{f834}"
        case .multipledDevicesRegular: return "\u{f835}"
        case .musicModeCircleBold: return "\u{f836}"
        case .musicModeCircleFilled: return "\u{f837}"
        case .musicModeCircleLight: return "\u{f838}"
        case .musicModeCircleRegular: return "\u{f839}"
        case .musicNoteBold: return "\u{f83a}"
        case .musicNoteFilled: return "\u{f83b}"
        case .musicNoteLight: return "\u{f83c}"
        case .musicNoteRegular: return "\u{f83d}"
        case .muteOnEntryBold: return "\u{f83e}"
        case .muteOnEntryFilled: return "\u{f83f}"
        case .muteOnEntryLight: return "\u{f840}"
        case .muteOnEntryRegular: return "\u{f841}"
        case .networkSwitchBold: return "\u{f842}"
        case .networkSwitchFilled: return "\u{f843}"
        case .networkSwitchLight: return "\u{f844}"
        case .networkSwitchRegular: return "\u{f845}"
        case .newManagerBold: return "\u{f846}"
        case .newManagerFilled: return "\u{f847}"
        case .newManagerLight: return "\u{f848}"
        case .newManagerRegular: return "\u{f849}"
        case .newTitleBold: return "\u{f84a}"
        case .newTitleLight: return "\u{f84b}"
        case .newTitleRegular: return "\u{f84c}"
        case .newVoicemailBold: return "\u{f84d}"
        case .newVoicemailLight: return "\u{f84e}"
        case .newVoicemailRegular: return "\u{f84f}"
        case .newWhiteboardBold: return "\u{f850}"
        case .newWhiteboardLight: return "\u{f851}"
        case .newWhiteboardRegular: return "\u{f852}"
        case .nextBold: return "\u{f853}"
        case .nextLight: return "\u{f854}"
        case .nextRegular: return "\u{f855}"
        case .noDevicesBold: return "\u{f856}"
        case .noDevicesLight: return "\u{f857}"
        case .noDevicesRegular: return "\u{f858}"
        case .noiseDetectedCanceledFilled: return "\u{f859}"
        case .noiseDetectedFilled: return "\u{f85a}"
        case .noiseNoneCanceledFilled: return "\u{f85b}"
        case .noiseNoneFilled: return "\u{f85c}"
        case .noiseRemovalBold: return "\u{f85d}"
        case .noiseRemovalLight: return "\u{f85e}"
        case .noiseRemovalRegular: return "\u{f85f}"
        case .noteBold: return "\u{f860}"
        case .noteFilled: return "\u{f861}"
        case .noteLight: return "\u{f862}"
        case .notePptBold: return "\u{f863}"
        case .notePptLight: return "\u{f864}"
        case .notePptRegular: return "\u{f865}"
        case .noteRegular: return "\u{f866}"
        case .notesBold: return "\u{f867}"
        case .notesFilled: return "\u{f868}"
        case .notesLight: return "\u{f869}"
        case .notesRegular: return "\u{f86a}"
        case .numberBold: return "\u{f86b}"
        case .numberLight: return "\u{f86c}"
        case .numberRegular: return "\u{f86d}"
        case .oldRemoteBold: return "\u{f86e}"
        case .oldRemoteLight: return "\u{f86f}"
        case .oldRemoteRegular: return "\u{f870}"
        case .oldTouchBold: return "\u{f871}"
        case .oldTouchLight: return "\u{f872}"
        case .oldTouchRegular: return "\u{f873}"
        case .oneColumnBold: return "\u{f874}"
        case .oneColumnLight: return "\u{f875}"
        case .oneColumnRegular: return "\u{f876}"
        case .oneTimeBold: return "\u{f877}"
        case .oneTimeLight: return "\u{f878}"
        case .oneTimeRegular: return "\u{f879}"
        case .openInFolderBold: return "\u{f87a}"
        case .openInFolderFilled: return "\u{f87b}"
        case .openInFolderLight: return "\u{f87c}"
        case .openInFolderRegular: return "\u{f87d}"
        case .openPagesBold: return "\u{f87e}"
        case .openPagesLight: return "\u{f87f}"
        case .openPagesRegular: return "\u{f880}"
        case .otherNumberBold: return "\u{f881}"
        case .otherNumberFilled: return "\u{f882}"
        case .otherNumberLight: return "\u{f883}"
        case .otherNumberRegular: return "\u{f884}"
        case .otherNumberWarningBold: return "\u{f885}"
        case .otherNumberWarningLight: return "\u{f886}"
        case .otherNumberWarningRegular: return "\u{f887}"
        case .outgoingCallLegacyBold: return "\u{f888}"
        case .outgoingCallLegacyFilled: return "\u{f889}"
        case .outgoingCallLegacyLight: return "\u{f88a}"
        case .outgoingCallLegacyRegular: return "\u{f88b}"
        case .overflowLeftBold: return "\u{f88c}"
        case .overflowLeftLight: return "\u{f88d}"
        case .overflowLeftRegular: return "\u{f88e}"
        case .overflowRightBold: return "\u{f88f}"
        case .overflowRightLight: return "\u{f890}"
        case .overflowRightRegular: return "\u{f891}"
        case .pairedCameraBold: return "\u{f892}"
        case .pairedCameraLight: return "\u{f893}"
        case .pairedCameraRegular: return "\u{f894}"
        case .pairedDeviceBold: return "\u{f895}"
        case .pairedDeviceLight: return "\u{f896}"
        case .pairedDeviceRegular: return "\u{f897}"
        case .pairedHandsetBold: return "\u{f898}"
        case .pairedHandsetLight: return "\u{f899}"
        case .pairedHandsetRegular: return "\u{f89a}"
        case .pairingBold: return "\u{f89b}"
        case .pairingLight: return "\u{f89c}"
        case .pairingRegular: return "\u{f89d}"
        case .parenthesisBold: return "\u{f89e}"
        case .parenthesisFilled: return "\u{f89f}"
        case .parenthesisLight: return "\u{f8a0}"
        case .parenthesisRegular: return "\u{f8a1}"
        case .parkedBold: return "\u{f8a2}"
        case .parkedFilled: return "\u{f8a3}"
        case .parkedLight: return "\u{f8a4}"
        case .parkedRegular: return "\u{f8a5}"
        case .parseBold: return "\u{f8a6}"
        case .parseLight: return "\u{f8a7}"
        case .parseRegular: return "\u{f8a8}"
        case .partialBold: return "\u{f8a9}"
        case .partialLight: return "\u{f8aa}"
        case .partialRegular: return "\u{f8ab}"
        case .participantAddBold: return "\u{f8ac}"
        case .participantAddLight: return "\u{f8ad}"
        case .participantAddRegular: return "\u{f8ae}"
        case .participantBlockedBold: return "\u{f8af}"
        case .participantBlockedLight: return "\u{f8b0}"
        case .participantBlockedRegular: return "\u{f8b1}"
        case .participantBold: return "\u{f8b2}"
        case .participantFilled: return "\u{f8b3}"
        case .participantLight: return "\u{f8b4}"
        case .participantListBold: return "\u{f8b5}"
        case .participantListFilled: return "\u{f8b6}"
        case .participantListLight: return "\u{f8b7}"
        case .participantListRegular: return "\u{f8b8}"
        case .participantRegular: return "\u{f8b9}"
        case .participantRemoveBold: return "\u{f8ba}"
        case .participantRemoveLight: return "\u{f8bb}"
        case .participantRemoveRegular: return "\u{f8bc}"
        case .participantSpeakerBold: return "\u{f8bd}"
        case .participantSpeakerFilled: return "\u{f8be}"
        case .participantSpeakerLight: return "\u{f8bf}"
        case .participantSpeakerRegular: return "\u{f8c0}"
        case .participantUnknownBold: return "\u{f8c1}"
        case .participantUnknownLight: return "\u{f8c2}"
        case .participantUnknownRegular: return "\u{f8c3}"
        case .passMouseBold: return "\u{f8c4}"
        case .passMouseLight: return "\u{f8c5}"
        case .passMouseRegular: return "\u{f8c6}"
        case .pauseBadgeFilled: return "\u{f8c7}"
        case .pauseBold: return "\u{f8c8}"
        case .pauseFilled: return "\u{f8c9}"
        case .pauseInteractionBold: return "\u{f8ca}"
        case .pauseInteractionFilled: return "\u{f8cb}"
        case .pauseInteractionLight: return "\u{f8cc}"
        case .pauseInteractionRegular: return "\u{f8cd}"
        case .pauseLight: return "\u{f8ce}"
        case .pauseRegular: return "\u{f8cf}"
        case .peopleAddBold: return "\u{f8d0}"
        case .peopleAddFilled: return "\u{f8d1}"
        case .peopleAddLight: return "\u{f8d2}"
        case .peopleAddRegular: return "\u{f8d3}"
        case .peopleBold: return "\u{f8d4}"
        case .peopleCircleBold: return "\u{f8d5}"
        case .peopleCircleFilled: return "\u{f8d6}"
        case .peopleCircleLight: return "\u{f8d7}"
        case .peopleCircleRegular: return "\u{f8d8}"
        case .peopleFilled: return "\u{f8d9}"
        case .peopleInsightsBold: return "\u{f8da}"
        case .peopleInsightsFilled: return "\u{f8db}"
        case .peopleInsightsLight: return "\u{f8dc}"
        case .peopleInsightsRegular: return "\u{f8dd}"
        case .peopleLight: return "\u{f8de}"
        case .peopleManageBold: return "\u{f8df}"
        case .peopleManageFilled: return "\u{f8e0}"
        case .peopleManageLight: return "\u{f8e1}"
        case .peopleManageRegular: return "\u{f8e2}"
        case .peopleRegular: return "\u{f8e3}"
        case .phoneAlertBold: return "\u{f8e4}"
        case .phoneAlertLight: return "\u{f8e5}"
        case .phoneAlertRegular: return "\u{f8e6}"
        case .phoneBadgeFilled: return "\u{f8e7}"
        case .phoneBold: return "\u{f8e8}"
        case .phoneFilled: return "\u{f8e9}"
        case .phoneLight: return "\u{f8ea}"
        case .phoneMutedBold: return "\u{f8eb}"
        case .phoneMutedLight: return "\u{f8ec}"
        case .phoneMutedRegular: return "\u{f8ed}"
        case .phonePrivateBold: return "\u{f8ee}"
        case .phonePrivateLight: return "\u{f8ef}"
        case .phonePrivateRegular: return "\u{f8f0}"
        case .phoneRegular: return "\u{f8f1}"
        case .phoneReplyAllBold: return "\u{f8f2}"
        case .phoneReplyAllLight: return "\u{f8f3}"
        case .phoneReplyAllRegular: return "\u{f8f4}"
        case .phoneReplyBold: return "\u{f8f5}"
        case .phoneReplyLight: return "\u{f8f6}"
        case .phoneReplyRegular: return "\u{f8f7}"
        case .pickerBold: return "\u{f8f8}"
        case .pickerLight: return "\u{f8f9}"
        case .pickerRegular: return "\u{f8fa}"
        case .pieChartBold: return "\u{f8fb}"
        case .pieChartFilled: return "\u{f8fc}"
        case .pieChartLight: return "\u{f8fd}"
        case .pieChartRegular: return "\u{f8fe}"
        case .pinBold: return "\u{f8ff}"
        case .pinFilled: return "\u{f900}"
        case .pinLight: return "\u{f901}"
        case .pinListActivityBold: return "\u{f902}"
        case .pinListActivityLight: return "\u{f903}"
        case .pinListActivityRegular: return "\u{f904}"
        case .pinListBold: return "\u{f905}"
        case .pinListLight: return "\u{f906}"
        case .pinListRegular: return "\u{f907}"
        case .pinMutedBold: return "\u{f908}"
        case .pinMutedFilled: return "\u{f909}"
        case .pinMutedLight: return "\u{f90a}"
        case .pinMutedRegular: return "\u{f90b}"
        case .pinRegular: return "\u{f90c}"
        case .pipBold: return "\u{f90d}"
        case .pipEnterBold: return "\u{f90e}"
        case .pipEnterLight: return "\u{f90f}"
        case .pipEnterRegular: return "\u{f910}"
        case .pipExitBold: return "\u{f911}"
        case .pipExitLight: return "\u{f912}"
        case .pipExitRegular: return "\u{f913}"
        case .pipFilled: return "\u{f914}"
        case .pipLight: return "\u{f915}"
        case .pipRegular: return "\u{f916}"
        case .placeholderBold: return "\u{f917}"
        case .placeholderFilled: return "\u{f918}"
        case .placeholderLight: return "\u{f919}"
        case .placeholderRegular: return "\u{f91a}"
        case .playBold: return "\u{f91b}"
        case .playCircleBold: return "\u{f91c}"
        case .playCircleFilled: return "\u{f91d}"
        case .playCircleLight: return "\u{f91e}"
        case .playCircleRegular: return "\u{f91f}"
        case .playFilled: return "\u{f920}"
        case .playLight: return "\u{f921}"
        case .playRegular: return "\u{f922}"
        case .plugAcBold: return "\u{f923}"
        case .plugAcLight: return "\u{f924}"
        case .plugAcRegular: return "\u{f925}"
        case .plusBold: return "\u{f926}"
        case .plusCircleBold: return "\u{f927}"
        case .plusCircleFilled: return "\u{f928}"
        case .plusCircleLight: return "\u{f929}"
        case .plusCircleRegular: return "\u{f92a}"
        case .plusLight: return "\u{f92b}"
        case .plusRegular: return "\u{f92c}"
        case .pmrBold: return "\u{f92d}"
        case .pmrFilled: return "\u{f92e}"
        case .pmrLight: return "\u{f92f}"
        case .pmrRegular: return "\u{f930}"
        case .pollBold: return "\u{f931}"
        case .pollFilled: return "\u{f932}"
        case .pollLight: return "\u{f933}"
        case .pollRegular: return "\u{f934}"
        case .popInBold: return "\u{f935}"
        case .popInLight: return "\u{f936}"
        case .popInRegular: return "\u{f937}"
        case .popOutBold: return "\u{f938}"
        case .popOutLight: return "\u{f939}"
        case .popOutRegular: return "\u{f93a}"
        case .popUpBold: return "\u{f93b}"
        case .popUpLight: return "\u{f93c}"
        case .popUpRegular: return "\u{f93d}"
        case .portraitLandscapeBold: return "\u{f93e}"
        case .portraitLandscapeLight: return "\u{f93f}"
        case .portraitLandscapeRegular: return "\u{f940}"
        case .potentialFraudBold: return "\u{f941}"
        case .potentialFraudFilled: return "\u{f942}"
        case .potentialFraudLight: return "\u{f943}"
        case .potentialFraudRegular: return "\u{f944}"
        case .powerAcBold: return "\u{f945}"
        case .powerAcLight: return "\u{f946}"
        case .powerAcRegular: return "\u{f947}"
        case .powerBold: return "\u{f948}"
        case .powerLight: return "\u{f949}"
        case .powerRegular: return "\u{f94a}"
        case .preHeaderBold: return "\u{f94b}"
        case .preHeaderLight: return "\u{f94c}"
        case .preHeaderRegular: return "\u{f94d}"
        case .premiumBold: return "\u{f94e}"
        case .premiumLight: return "\u{f94f}"
        case .premiumRegular: return "\u{f950}"
        case .presentationBold: return "\u{f951}"
        case .presentationLight: return "\u{f952}"
        case .presentationRegular: return "\u{f953}"
        case .preventDownloadBold: return "\u{f954}"
        case .preventDownloadFilled: return "\u{f955}"
        case .preventDownloadLight: return "\u{f956}"
        case .preventDownloadRegular: return "\u{f957}"
        case .primaryParticipantBold: return "\u{f958}"
        case .primaryParticipantFilled: return "\u{f959}"
        case .primaryParticipantLight: return "\u{f95a}"
        case .primaryParticipantRegular: return "\u{f95b}"
        case .printBold: return "\u{f95c}"
        case .printLight: return "\u{f95d}"
        case .printRegular: return "\u{f95e}"
        case .priorityBadgeFilled: return "\u{f95f}"
        case .priorityCircleBold: return "\u{f960}"
        case .priorityCircleFilled: return "\u{f961}"
        case .priorityCircleLight: return "\u{f962}"
        case .priorityCircleRegular: return "\u{f963}"
        case .priorityCircleTwoBold: return "\u{f964}"
        case .priorityCircleTwoFilled: return "\u{f965}"
        case .priorityCircleTwoLight: return "\u{f966}"
        case .priorityCircleTwoRegular: return "\u{f967}"
        case .priorityWaveBold: return "\u{f968}"
        case .priorityWaveLight: return "\u{f969}"
        case .priorityWaveRegular: return "\u{f96a}"
        case .privacyCircleBold: return "\u{f96b}"
        case .privacyCircleFilled: return "\u{f96c}"
        case .privacyCircleLight: return "\u{f96d}"
        case .privacyCircleRegular: return "\u{f96e}"
        case .privateBold: return "\u{f96f}"
        case .privateCircleBold: return "\u{f970}"
        case .privateCircleFilled: return "\u{f971}"
        case .privateCircleLight: return "\u{f972}"
        case .privateCircleRegular: return "\u{f973}"
        case .privateLight: return "\u{f974}"
        case .privateMeetingBold: return "\u{f975}"
        case .privateMeetingLight: return "\u{f976}"
        case .privateMeetingRegular: return "\u{f977}"
        case .privateRegular: return "\u{f978}"
        case .productDemoBold: return "\u{f979}"
        case .productDemoLight: return "\u{f97a}"
        case .productDemoRegular: return "\u{f97b}"
        case .promptsAiBold: return "\u{f97c}"
        case .promptsAiLight: return "\u{f97d}"
        case .promptsAiRegular: return "\u{f97e}"
        case .proximityBold: return "\u{f97f}"
        case .proximityLight: return "\u{f980}"
        case .proximityMutedBold: return "\u{f981}"
        case .proximityMutedLight: return "\u{f982}"
        case .proximityMutedRegular: return "\u{f983}"
        case .proximityRegular: return "\u{f984}"
        case .proximityVideoBold: return "\u{f985}"
        case .proximityVideoLight: return "\u{f986}"
        case .proximityVideoRegular: return "\u{f987}"
        case .ptoPresenceBold: return "\u{f988}"
        case .ptoPresenceFilled: return "\u{f989}"
        case .ptoPresenceLight: return "\u{f98a}"
        case .ptoPresenceRegular: return "\u{f98b}"
        case .pullCallBold: return "\u{f98c}"
        case .pullCallFilled: return "\u{f98d}"
        case .pullCallLight: return "\u{f98e}"
        case .pullCallRegular: return "\u{f98f}"
        case .purchaseOrderBold: return "\u{f990}"
        case .purchaseOrderFilled: return "\u{f991}"
        case .purchaseOrderLight: return "\u{f992}"
        case .purchaseOrderRegular: return "\u{f993}"
        case .qABold: return "\u{f994}"
        case .qAFilled: return "\u{f995}"
        case .qALight: return "\u{f996}"
        case .qARegular: return "\u{f997}"
        case .qrCodeBold: return "\u{f998}"
        case .qrCodeLight: return "\u{f999}"
        case .qrCodeRegular: return "\u{f99a}"
        case .qrCodeScanBold: return "\u{f99b}"
        case .qrCodeScanLight: return "\u{f99c}"
        case .qrCodeScanRegular: return "\u{f99d}"
        case .qualityBold: return "\u{f99e}"
        case .qualityLight: return "\u{f99f}"
        case .qualityRegular: return "\u{f9a0}"
        case .queueContactBold: return "\u{f9a1}"
        case .queueContactFilled: return "\u{f9a2}"
        case .queueContactLight: return "\u{f9a3}"
        case .queueContactRegular: return "\u{f9a4}"
        case .queuedInteractionBold: return "\u{f9a5}"
        case .queuedInteractionFilled: return "\u{f9a6}"
        case .queuedInteractionLight: return "\u{f9a7}"
        case .queuedInteractionRegular: return "\u{f9a8}"
        case .quietBold: return "\u{f9a9}"
        case .quietHoursPresenceBold: return "\u{f9aa}"
        case .quietHoursPresenceFilled: return "\u{f9ab}"
        case .quietHoursPresenceLight: return "\u{f9ac}"
        case .quietHoursPresenceRegular: return "\u{f9ad}"
        case .quietLight: return "\u{f9ae}"
        case .quietRegular: return "\u{f9af}"
        case .radioButtonGroupBold: return "\u{f9b0}"
        case .radioButtonGroupLight: return "\u{f9b1}"
        case .radioButtonGroupRegular: return "\u{f9b2}"
        case .raiseHandBold: return "\u{f9b3}"
        case .raiseHandCircleFilled: return "\u{f9b4}"
        case .raiseHandFilled: return "\u{f9b5}"
        case .raiseHandLight: return "\u{f9b6}"
        case .raiseHandRegular: return "\u{f9b7}"
        case .ramBold: return "\u{f9b8}"
        case .ramLight: return "\u{f9b9}"
        case .ramRegular: return "\u{f9ba}"
        case .reactionsBold: return "\u{f9bb}"
        case .reactionsFilled: return "\u{f9bc}"
        case .reactionsLight: return "\u{f9bd}"
        case .reactionsRegular: return "\u{f9be}"
        case .reactivateBold: return "\u{f9bf}"
        case .reactivateLight: return "\u{f9c0}"
        case .reactivateRegular: return "\u{f9c1}"
        case .receiveVoiceBold: return "\u{f9c2}"
        case .receiveVoiceFilled: return "\u{f9c3}"
        case .receiveVoiceLight: return "\u{f9c4}"
        case .receiveVoiceRegular: return "\u{f9c5}"
        case .recentsBold: return "\u{f9c6}"
        case .recentsFilled: return "\u{f9c7}"
        case .recentsLight: return "\u{f9c8}"
        case .recentsPresenceBadgeFilled: return "\u{f9c9}"
        case .recentsPresenceBold: return "\u{f9ca}"
        case .recentsPresenceFilled: return "\u{f9cb}"
        case .recentsPresenceLight: return "\u{f9cc}"
        case .recentsPresenceRegular: return "\u{f9cd}"
        case .recentsRegular: return "\u{f9ce}"
        case .recordActiveBadgeFilled: return "\u{f9cf}"
        case .recordActiveBold: return "\u{f9d0}"
        case .recordActiveFilled: return "\u{f9d1}"
        case .recordActiveLight: return "\u{f9d2}"
        case .recordActiveRegular: return "\u{f9d3}"
        case .recordBold: return "\u{f9d4}"
        case .recordFilled: return "\u{f9d5}"
        case .recordLight: return "\u{f9d6}"
        case .recordPausedBadgeFilled: return "\u{f9d7}"
        case .recordPausedBold: return "\u{f9d8}"
        case .recordPausedFilled: return "\u{f9d9}"
        case .recordPausedLight: return "\u{f9da}"
        case .recordPausedRegular: return "\u{f9db}"
        case .recordRegular: return "\u{f9dc}"
        case .recurringBold: return "\u{f9dd}"
        case .recurringLight: return "\u{f9de}"
        case .recurringOffBold: return "\u{f9df}"
        case .recurringOffLight: return "\u{f9e0}"
        case .recurringOffRegular: return "\u{f9e1}"
        case .recurringRegular: return "\u{f9e2}"
        case .redoBold: return "\u{f9e3}"
        case .redoLight: return "\u{f9e4}"
        case .redoRegular: return "\u{f9e5}"
        case .refreshBold: return "\u{f9e6}"
        case .refreshLight: return "\u{f9e7}"
        case .refreshRegular: return "\u{f9e8}"
        case .remoteDesktopControlBold: return "\u{f9e9}"
        case .remoteDesktopControlFilled: return "\u{f9ea}"
        case .remoteDesktopControlLight: return "\u{f9eb}"
        case .remoteDesktopControlRegular: return "\u{f9ec}"
        case .removeBold: return "\u{f9ed}"
        case .removeFilled: return "\u{f9ee}"
        case .removeLight: return "\u{f9ef}"
        case .removeRegular: return "\u{f9f0}"
        case .replyBold: return "\u{f9f1}"
        case .replyFilled: return "\u{f9f2}"
        case .replyLight: return "\u{f9f3}"
        case .replyListBold: return "\u{f9f4}"
        case .replyListFilled: return "\u{f9f5}"
        case .replyListLight: return "\u{f9f6}"
        case .replyListRegular: return "\u{f9f7}"
        case .replyPrivatelyBold: return "\u{f9f8}"
        case .replyPrivatelyLight: return "\u{f9f9}"
        case .replyPrivatelyRegular: return "\u{f9fa}"
        case .replyRegular: return "\u{f9fb}"
        case .resetBold: return "\u{f9fc}"
        case .resetLight: return "\u{f9fd}"
        case .resetRegular: return "\u{f9fe}"
        case .resizeCornerBold: return "\u{f9ff}"
        case .resizeCornerLight: return "\u{fa00}"
        case .resizeCornerRegular: return "\u{fa01}"
        case .responsiveMobileBold: return "\u{fa02}"
        case .responsiveMobileLight: return "\u{fa03}"
        case .responsiveMobileRegular: return "\u{fa04}"
        case .restartBold: return "\u{fa05}"
        case .restartLight: return "\u{fa06}"
        case .restartRegular: return "\u{fa07}"
        case .resumeInteractionBold: return "\u{fa08}"
        case .resumeInteractionFilled: return "\u{fa09}"
        case .resumeInteractionLight: return "\u{fa0a}"
        case .resumeInteractionRegular: return "\u{fa0b}"
        case .retrieveCallBold: return "\u{fa0c}"
        case .retrieveCallFilled: return "\u{fa0d}"
        case .retrieveCallLight: return "\u{fa0e}"
        case .retrieveCallRegular: return "\u{fa0f}"
        case .returnBold: return "\u{fa10}"
        case .returnLight: return "\u{fa11}"
        case .returnRegular: return "\u{fa12}"
        case .rewindTenSecBold: return "\u{fa13}"
        case .rewindTenSecLight: return "\u{fa14}"
        case .rewindTenSecRegular: return "\u{fa15}"
        case .ringtoneBold: return "\u{fa16}"
        case .ringtoneLight: return "\u{fa17}"
        case .ringtoneRegular: return "\u{fa18}"
        case .roomCalendarBold: return "\u{fa19}"
        case .roomCalendarLight: return "\u{fa1a}"
        case .roomCalendarRegular: return "\u{fa1b}"
        case .roomLightsBold: return "\u{fa1c}"
        case .roomLightsFilled: return "\u{fa1d}"
        case .roomLightsLight: return "\u{fa1e}"
        case .roomLightsRegular: return "\u{fa1f}"
        case .rotateContentBold: return "\u{fa20}"
        case .rotateContentFilled: return "\u{fa21}"
        case .rotateContentLight: return "\u{fa22}"
        case .rotateContentRegular: return "\u{fa23}"
        case .rssBold: return "\u{fa24}"
        case .rssFilled: return "\u{fa25}"
        case .rssLight: return "\u{fa26}"
        case .rssRegular: return "\u{fa27}"
        case .ruleBasedBold: return "\u{fa28}"
        case .ruleBasedLight: return "\u{fa29}"
        case .ruleBasedRegular: return "\u{fa2a}"
        case .rulerBold: return "\u{fa2b}"
        case .rulerFilled: return "\u{fa2c}"
        case .rulerLight: return "\u{fa2d}"
        case .rulerRegular: return "\u{fa2e}"
        case .runningApplicationBold: return "\u{fa2f}"
        case .runningApplicationFilled: return "\u{fa30}"
        case .runningApplicationLight: return "\u{fa31}"
        case .runningApplicationRegular: return "\u{fa32}"
        case .saveBold: return "\u{fa33}"
        case .saveLight: return "\u{fa34}"
        case .saveRegular: return "\u{fa35}"
        case .saveTranscriptBold: return "\u{fa36}"
        case .saveTranscriptFilled: return "\u{fa37}"
        case .saveTranscriptLight: return "\u{fa38}"
        case .saveTranscriptRegular: return "\u{fa39}"
        case .scanBold: return "\u{fa3a}"
        case .scanLight: return "\u{fa3b}"
        case .scanRegular: return "\u{fa3c}"
        case .scheduleAiBold: return "\u{fa3d}"
        case .scheduleAiLight: return "\u{fa3e}"
        case .scheduleAiRegular: return "\u{fa3f}"
        case .scheduleSendBold: return "\u{fa40}"
        case .scheduleSendFilled: return "\u{fa41}"
        case .scheduleSendLight: return "\u{fa42}"
        case .scheduleSendRegular: return "\u{fa43}"
        case .scheduleWinnerBold: return "\u{fa44}"
        case .scheduleWinnerFilled: return "\u{fa45}"
        case .scheduleWinnerLight: return "\u{fa46}"
        case .scheduleWinnerRegular: return "\u{fa47}"
        case .schedulerAvailableBold: return "\u{fa48}"
        case .schedulerAvailableLight: return "\u{fa49}"
        case .schedulerAvailableRegular: return "\u{fa4a}"
        case .schedulerNotWorkingHoursBold: return "\u{fa4b}"
        case .schedulerNotWorkingHoursLight: return "\u{fa4c}"
        case .schedulerNotWorkingHoursRegular: return "\u{fa4d}"
        case .schedulerUnavailableBold: return "\u{fa4e}"
        case .schedulerUnavailableLight: return "\u{fa4f}"
        case .schedulerUnavailableRegular: return "\u{fa50}"
        case .schedulerUnknownBold: return "\u{fa51}"
        case .schedulerUnknownLight: return "\u{fa52}"
        case .schedulerUnknownRegular: return "\u{fa53}"
        case .screenshotBold: return "\u{fa54}"
        case .screenshotDocBold: return "\u{fa55}"
        case .screenshotDocFilled: return "\u{fa56}"
        case .screenshotDocLight: return "\u{fa57}"
        case .screenshotDocRegular: return "\u{fa58}"
        case .screenshotLight: return "\u{fa59}"
        case .screenshotRegular: return "\u{fa5a}"
        case .searchAiBold: return "\u{fa5b}"
        case .searchAiLight: return "\u{fa5c}"
        case .searchAiRegular: return "\u{fa5d}"
        case .searchBold: return "\u{fa5e}"
        case .searchFilled: return "\u{fa5f}"
        case .searchLight: return "\u{fa60}"
        case .searchRegular: return "\u{fa61}"
        case .secondaryArrowBold: return "\u{fa62}"
        case .secondaryArrowLight: return "\u{fa63}"
        case .secondaryArrowRegular: return "\u{fa64}"
        case .secureCallLockBold: return "\u{fa65}"
        case .secureCallLockFilled: return "\u{fa66}"
        case .secureCallLockLight: return "\u{fa67}"
        case .secureCallLockRegular: return "\u{fa68}"
        case .secureCallShieldBold: return "\u{fa69}"
        case .secureCallShieldFilled: return "\u{fa6a}"
        case .secureCallShieldLight: return "\u{fa6b}"
        case .secureCallShieldRegular: return "\u{fa6c}"
        case .secureCircleBold: return "\u{fa6d}"
        case .secureCircleFilled: return "\u{fa6e}"
        case .secureCircleLight: return "\u{fa6f}"
        case .secureCircleRegular: return "\u{fa70}"
        case .secureLockBold: return "\u{fa71}"
        case .secureLockFilled: return "\u{fa72}"
        case .secureLockLight: return "\u{fa73}"
        case .secureLockRegular: return "\u{fa74}"
        case .segmentExcludeFilled: return "\u{fa75}"
        case .segmentFilterFilled: return "\u{fa76}"
        case .segmentIncludeFilled: return "\u{fa77}"
        case .selectAllBold: return "\u{fa78}"
        case .selectAllFilled: return "\u{fa79}"
        case .selectAllLight: return "\u{fa7a}"
        case .selectAllRegular: return "\u{fa7b}"
        case .selectionBold: return "\u{fa7c}"
        case .selectionFilled: return "\u{fa7d}"
        case .selectionLight: return "\u{fa7e}"
        case .selectionRegular: return "\u{fa7f}"
        case .sendBold: return "\u{fa80}"
        case .sendDigitsBold: return "\u{fa81}"
        case .sendDigitsFilled: return "\u{fa82}"
        case .sendDigitsLight: return "\u{fa83}"
        case .sendDigitsRegular: return "\u{fa84}"
        case .sendFilled: return "\u{fa85}"
        case .sendLight: return "\u{fa86}"
        case .sendRegular: return "\u{fa87}"
        case .sendVoiceBold: return "\u{fa88}"
        case .sendVoiceFilled: return "\u{fa89}"
        case .sendVoiceLight: return "\u{fa8a}"
        case .sendVoiceRegular: return "\u{fa8b}"
        case .serverBold: return "\u{fa8c}"
        case .serverErrorBold: return "\u{fa8d}"
        case .serverErrorLight: return "\u{fa8e}"
        case .serverErrorRegular: return "\u{fa8f}"
        case .serverLight: return "\u{fa90}"
        case .serverRegular: return "\u{fa91}"
        case .servicesBold: return "\u{fa92}"
        case .servicesLight: return "\u{fa93}"
        case .servicesRegular: return "\u{fa94}"
        case .setVariableBold: return "\u{fa95}"
        case .setVariableLight: return "\u{fa96}"
        case .setVariableRegular: return "\u{fa97}"
        case .settingsBold: return "\u{fa98}"
        case .settingsFilled: return "\u{fa99}"
        case .settingsLight: return "\u{fa9a}"
        case .settingsRegular: return "\u{fa9b}"
        case .setupAssistantBold: return "\u{fa9c}"
        case .setupAssistantLight: return "\u{fa9d}"
        case .setupAssistantRegular: return "\u{fa9e}"
        case .sftpBold: return "\u{fa9f}"
        case .sftpLight: return "\u{faa0}"
        case .sftpRegular: return "\u{faa1}"
        case .shapeCircleBold: return "\u{faa2}"
        case .shapeCircleFilled: return "\u{faa3}"
        case .shapeCircleLight: return "\u{faa4}"
        case .shapeCircleMdFilled: return "\u{faa5}"
        case .shapeCircleRegular: return "\u{faa6}"
        case .shapeCircleSmFilled: return "\u{faa7}"
        case .shapeDiagonalLineBold: return "\u{faa8}"
        case .shapeDiagonalLineLight: return "\u{faa9}"
        case .shapeDiagonalLineRegular: return "\u{faaa}"
        case .shapeDiamondBold: return "\u{faab}"
        case .shapeDiamondFilled: return "\u{faac}"
        case .shapeDiamondLight: return "\u{faad}"
        case .shapeDiamondRegular: return "\u{faae}"
        case .shapeOvalBold: return "\u{faaf}"
        case .shapeOvalLight: return "\u{fab0}"
        case .shapeOvalRegular: return "\u{fab1}"
        case .shapeSquareBold: return "\u{fab2}"
        case .shapeSquareFilled: return "\u{fab3}"
        case .shapeSquareLight: return "\u{fab4}"
        case .shapeSquareRegular: return "\u{fab5}"
        case .shapeTriangleBold: return "\u{fab6}"
        case .shapeTriangleFilled: return "\u{fab7}"
        case .shapeTriangleLight: return "\u{fab8}"
        case .shapeTriangleRegular: return "\u{fab9}"
        case .shapesBold: return "\u{faba}"
        case .shapesFilled: return "\u{fabb}"
        case .shapesLight: return "\u{fabc}"
        case .shapesRegular: return "\u{fabd}"
        case .shareCNativeAdrBold: return "\u{fabe}"
        case .shareCNativeAdrFilled: return "\u{fabf}"
        case .shareCNativeAdrLight: return "\u{fac0}"
        case .shareCNativeAdrRegular: return "\u{fac1}"
        case .shareCNativeIphBold: return "\u{fac2}"
        case .shareCNativeIphLight: return "\u{fac3}"
        case .shareCNativeIphRegular: return "\u{fac4}"
        case .shareContentOnDeviceBold: return "\u{fac5}"
        case .shareContentOnDeviceLight: return "\u{fac6}"
        case .shareContentOnDeviceRegular: return "\u{fac7}"
        case .shareScreenAddBold: return "\u{fac8}"
        case .shareScreenAddLight: return "\u{fac9}"
        case .shareScreenAddRegular: return "\u{faca}"
        case .shareScreenBadgeFilled: return "\u{facb}"
        case .shareScreenBold: return "\u{facc}"
        case .shareScreenFilled: return "\u{facd}"
        case .shareScreenLight: return "\u{face}"
        case .shareScreenRegular: return "\u{facf}"
        case .shareSpaceBold: return "\u{fad0}"
        case .shareSpaceLight: return "\u{fad1}"
        case .shareSpaceRegular: return "\u{fad2}"
        case .shieldBold: return "\u{fad3}"
        case .shieldLight: return "\u{fad4}"
        case .shieldRegular: return "\u{fad5}"
        case .shoppingCartBold: return "\u{fad6}"
        case .shoppingCartFilled: return "\u{fad7}"
        case .shoppingCartLight: return "\u{fad8}"
        case .shoppingCartRegular: return "\u{fad9}"
        case .shortTextBoxBold: return "\u{fada}"
        case .shortTextBoxLight: return "\u{fadb}"
        case .shortTextBoxRegular: return "\u{fadc}"
        case .showBold: return "\u{fadd}"
        case .showFilled: return "\u{fade}"
        case .showLight: return "\u{fadf}"
        case .showRegular: return "\u{fae0}"
        case .sidePanelBold: return "\u{fae1}"
        case .sidePanelFilled: return "\u{fae2}"
        case .sidePanelLight: return "\u{fae3}"
        case .sidePanelRegular: return "\u{fae4}"
        case .signInBold: return "\u{fae5}"
        case .signInFilled: return "\u{fae6}"
        case .signInForcedBold: return "\u{fae7}"
        case .signInForcedLight: return "\u{fae8}"
        case .signInForcedRegular: return "\u{fae9}"
        case .signInLight: return "\u{faea}"
        case .signInRegular: return "\u{faeb}"
        case .signLangIntBold: return "\u{faec}"
        case .signLangIntLight: return "\u{faed}"
        case .signLangIntRegular: return "\u{faee}"
        case .signOutBold: return "\u{faef}"
        case .signOutLight: return "\u{faf0}"
        case .signOutRegular: return "\u{faf1}"
        case .signalFourBold: return "\u{faf2}"
        case .signalFourLight: return "\u{faf3}"
        case .signalFourRegular: return "\u{faf4}"
        case .signalOneBold: return "\u{faf5}"
        case .signalOneLight: return "\u{faf6}"
        case .signalOneRegular: return "\u{faf7}"
        case .signalThreeBold: return "\u{faf8}"
        case .signalThreeLight: return "\u{faf9}"
        case .signalThreeRegular: return "\u{fafa}"
        case .signalTwoBold: return "\u{fafb}"
        case .signalTwoLight: return "\u{fafc}"
        case .signalTwoRegular: return "\u{fafd}"
        case .signalZeroBold: return "\u{fafe}"
        case .signalZeroLight: return "\u{faff}"
        case .signalZeroRegular: return "\u{fb00}"
        case .simplePromotionBold: return "\u{fb01}"
        case .simplePromotionLight: return "\u{fb02}"
        case .simplePromotionRegular: return "\u{fb03}"
        case .singleNumberReachBold: return "\u{fb04}"
        case .singleNumberReachLight: return "\u{fb05}"
        case .singleNumberReachRegular: return "\u{fb06}"
        case .sipRegistrationInProgressBold: return "\u{fb07}"
        case .sipRegistrationInProgressFilled: return "\u{fb08}"
        case .sipRegistrationInProgressLight: return "\u{fb09}"
        case .sipRegistrationInProgressRegular: return "\u{fb0a}"
        case .skipBold: return "\u{fb0b}"
        case .skipBwBold: return "\u{fb0c}"
        case .skipBwFilled: return "\u{fb0d}"
        case .skipBwLight: return "\u{fb0e}"
        case .skipBwRegular: return "\u{fb0f}"
        case .skipFwBold: return "\u{fb10}"
        case .skipFwFilled: return "\u{fb11}"
        case .skipFwLight: return "\u{fb12}"
        case .skipFwRegular: return "\u{fb13}"
        case .skipLight: return "\u{fb14}"
        case .skipRegular: return "\u{fb15}"
        case .smartAudioBold: return "\u{fb16}"
        case .smartAudioLight: return "\u{fb17}"
        case .smartAudioRegular: return "\u{fb18}"
        case .smsFilled: return "\u{fb19}"
        case .smsInboundBold: return "\u{fb1a}"
        case .smsInboundLight: return "\u{fb1b}"
        case .smsInboundRegular: return "\u{fb1c}"
        case .smsMessageBold: return "\u{fb1d}"
        case .smsMessageFilled: return "\u{fb1e}"
        case .smsMessageLight: return "\u{fb1f}"
        case .smsMessageOutgoingBold: return "\u{fb20}"
        case .smsMessageOutgoingFilled: return "\u{fb21}"
        case .smsMessageOutgoingLight: return "\u{fb22}"
        case .smsMessageOutgoingRegular: return "\u{fb23}"
        case .smsMessageRegular: return "\u{fb24}"
        case .smsMessageStartBold: return "\u{fb25}"
        case .smsMessageStartFilled: return "\u{fb26}"
        case .smsMessageStartLight: return "\u{fb27}"
        case .smsMessageStartRegular: return "\u{fb28}"
        case .smsOutgoingFilled: return "\u{fb29}"
        case .smsUnreadBold: return "\u{fb2a}"
        case .smsUnreadLight: return "\u{fb2b}"
        case .smsUnreadRegular: return "\u{fb2c}"
        case .sortAscendingBold: return "\u{fb2d}"
        case .sortAscendingLight: return "\u{fb2e}"
        case .sortAscendingRegular: return "\u{fb2f}"
        case .sortDescendingBold: return "\u{fb30}"
        case .sortDescendingLight: return "\u{fb31}"
        case .sortDescendingRegular: return "\u{fb32}"
        case .soundDefaultBold: return "\u{fb33}"
        case .soundDefaultLight: return "\u{fb34}"
        case .soundDefaultRegular: return "\u{fb35}"
        case .sparkleBold: return "\u{fb36}"
        case .sparkleFilled: return "\u{fb37}"
        case .sparkleLight: return "\u{fb38}"
        case .sparkleRegular: return "\u{fb39}"
        case .speakerBold: return "\u{fb3a}"
        case .speakerDisconnectedBold: return "\u{fb3b}"
        case .speakerDisconnectedFilled: return "\u{fb3c}"
        case .speakerDisconnectedLight: return "\u{fb3d}"
        case .speakerDisconnectedRegular: return "\u{fb3e}"
        case .speakerFilled: return "\u{fb3f}"
        case .speakerLight: return "\u{fb40}"
        case .speakerMutedBold: return "\u{fb41}"
        case .speakerMutedFilled: return "\u{fb42}"
        case .speakerMutedLight: return "\u{fb43}"
        case .speakerMutedRegular: return "\u{fb44}"
        case .speakerOffBold: return "\u{fb45}"
        case .speakerOffFilled: return "\u{fb46}"
        case .speakerOffLight: return "\u{fb47}"
        case .speakerOffRegular: return "\u{fb48}"
        case .speakerOnBold: return "\u{fb49}"
        case .speakerOnLight: return "\u{fb4a}"
        case .speakerOnRegular: return "\u{fb4b}"
        case .speakerRegular: return "\u{fb4c}"
        case .speakerTurnDownBold: return "\u{fb4d}"
        case .speakerTurnDownFilled: return "\u{fb4e}"
        case .speakerTurnDownLight: return "\u{fb4f}"
        case .speakerTurnDownRegular: return "\u{fb50}"
        case .speakerTurnUpBold: return "\u{fb51}"
        case .speakerTurnUpFilled: return "\u{fb52}"
        case .speakerTurnUpLight: return "\u{fb53}"
        case .speakerTurnUpRegular: return "\u{fb54}"
        case .speedDialBold: return "\u{fb55}"
        case .speedDialFilled: return "\u{fb56}"
        case .speedDialLight: return "\u{fb57}"
        case .speedDialRegular: return "\u{fb58}"
        case .spellCheckerBold: return "\u{fb59}"
        case .spellCheckerLight: return "\u{fb5a}"
        case .spellCheckerRegular: return "\u{fb5b}"
        case .splitViewBold: return "\u{fb5c}"
        case .splitViewLight: return "\u{fb5d}"
        case .splitViewRegular: return "\u{fb5e}"
        case .stackedAreaChartBold: return "\u{fb5f}"
        case .stackedAreaChartFilled: return "\u{fb60}"
        case .stackedAreaChartFullBold: return "\u{fb61}"
        case .stackedAreaChartFullFilled: return "\u{fb62}"
        case .stackedAreaChartFullLight: return "\u{fb63}"
        case .stackedAreaChartFullRegular: return "\u{fb64}"
        case .stackedAreaChartLight: return "\u{fb65}"
        case .stackedAreaChartRegular: return "\u{fb66}"
        case .stackedBarChartBold: return "\u{fb67}"
        case .stackedBarChartFilled: return "\u{fb68}"
        case .stackedBarChartFullBold: return "\u{fb69}"
        case .stackedBarChartFullFilled: return "\u{fb6a}"
        case .stackedBarChartFullLight: return "\u{fb6b}"
        case .stackedBarChartFullRegular: return "\u{fb6c}"
        case .stackedBarChartLight: return "\u{fb6d}"
        case .stackedBarChartRegular: return "\u{fb6e}"
        case .startChatBold: return "\u{fb6f}"
        case .startChatLight: return "\u{fb70}"
        case .startChatRegular: return "\u{fb71}"
        case .stethoscopeBold: return "\u{fb72}"
        case .stethoscopeLight: return "\u{fb73}"
        case .stethoscopeRegular: return "\u{fb74}"
        case .stickersBold: return "\u{fb75}"
        case .stickersLight: return "\u{fb76}"
        case .stickersRegular: return "\u{fb77}"
        case .stickiesBold: return "\u{fb78}"
        case .stickiesLight: return "\u{fb79}"
        case .stickiesRegular: return "\u{fb7a}"
        case .stopBold: return "\u{fb7b}"
        case .stopCircleBold: return "\u{fb7c}"
        case .stopCircleFilled: return "\u{fb7d}"
        case .stopCircleLight: return "\u{fb7e}"
        case .stopCircleRegular: return "\u{fb7f}"
        case .stopContentShareBold: return "\u{fb80}"
        case .stopContentShareLight: return "\u{fb81}"
        case .stopContentShareRegular: return "\u{fb82}"
        case .stopFilled: return "\u{fb83}"
        case .stopLight: return "\u{fb84}"
        case .stopRegular: return "\u{fb85}"
        case .storedInfoBold: return "\u{fb86}"
        case .storedInfoFilled: return "\u{fb87}"
        case .storedInfoLight: return "\u{fb88}"
        case .storedInfoRegular: return "\u{fb89}"
        case .streamingBold: return "\u{fb8a}"
        case .streamingLight: return "\u{fb8b}"
        case .streamingRegular: return "\u{fb8c}"
        case .strikethroughBold: return "\u{fb8d}"
        case .strikethroughFilled: return "\u{fb8e}"
        case .strikethroughLight: return "\u{fb8f}"
        case .strikethroughRegular: return "\u{fb90}"
        case .studioModeBold: return "\u{fb91}"
        case .studioModeLight: return "\u{fb92}"
        case .studioModeRegular: return "\u{fb93}"
        case .subscriptBold: return "\u{fb94}"
        case .subscriptLight: return "\u{fb95}"
        case .subscriptRegular: return "\u{fb96}"
        case .summarizeAiBold: return "\u{fb97}"
        case .summarizeAiLight: return "\u{fb98}"
        case .summarizeAiRegular: return "\u{fb99}"
        case .superscriptBold: return "\u{fb9a}"
        case .superscriptLight: return "\u{fb9b}"
        case .superscriptRegular: return "\u{fb9c}"
        case .surveyBold: return "\u{fb9d}"
        case .surveyFilled: return "\u{fb9e}"
        case .surveyLight: return "\u{fb9f}"
        case .surveyRegular: return "\u{fba0}"
        case .sxEightyCodecBold: return "\u{fba1}"
        case .sxEightyCodecLight: return "\u{fba2}"
        case .sxEightyCodecRegular: return "\u{fba3}"
        case .sxTenBold: return "\u{fba4}"
        case .sxTenLight: return "\u{fba5}"
        case .sxTenRegular: return "\u{fba6}"
        case .sxTwentyBold: return "\u{fba7}"
        case .sxTwentyLight: return "\u{fba8}"
        case .sxTwentyRegular: return "\u{fba9}"
        case .tableBold: return "\u{fbaa}"
        case .tableExtenderBold: return "\u{fbab}"
        case .tableExtenderFilled: return "\u{fbac}"
        case .tableExtenderLight: return "\u{fbad}"
        case .tableExtenderRegular: return "\u{fbae}"
        case .tableLight: return "\u{fbaf}"
        case .tableRegular: return "\u{fbb0}"
        case .tabletBold: return "\u{fbb1}"
        case .tabletLight: return "\u{fbb2}"
        case .tabletRegular: return "\u{fbb3}"
        case .tabsBold: return "\u{fbb4}"
        case .tabsLight: return "\u{fbb5}"
        case .tabsRegular: return "\u{fbb6}"
        case .tagBold: return "\u{fbb7}"
        case .tagLight: return "\u{fbb8}"
        case .tagRegular: return "\u{fbb9}"
        case .tapBold: return "\u{fbba}"
        case .tapFilled: return "\u{fbbb}"
        case .tapLight: return "\u{fbbc}"
        case .tapRegular: return "\u{fbbd}"
        case .telepresenceAlertBold: return "\u{fbbe}"
        case .telepresenceAlertLight: return "\u{fbbf}"
        case .telepresenceAlertMutedBold: return "\u{fbc0}"
        case .telepresenceAlertMutedLight: return "\u{fbc1}"
        case .telepresenceAlertMutedRegular: return "\u{fbc2}"
        case .telepresenceAlertRegular: return "\u{fbc3}"
        case .telepresenceBold: return "\u{fbc4}"
        case .telepresenceIxFiveThousandBold: return "\u{fbc5}"
        case .telepresenceIxFiveThousandLight: return "\u{fbc6}"
        case .telepresenceIxFiveThousandRegular: return "\u{fbc7}"
        case .telepresenceLight: return "\u{fbc8}"
        case .telepresenceMutedBold: return "\u{fbc9}"
        case .telepresenceMutedLight: return "\u{fbca}"
        case .telepresenceMutedRegular: return "\u{fbcb}"
        case .telepresencePrivateBold: return "\u{fbcc}"
        case .telepresencePrivateLight: return "\u{fbcd}"
        case .telepresencePrivateRegular: return "\u{fbce}"
        case .telepresenceRegular: return "\u{fbcf}"
        case .temperatureBold: return "\u{fbd0}"
        case .temperatureLight: return "\u{fbd1}"
        case .temperatureRegular: return "\u{fbd2}"
        case .testTubeBold: return "\u{fbd3}"
        case .testTubeFilled: return "\u{fbd4}"
        case .testTubeLight: return "\u{fbd5}"
        case .testTubeRegular: return "\u{fbd6}"
        case .textAlignCenterBold: return "\u{fbd7}"
        case .textAlignCenterFilled: return "\u{fbd8}"
        case .textAlignCenterLight: return "\u{fbd9}"
        case .textAlignCenterRegular: return "\u{fbda}"
        case .textAlignLeftBold: return "\u{fbdb}"
        case .textAlignLeftFilled: return "\u{fbdc}"
        case .textAlignLeftLight: return "\u{fbdd}"
        case .textAlignLeftRegular: return "\u{fbde}"
        case .textAlignRightBold: return "\u{fbdf}"
        case .textAlignRightFilled: return "\u{fbe0}"
        case .textAlignRightLight: return "\u{fbe1}"
        case .textAlignRightRegular: return "\u{fbe2}"
        case .textBold: return "\u{fbe3}"
        case .textBoxCursorLight: return "\u{fbe4}"
        case .textCodeBlockBold: return "\u{fbe5}"
        case .textCodeBlockLight: return "\u{fbe6}"
        case .textCodeBlockRegular: return "\u{fbe7}"
        case .textHighlightBold: return "\u{fbe8}"
        case .textHighlightFilled: return "\u{fbe9}"
        case .textHighlightLight: return "\u{fbea}"
        case .textHighlightRegular: return "\u{fbeb}"
        case .textLight: return "\u{fbec}"
        case .textRegular: return "\u{fbed}"
        case .threeColumnBold: return "\u{fbee}"
        case .threeColumnLight: return "\u{fbef}"
        case .threeColumnRegular: return "\u{fbf0}"
        case .threeDObjectBold: return "\u{fbf1}"
        case .threeDObjectLight: return "\u{fbf2}"
        case .threeDObjectRegular: return "\u{fbf3}"
        case .timeExclusionBold: return "\u{fbf4}"
        case .timeExclusionLight: return "\u{fbf5}"
        case .timeExclusionRegular: return "\u{fbf6}"
        case .timezoneBold: return "\u{fbf7}"
        case .timezoneFilled: return "\u{fbf8}"
        case .timezoneLight: return "\u{fbf9}"
        case .timezoneRegular: return "\u{fbfa}"
        case .tooFastBold: return "\u{fbfb}"
        case .tooFastLight: return "\u{fbfc}"
        case .tooFastRegular: return "\u{fbfd}"
        case .tooSlowBold: return "\u{fbfe}"
        case .tooSlowLight: return "\u{fbff}"
        case .tooSlowRegular: return "\u{fc00}"
        case .toolsBold: return "\u{fc01}"
        case .toolsFilled: return "\u{fc02}"
        case .toolsLight: return "\u{fc03}"
        case .toolsRegular: return "\u{fc04}"
        case .touchTenBold: return "\u{fc05}"
        case .touchTenLight: return "\u{fc06}"
        case .touchTenRegular: return "\u{fc07}"
        case .transcriptBold: return "\u{fc08}"
        case .transcriptFilled: return "\u{fc09}"
        case .transcriptLight: return "\u{fc0a}"
        case .transcriptRegular: return "\u{fc0b}"
        case .translateBold: return "\u{fc0c}"
        case .translateLight: return "\u{fc0d}"
        case .translateRegular: return "\u{fc0e}"
        case .translateUndoBold: return "\u{fc0f}"
        case .translateUndoLight: return "\u{fc10}"
        case .translateUndoRegular: return "\u{fc11}"
        case .trendingBold: return "\u{fc12}"
        case .trendingDownBold: return "\u{fc13}"
        case .trendingDownFilled: return "\u{fc14}"
        case .trendingDownLight: return "\u{fc15}"
        case .trendingDownRegular: return "\u{fc16}"
        case .trendingFilled: return "\u{fc17}"
        case .trendingLight: return "\u{fc18}"
        case .trendingRegular: return "\u{fc19}"
        case .trimBold: return "\u{fc1a}"
        case .trimLight: return "\u{fc1b}"
        case .trimRegular: return "\u{fc1c}"
        case .twoColumnBold: return "\u{fc1d}"
        case .twoColumnLight: return "\u{fc1e}"
        case .twoColumnRegular: return "\u{fc1f}"
        case .twoWayVoiceStreamBold: return "\u{fc20}"
        case .twoWayVoiceStreamFilled: return "\u{fc21}"
        case .twoWayVoiceStreamLight: return "\u{fc22}"
        case .twoWayVoiceStreamRegular: return "\u{fc23}"
        case .ucmCloudBold: return "\u{fc24}"
        case .ucmCloudLight: return "\u{fc25}"
        case .ucmCloudRegular: return "\u{fc26}"
        case .unblockBold: return "\u{fc27}"
        case .unblockFilled: return "\u{fc28}"
        case .unblockLight: return "\u{fc29}"
        case .unblockRegular: return "\u{fc2a}"
        case .underlineBold: return "\u{fc2b}"
        case .underlineFilled: return "\u{fc2c}"
        case .underlineLight: return "\u{fc2d}"
        case .underlineRegular: return "\u{fc2e}"
        case .undoBold: return "\u{fc2f}"
        case .undoLight: return "\u{fc30}"
        case .undoRegular: return "\u{fc31}"
        case .unlinkBold: return "\u{fc32}"
        case .unlinkLight: return "\u{fc33}"
        case .unlinkRegular: return "\u{fc34}"
        case .unreadBold: return "\u{fc35}"
        case .unreadFilled: return "\u{fc36}"
        case .unreadLight: return "\u{fc37}"
        case .unreadRegular: return "\u{fc38}"
        case .unsecureUnlockedBold: return "\u{fc39}"
        case .unsecureUnlockedFilled: return "\u{fc3a}"
        case .unsecureUnlockedLight: return "\u{fc3b}"
        case .unsecureUnlockedRegular: return "\u{fc3c}"
        case .unsortedBold: return "\u{fc3d}"
        case .unsortedLight: return "\u{fc3e}"
        case .unsortedRegular: return "\u{fc3f}"
        case .updateFileShareBold: return "\u{fc40}"
        case .updateFileShareLight: return "\u{fc41}"
        case .updateFileShareRegular: return "\u{fc42}"
        case .uploadBold: return "\u{fc43}"
        case .uploadImageBold: return "\u{fc44}"
        case .uploadImageLight: return "\u{fc45}"
        case .uploadImageRegular: return "\u{fc46}"
        case .uploadLight: return "\u{fc47}"
        case .uploadRegular: return "\u{fc48}"
        case .urgentVoicemailBold: return "\u{fc49}"
        case .urgentVoicemailFilled: return "\u{fc4a}"
        case .usbBold: return "\u{fc4b}"
        case .usbHeadsetBold: return "\u{fc4c}"
        case .usbHeadsetLight: return "\u{fc4d}"
        case .usbHeadsetMutedBold: return "\u{fc4e}"
        case .usbHeadsetMutedLight: return "\u{fc4f}"
        case .usbHeadsetMutedRegular: return "\u{fc50}"
        case .usbHeadsetRegular: return "\u{fc51}"
        case .usbLight: return "\u{fc52}"
        case .usbRegular: return "\u{fc53}"
        case .userBold: return "\u{fc54}"
        case .userDeactivateBold: return "\u{fc55}"
        case .userDeactivateLight: return "\u{fc56}"
        case .userDeactivateRegular: return "\u{fc57}"
        case .userLight: return "\u{fc58}"
        case .userRegular: return "\u{fc59}"
        case .videoBlurBold: return "\u{fc5a}"
        case .videoBlurFilled: return "\u{fc5b}"
        case .videoBlurLight: return "\u{fc5c}"
        case .videoBlurRegular: return "\u{fc5d}"
        case .videoBold: return "\u{fc5e}"
        case .videoEffectBold: return "\u{fc5f}"
        case .videoEffectFilled: return "\u{fc60}"
        case .videoEffectLight: return "\u{fc61}"
        case .videoEffectRegular: return "\u{fc62}"
        case .videoFilled: return "\u{fc63}"
        case .videoLayoutBold: return "\u{fc64}"
        case .videoLayoutCustomBold: return "\u{fc65}"
        case .videoLayoutCustomFilled: return "\u{fc66}"
        case .videoLayoutCustomLight: return "\u{fc67}"
        case .videoLayoutCustomRegular: return "\u{fc68}"
        case .videoLayoutEqualBold: return "\u{fc69}"
        case .videoLayoutEqualDualBold: return "\u{fc6a}"
        case .videoLayoutEqualDualLight: return "\u{fc6b}"
        case .videoLayoutEqualDualRegular: return "\u{fc6c}"
        case .videoLayoutEqualFilled: return "\u{fc6d}"
        case .videoLayoutEqualLight: return "\u{fc6e}"
        case .videoLayoutEqualRegular: return "\u{fc6f}"
        case .videoLayoutFilled: return "\u{fc70}"
        case .videoLayoutLight: return "\u{fc71}"
        case .videoLayoutOverlayBold: return "\u{fc72}"
        case .videoLayoutOverlayFilled: return "\u{fc73}"
        case .videoLayoutOverlayLight: return "\u{fc74}"
        case .videoLayoutOverlayRegular: return "\u{fc75}"
        case .videoLayoutPresentationBold: return "\u{fc76}"
        case .videoLayoutPresentationFilled: return "\u{fc77}"
        case .videoLayoutPresentationLight: return "\u{fc78}"
        case .videoLayoutPresentationRegular: return "\u{fc79}"
        case .videoLayoutPresenterDominantBold: return "\u{fc7a}"
        case .videoLayoutPresenterDominantLight: return "\u{fc7b}"
        case .videoLayoutPresenterDominantRegular: return "\u{fc7c}"
        case .videoLayoutProminentBold: return "\u{fc7d}"
        case .videoLayoutProminentFilled: return "\u{fc7e}"
        case .videoLayoutProminentLight: return "\u{fc7f}"
        case .videoLayoutProminentRegular: return "\u{fc80}"
        case .videoLayoutRegular: return "\u{fc81}"
        case .videoLayoutShareDominantBold: return "\u{fc82}"
        case .videoLayoutShareDominantLight: return "\u{fc83}"
        case .videoLayoutShareDominantRegular: return "\u{fc84}"
        case .videoLayoutSingleBold: return "\u{fc85}"
        case .videoLayoutSingleFilled: return "\u{fc86}"
        case .videoLayoutSingleLight: return "\u{fc87}"
        case .videoLayoutSingleRegular: return "\u{fc88}"
        case .videoLayoutSpeakerBold: return "\u{fc89}"
        case .videoLayoutSpeakerFilled: return "\u{fc8a}"
        case .videoLayoutSpeakerLight: return "\u{fc8b}"
        case .videoLayoutSpeakerRegular: return "\u{fc8c}"
        case .videoLayoutStackBold: return "\u{fc8d}"
        case .videoLayoutStackFilled: return "\u{fc8e}"
        case .videoLayoutStackLight: return "\u{fc8f}"
        case .videoLayoutStackRegular: return "\u{fc90}"
        case .videoLayoutVideoDominantBold: return "\u{fc91}"
        case .videoLayoutVideoDominantFilled: return "\u{fc92}"
        case .videoLayoutVideoDominantLight: return "\u{fc93}"
        case .videoLayoutVideoDominantRegular: return "\u{fc94}"
        case .videoLight: return "\u{fc95}"
        case .videoPlusBold: return "\u{fc96}"
        case .videoPlusFilled: return "\u{fc97}"
        case .videoPlusLight: return "\u{fc98}"
        case .videoPlusRegular: return "\u{fc99}"
        case .videoRegular: return "\u{fc9a}"
        case .videoSpeakerTrackBold: return "\u{fc9b}"
        case .videoSpeakerTrackFilled: return "\u{fc9c}"
        case .videoSpeakerTrackLight: return "\u{fc9d}"
        case .videoSpeakerTrackRegular: return "\u{fc9e}"
        case .viewAllBold: return "\u{fc9f}"
        case .viewAllLight: return "\u{fca0}"
        case .viewAllRegular: return "\u{fca1}"
        case .viewListBold: return "\u{fca2}"
        case .viewListFilled: return "\u{fca3}"
        case .viewListLight: return "\u{fca4}"
        case .viewListRegular: return "\u{fca5}"
        case .viewStackedBold: return "\u{fca6}"
        case .viewStackedFilled: return "\u{fca7}"
        case .viewStackedLight: return "\u{fca8}"
        case .viewStackedRegular: return "\u{fca9}"
        case .viewThumbnailBold: return "\u{fcaa}"
        case .viewThumbnailFilled: return "\u{fcab}"
        case .viewThumbnailLight: return "\u{fcac}"
        case .viewThumbnailRegular: return "\u{fcad}"
        case .visionproBold: return "\u{fcae}"
        case .visionproFilled: return "\u{fcaf}"
        case .visionproLight: return "\u{fcb0}"
        case .visionproMoveCallInBold: return "\u{fcb1}"
        case .visionproMoveCallInFilled: return "\u{fcb2}"
        case .visionproMoveCallInLight: return "\u{fcb3}"
        case .visionproMoveCallInOutBold: return "\u{fcb4}"
        case .visionproMoveCallInOutFilled: return "\u{fcb5}"
        case .visionproMoveCallInOutLight: return "\u{fcb6}"
        case .visionproMoveCallInOutRegular: return "\u{fcb7}"
        case .visionproMoveCallInRegular: return "\u{fcb8}"
        case .visionproMoveCallOutBold: return "\u{fcb9}"
        case .visionproMoveCallOutFilled: return "\u{fcba}"
        case .visionproMoveCallOutLight: return "\u{fcbb}"
        case .visionproMoveCallOutRegular: return "\u{fcbc}"
        case .visionproRegular: return "\u{fcbd}"
        case .voicemailBold: return "\u{fcbe}"
        case .voicemailFilled: return "\u{fcbf}"
        case .voicemailLight: return "\u{fcc0}"
        case .voicemailRegular: return "\u{fcc1}"
        case .vpnBold: return "\u{fcc2}"
        case .vpnFilled: return "\u{fcc3}"
        case .vpnLight: return "\u{fcc4}"
        case .vpnRegular: return "\u{fcc5}"
        case .vscBold: return "\u{fcc6}"
        case .vscLight: return "\u{fcc7}"
        case .vscRegular: return "\u{fcc8}"
        case .waffleMenuBold: return "\u{fcc9}"
        case .waffleMenuLight: return "\u{fcca}"
        case .waffleMenuRegular: return "\u{fccb}"
        case .waitingRoomBold: return "\u{fccc}"
        case .waitingRoomLight: return "\u{fccd}"
        case .waitingRoomRegular: return "\u{fcce}"
        case .wallpaperBold: return "\u{fccf}"
        case .wallpaperLight: return "\u{fcd0}"
        case .wallpaperRegular: return "\u{fcd1}"
        case .warningBadgeFilled: return "\u{fcd2}"
        case .warningBold: return "\u{fcd3}"
        case .warningFilled: return "\u{fcd4}"
        case .warningLight: return "\u{fcd5}"
        case .warningRegular: return "\u{fcd6}"
        case .webexBoardBold: return "\u{fcd7}"
        case .webexBoardLight: return "\u{fcd8}"
        case .webexBoardRegular: return "\u{fcd9}"
        case .webexCodecPlusBold: return "\u{fcda}"
        case .webexCodecPlusLight: return "\u{fcdb}"
        case .webexCodecPlusRegular: return "\u{fcdc}"
        case .webexDeskCameraBold: return "\u{fcdd}"
        case .webexDeskCameraLight: return "\u{fcde}"
        case .webexDeskCameraRegular: return "\u{fcdf}"
        case .webexHelixBold: return "\u{fce0}"
        case .webexHelixLight: return "\u{fce1}"
        case .webexHelixRegular: return "\u{fce2}"
        case .webexMeetingsBold: return "\u{fce3}"
        case .webexMeetingsFilled: return "\u{fce4}"
        case .webexMeetingsLight: return "\u{fce5}"
        case .webexMeetingsRegular: return "\u{fce6}"
        case .webexQuadCameraBold: return "\u{fce7}"
        case .webexQuadCameraLight: return "\u{fce8}"
        case .webexQuadCameraRegular: return "\u{fce9}"
        case .webexRoomKitBold: return "\u{fcea}"
        case .webexRoomKitLight: return "\u{fceb}"
        case .webexRoomKitPlusBold: return "\u{fcec}"
        case .webexRoomKitPlusLight: return "\u{fced}"
        case .webexRoomKitPlusRegular: return "\u{fcee}"
        case .webexRoomKitRegular: return "\u{fcef}"
        case .webexShareBold: return "\u{fcf0}"
        case .webexShareLight: return "\u{fcf1}"
        case .webexShareRegular: return "\u{fcf2}"
        case .webexTeamsBold: return "\u{fcf3}"
        case .webexTeamsFilled: return "\u{fcf4}"
        case .webexTeamsLight: return "\u{fcf5}"
        case .webexTeamsNewBold: return "\u{fcf6}"
        case .webexTeamsNewFilled: return "\u{fcf7}"
        case .webexTeamsNewLight: return "\u{fcf8}"
        case .webexTeamsNewRegular: return "\u{fcf9}"
        case .webexTeamsRegular: return "\u{fcfa}"
        case .webexTeamsRemoveBold: return "\u{fcfb}"
        case .webexTeamsRemoveLight: return "\u{fcfc}"
        case .webexTeamsRemoveRegular: return "\u{fcfd}"
        case .webhookBold: return "\u{fcfe}"
        case .webhookLight: return "\u{fcff}"
        case .webhookRegular: return "\u{fd00}"
        case .webinarBold: return "\u{fd01}"
        case .webinarFilled: return "\u{fd02}"
        case .webinarLight: return "\u{fd03}"
        case .webinarRegular: return "\u{fd04}"
        case .weeklyRecurringScheduleBold: return "\u{fd05}"
        case .weeklyRecurringScheduleLight: return "\u{fd06}"
        case .weeklyRecurringScheduleRegular: return "\u{fd07}"
        case .whisperAnnouncementBold: return "\u{fd08}"
        case .whisperAnnouncementFilled: return "\u{fd09}"
        case .whisperAnnouncementLight: return "\u{fd0a}"
        case .whisperAnnouncementRegular: return "\u{fd0b}"
        case .whisperCoachBold: return "\u{fd0c}"
        case .whisperCoachFilled: return "\u{fd0d}"
        case .whisperCoachLight: return "\u{fd0e}"
        case .whisperCoachRegular: return "\u{fd0f}"
        case .whiteboardBold: return "\u{fd10}"
        case .whiteboardContentBold: return "\u{fd11}"
        case .whiteboardContentFilled: return "\u{fd12}"
        case .whiteboardContentLight: return "\u{fd13}"
        case .whiteboardContentRegular: return "\u{fd14}"
        case .whiteboardFilled: return "\u{fd15}"
        case .whiteboardLight: return "\u{fd16}"
        case .whiteboardRegular: return "\u{fd17}"
        case .widgetBold: return "\u{fd18}"
        case .widgetFilled: return "\u{fd19}"
        case .widgetLight: return "\u{fd1a}"
        case .widgetRegular: return "\u{fd1b}"
        case .wifiBold: return "\u{fd1c}"
        case .wifiErrorBold: return "\u{fd1d}"
        case .wifiErrorLight: return "\u{fd1e}"
        case .wifiErrorRegular: return "\u{fd1f}"
        case .wifiLight: return "\u{fd20}"
        case .wifiRegular: return "\u{fd21}"
        case .wifiSignalGoodBold: return "\u{fd22}"
        case .wifiSignalGoodLight: return "\u{fd23}"
        case .wifiSignalGoodRegular: return "\u{fd24}"
        case .wifiSignalPoorBold: return "\u{fd25}"
        case .wifiSignalPoorLight: return "\u{fd26}"
        case .wifiSignalPoorRegular: return "\u{fd27}"
        case .wifiSignalUnstableBold: return "\u{fd28}"
        case .wifiSignalUnstableLight: return "\u{fd29}"
        case .wifiSignalUnstableRegular: return "\u{fd2a}"
        case .windowCornerScrubBold: return "\u{fd2b}"
        case .windowCornerScrubLight: return "\u{fd2c}"
        case .windowCornerScrubRegular: return "\u{fd2d}"
        case .windowRightCornerScrubBold: return "\u{fd2e}"
        case .windowRightCornerScrubLight: return "\u{fd2f}"
        case .windowRightCornerScrubRegular: return "\u{fd30}"
        case .windowVerticalScrubBold: return "\u{fd31}"
        case .windowVerticalScrubLight: return "\u{fd32}"
        case .windowVerticalScrubRegular: return "\u{fd33}"
        case .workflowDeploymentsBold: return "\u{fd34}"
        case .workflowDeploymentsFilled: return "\u{fd35}"
        case .workflowDeploymentsLight: return "\u{fd36}"
        case .workflowDeploymentsRegular: return "\u{fd37}"
        case .workphoneBold: return "\u{fd38}"
        case .workphoneLight: return "\u{fd39}"
        case .workphoneRegular: return "\u{fd3a}"
        case .zoomInBold: return "\u{fd3b}"
        case .zoomInLight: return "\u{fd3c}"
        case .zoomInRegular: return "\u{fd3d}"
        case .zoomOutBold: return "\u{fd3e}"
        case .zoomOutLight: return "\u{fd3f}"
        case .zoomOutRegular: return "\u{fd40}"

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
        case .activeInteractionBold: return "active-interaction-bold"
        case .activeInteractionFilled: return "active-interaction-filled"
        case .activeInteractionLight: return "active-interaction-light"
        case .activeInteractionRegular: return "active-interaction-regular"
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
        case .agentUniqueCodeFilled: return "agent-unique-code-filled"
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
        case .archiveBadgeFilled: return "archive-badge-filled"
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
        case .autoAnswerBold: return "auto-answer-bold"
        case .autoAnswerFilled: return "auto-answer-filled"
        case .autoAnswerLight: return "auto-answer-light"
        case .autoAnswerRegular: return "auto-answer-regular"
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
        case .booleanBold: return "boolean-bold"
        case .booleanFilled: return "boolean-filled"
        case .booleanLight: return "boolean-light"
        case .booleanRegular: return "boolean-regular"
        case .botBold: return "bot-bold"
        case .botCustomerAssistantBold: return "bot-customer-assistant-bold"
        case .botCustomerAssistantFilled: return "bot-customer-assistant-filled"
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
        case .brightnessAutoFilled: return "brightness-auto-filled"
        case .brightnessAutoLight: return "brightness-auto-light"
        case .brightnessAutoRegular: return "brightness-auto-regular"
        case .brightnessBold: return "brightness-bold"
        case .brightnessFilled: return "brightness-filled"
        case .brightnessHighBold: return "brightness-high-bold"
        case .brightnessHighFilled: return "brightness-high-filled"
        case .brightnessHighLight: return "brightness-high-light"
        case .brightnessHighRegular: return "brightness-high-regular"
        case .brightnessLight: return "brightness-light"
        case .brightnessLowBold: return "brightness-low-bold"
        case .brightnessLowFilled: return "brightness-low-filled"
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
        case .callMergeFilled: return "call-merge-filled"
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
        case .cancelFilled: return "cancel-filled"
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
        case .certifiedFilled: return "certified-filled"
        case .certifiedLight: return "certified-light"
        case .certifiedRegular: return "certified-regular"
        case .chPSearchBold: return "ch-p-search-bold"
        case .chPSearchLight: return "ch-p-search-light"
        case .chPSearchRegular: return "ch-p-search-regular"
        case .channelUssdBold: return "channel-ussd-bold"
        case .channelUssdFilled: return "channel-ussd-filled"
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
        case .checkFilled: return "check-filled"
        case .checkLight: return "check-light"
        case .checkRegular: return "check-regular"
        case .checkboxGroupBold: return "checkbox-group-bold"
        case .checkboxGroupFilled: return "checkbox-group-filled"
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
        case .colorAccessoriesBold: return "color-accessories-bold"
        case .colorAccessoriesFilled: return "color-accessories-filled"
        case .colorAccessoriesLight: return "color-accessories-light"
        case .colorAccessoriesRegular: return "color-accessories-regular"
        case .colorBold: return "color-bold"
        case .colorFilled: return "color-filled"
        case .colorLight: return "color-light"
        case .colorMeetingSummaryBold: return "color-meeting-summary-bold"
        case .colorMeetingSummaryFilled: return "color-meeting-summary-filled"
        case .colorMeetingSummaryLight: return "color-meeting-summary-light"
        case .colorMeetingSummaryRegular: return "color-meeting-summary-regular"
        case .colorPromptsAiBold: return "color-prompts-ai-bold"
        case .colorPromptsAiLight: return "color-prompts-ai-light"
        case .colorPromptsAiRegular: return "color-prompts-ai-regular"
        case .colorRegular: return "color-regular"
        case .colorScheduleAiBold: return "color-schedule-ai-bold"
        case .colorScheduleAiLight: return "color-schedule-ai-light"
        case .colorScheduleAiRegular: return "color-schedule-ai-regular"
        case .colorSearchAiBold: return "color-search-ai-bold"
        case .colorSearchAiLight: return "color-search-ai-light"
        case .colorSearchAiRegular: return "color-search-ai-regular"
        case .colorSendBold: return "color-send-bold"
        case .colorSendFilled: return "color-send-filled"
        case .colorSendLight: return "color-send-light"
        case .colorSendRegular: return "color-send-regular"
        case .colorSparkleBold: return "color-sparkle-bold"
        case .colorSparkleFilled: return "color-sparkle-filled"
        case .colorSparkleLight: return "color-sparkle-light"
        case .colorSparkleRegular: return "color-sparkle-regular"
        case .colorSummarizeAiBold: return "color-summarize-ai-bold"
        case .colorSummarizeAiLight: return "color-summarize-ai-light"
        case .colorSummarizeAiRegular: return "color-summarize-ai-regular"
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
        case .completedInteractionBold: return "completed-interaction-bold"
        case .completedInteractionFilled: return "completed-interaction-filled"
        case .completedInteractionLight: return "completed-interaction-light"
        case .completedInteractionRegular: return "completed-interaction-regular"
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
        case .customTaskBold: return "custom-task-bold"
        case .customTaskFilled: return "custom-task-filled"
        case .customTaskIndBold: return "custom-task-ind-bold"
        case .customTaskIndFilled: return "custom-task-ind-filled"
        case .customTaskIndLight: return "custom-task-ind-light"
        case .customTaskIndRegular: return "custom-task-ind-regular"
        case .customTaskLight: return "custom-task-light"
        case .customTaskRegular: return "custom-task-regular"
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
        case .devicesBold: return "devices-bold"
        case .devicesFilled: return "devices-filled"
        case .devicesLight: return "devices-light"
        case .devicesRegular: return "devices-regular"
        case .diagnosticsBold: return "diagnostics-bold"
        case .diagnosticsLight: return "diagnostics-light"
        case .diagnosticsRegular: return "diagnostics-regular"
        case .dialpadBold: return "dialpad-bold"
        case .dialpadLight: return "dialpad-light"
        case .dialpadRegular: return "dialpad-regular"
        case .diamondBold: return "diamond-bold"
        case .diamondFilled: return "diamond-filled"
        case .diamondLight: return "diamond-light"
        case .diamondRegular: return "diamond-regular"
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
        case .divideBold: return "divide-bold"
        case .divideFilled: return "divide-filled"
        case .divideLight: return "divide-light"
        case .divideRegular: return "divide-regular"
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
        case .folderFilled: return "folder-filled"
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
        case .formulaBold: return "formula-bold"
        case .formulaFilled: return "formula-filled"
        case .formulaLight: return "formula-light"
        case .formulaRegular: return "formula-regular"
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
        case .headsetBluetoothBold: return "headset-bluetooth-bold"
        case .headsetBluetoothLight: return "headset-bluetooth-light"
        case .headsetBluetoothRegular: return "headset-bluetooth-regular"
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
        case .integerBold: return "integer-bold"
        case .integerFilled: return "integer-filled"
        case .integerLight: return "integer-light"
        case .integerRegular: return "integer-regular"
        case .integrationsBold: return "integrations-bold"
        case .integrationsFilled: return "integrations-filled"
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
        case .laserPointerCursorBlackLight: return "laser-pointer-cursor-black-light"
        case .laserPointerCursorBlueLight: return "laser-pointer-cursor-blue-light"
        case .laserPointerCursorGreenLight: return "laser-pointer-cursor-green-light"
        case .laserPointerCursorPurpleLight: return "laser-pointer-cursor-purple-light"
        case .laserPointerCursorRedLight: return "laser-pointer-cursor-red-light"
        case .laserPointerCursorWhiteLight: return "laser-pointer-cursor-white-light"
        case .laserPointerCursorYellowLight: return "laser-pointer-cursor-yellow-light"
        case .laserPointerFilled: return "laser-pointer-filled"
        case .laserPointerLight: return "laser-pointer-light"
        case .laserPointerRegular: return "laser-pointer-regular"
        case .launchBold: return "launch-bold"
        case .launchFilled: return "launch-filled"
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
        case .markAsUnreadFilled: return "mark-as-unread-filled"
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
        case .mcpBold: return "mcp-bold"
        case .mcpFilled: return "mcp-filled"
        case .mcpLight: return "mcp-light"
        case .mcpRegular: return "mcp-regular"
        case .mediaPlayerBold: return "media-player-bold"
        case .mediaPlayerLight: return "media-player-light"
        case .mediaPlayerRegular: return "media-player-regular"
        case .mediaQualityGoodBold: return "media-quality-good-bold"
        case .mediaQualityGoodFilled: return "media-quality-good-filled"
        case .mediaQualityGoodLight: return "media-quality-good-light"
        case .mediaQualityGoodRegular: return "media-quality-good-regular"
        case .mediaQualityPoorBold: return "media-quality-poor-bold"
        case .mediaQualityPoorColoredBold: return "media-quality-poor-colored-bold"
        case .mediaQualityPoorFilled: return "media-quality-poor-filled"
        case .mediaQualityPoorLight: return "media-quality-poor-light"
        case .mediaQualityPoorRegular: return "media-quality-poor-regular"
        case .mediaQualityUnstableBold: return "media-quality-unstable-bold"
        case .mediaQualityUnstableColoredBold: return "media-quality-unstable-colored-bold"
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
        case .mentionFilled: return "mention-filled"
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
        case .minusFilled: return "minus-filled"
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
        case .moveToBottomBold: return "move-to-bottom-bold"
        case .moveToBottomFilled: return "move-to-bottom-filled"
        case .moveToBottomLight: return "move-to-bottom-light"
        case .moveToBottomRegular: return "move-to-bottom-regular"
        case .moveToScreenBold: return "move-to-screen-bold"
        case .moveToScreenLight: return "move-to-screen-light"
        case .moveToScreenRegular: return "move-to-screen-regular"
        case .moveToTopBold: return "move-to-top-bold"
        case .moveToTopFilled: return "move-to-top-filled"
        case .moveToTopLight: return "move-to-top-light"
        case .moveToTopRegular: return "move-to-top-regular"
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
        case .networkSwitchBold: return "network-switch-bold"
        case .networkSwitchFilled: return "network-switch-filled"
        case .networkSwitchLight: return "network-switch-light"
        case .networkSwitchRegular: return "network-switch-regular"
        case .newManagerBold: return "new-manager-bold"
        case .newManagerFilled: return "new-manager-filled"
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
        case .noteFilled: return "note-filled"
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
        case .openInFolderFilled: return "open-in-folder-filled"
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
        case .parenthesisBold: return "parenthesis-bold"
        case .parenthesisFilled: return "parenthesis-filled"
        case .parenthesisLight: return "parenthesis-light"
        case .parenthesisRegular: return "parenthesis-regular"
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
        case .participantSpeakerBold: return "participant-speaker-bold"
        case .participantSpeakerFilled: return "participant-speaker-filled"
        case .participantSpeakerLight: return "participant-speaker-light"
        case .participantSpeakerRegular: return "participant-speaker-regular"
        case .participantUnknownBold: return "participant-unknown-bold"
        case .participantUnknownLight: return "participant-unknown-light"
        case .participantUnknownRegular: return "participant-unknown-regular"
        case .passMouseBold: return "pass-mouse-bold"
        case .passMouseLight: return "pass-mouse-light"
        case .passMouseRegular: return "pass-mouse-regular"
        case .pauseBadgeFilled: return "pause-badge-filled"
        case .pauseBold: return "pause-bold"
        case .pauseFilled: return "pause-filled"
        case .pauseInteractionBold: return "pause-interaction-bold"
        case .pauseInteractionFilled: return "pause-interaction-filled"
        case .pauseInteractionLight: return "pause-interaction-light"
        case .pauseInteractionRegular: return "pause-interaction-regular"
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
        case .peopleManageBold: return "people-manage-bold"
        case .peopleManageFilled: return "people-manage-filled"
        case .peopleManageLight: return "people-manage-light"
        case .peopleManageRegular: return "people-manage-regular"
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
        case .primaryParticipantFilled: return "primary-participant-filled"
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
        case .promptsAiBold: return "prompts-ai-bold"
        case .promptsAiLight: return "prompts-ai-light"
        case .promptsAiRegular: return "prompts-ai-regular"
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
        case .purchaseOrderBold: return "purchase-order-bold"
        case .purchaseOrderFilled: return "purchase-order-filled"
        case .purchaseOrderLight: return "purchase-order-light"
        case .purchaseOrderRegular: return "purchase-order-regular"
        case .qABold: return "q-a-bold"
        case .qAFilled: return "q-a-filled"
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
        case .queuedInteractionBold: return "queued-interaction-bold"
        case .queuedInteractionFilled: return "queued-interaction-filled"
        case .queuedInteractionLight: return "queued-interaction-light"
        case .queuedInteractionRegular: return "queued-interaction-regular"
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
        case .replyListFilled: return "reply-list-filled"
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
        case .resumeInteractionBold: return "resume-interaction-bold"
        case .resumeInteractionFilled: return "resume-interaction-filled"
        case .resumeInteractionLight: return "resume-interaction-light"
        case .resumeInteractionRegular: return "resume-interaction-regular"
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
        case .rulerBold: return "ruler-bold"
        case .rulerFilled: return "ruler-filled"
        case .rulerLight: return "ruler-light"
        case .rulerRegular: return "ruler-regular"
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
        case .scheduleAiBold: return "schedule-ai-bold"
        case .scheduleAiLight: return "schedule-ai-light"
        case .scheduleAiRegular: return "schedule-ai-regular"
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
        case .searchAiBold: return "search-ai-bold"
        case .searchAiLight: return "search-ai-light"
        case .searchAiRegular: return "search-ai-regular"
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
        case .sidePanelBold: return "side-panel-bold"
        case .sidePanelFilled: return "side-panel-filled"
        case .sidePanelLight: return "side-panel-light"
        case .sidePanelRegular: return "side-panel-regular"
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
        case .smsMessageOutgoingBold: return "sms-message-outgoing-bold"
        case .smsMessageOutgoingFilled: return "sms-message-outgoing-filled"
        case .smsMessageOutgoingLight: return "sms-message-outgoing-light"
        case .smsMessageOutgoingRegular: return "sms-message-outgoing-regular"
        case .smsMessageRegular: return "sms-message-regular"
        case .smsMessageStartBold: return "sms-message-start-bold"
        case .smsMessageStartFilled: return "sms-message-start-filled"
        case .smsMessageStartLight: return "sms-message-start-light"
        case .smsMessageStartRegular: return "sms-message-start-regular"
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
        case .summarizeAiBold: return "summarize-ai-bold"
        case .summarizeAiLight: return "summarize-ai-light"
        case .summarizeAiRegular: return "summarize-ai-regular"
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
        case .tableExtenderBold: return "table-extender-bold"
        case .tableExtenderFilled: return "table-extender-filled"
        case .tableExtenderLight: return "table-extender-light"
        case .tableExtenderRegular: return "table-extender-regular"
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
        case .timezoneBold: return "timezone-bold"
        case .timezoneFilled: return "timezone-filled"
        case .timezoneLight: return "timezone-light"
        case .timezoneRegular: return "timezone-regular"
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
        case .videoLayoutCustomBold: return "video-layout-custom-bold"
        case .videoLayoutCustomFilled: return "video-layout-custom-filled"
        case .videoLayoutCustomLight: return "video-layout-custom-light"
        case .videoLayoutCustomRegular: return "video-layout-custom-regular"
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
        case .videoLayoutPresentationBold: return "video-layout-presentation-bold"
        case .videoLayoutPresentationFilled: return "video-layout-presentation-filled"
        case .videoLayoutPresentationLight: return "video-layout-presentation-light"
        case .videoLayoutPresentationRegular: return "video-layout-presentation-regular"
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
        case .videoLayoutSpeakerBold: return "video-layout-speaker-bold"
        case .videoLayoutSpeakerFilled: return "video-layout-speaker-filled"
        case .videoLayoutSpeakerLight: return "video-layout-speaker-light"
        case .videoLayoutSpeakerRegular: return "video-layout-speaker-regular"
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
        case .webexHelixBold: return "webex-helix-bold"
        case .webexHelixLight: return "webex-helix-light"
        case .webexHelixRegular: return "webex-helix-regular"
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
        case .webhookBold: return "webhook-bold"
        case .webhookLight: return "webhook-light"
        case .webhookRegular: return "webhook-regular"
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