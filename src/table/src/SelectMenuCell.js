import React, { memo, useState, useEffect, useCallback, useMemo, useRef } from 'react'
import debounce from 'lodash.debounce'
import PropTypes from 'prop-types'
import { CaretDownIcon } from '../../icons'
import { SelectMenu } from '../../select-menu'
import TableCell from './TableCell'
import TextTableCell from './TextTableCell'

const MIN_SELECT_MENU_WIDTH = 240
const emptyProps = {}

const SelectMenuCell = memo(function SelectMenuCell(props) {
  const [targetWidth, setTargetWidth] = useState(MIN_SELECT_MENU_WIDTH)
  const [shouldClickToggle, setShouldClickToggle] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const mainRef = useRef(null)

  const {
    children,
    size = 300,
    selectMenuProps,
    disabled,
    placeholder,
    isSelectable = true,
    textProps = emptyProps,
    ...rest
  } = props

  const updateOnResize = useCallback(() => {
    if (!mainRef.current) return
    const mainRefWidth = mainRef.current.offsetWidth
    setTargetWidth(Math.max(MIN_SELECT_MENU_WIDTH, mainRefWidth))
  }, [])

  const onResize = useMemo(() => debounce(updateOnResize, 200), [updateOnResize])

  useEffect(() => {
    updateOnResize()
    window.addEventListener('resize', onResize, false)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [updateOnResize, onResize])

  const onMainRef = useCallback((getRef, ref) => {
    mainRef.current = ref
    getRef(ref)
  }, [])

  // TODO consider `useClickable`
  const handleKeyDown = (toggle, isShown, e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()

      if (!isShown && isSelectable && !disabled) {
        toggle()
      }
    }
  }

  const handleDoubleClick = (toggle, isShown) => {
    if (!isShown && isSelectable && !disabled) {
      toggle()
    }
  }

  const handleClick = (toggle, isShown) => {
    if (!shouldClickToggle && !isShown) {
      setShouldClickToggle(true)
      return
    }

    if (isSelectable && !disabled) {
      toggle()
      setShouldClickToggle(true)
    }
  }

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setShouldClickToggle(false)
    setIsFocused(false)
  }, [])

  const mergedTextProps = useMemo(
    () => ({
      size,
      opacity: disabled || (!children && placeholder) ? 0.5 : 1,
      ...textProps
    }),
    [size, disabled, children, placeholder, textProps]
  )

  let cursor = 'default'
  if (disabled) {
    cursor = 'not-allowed'
  } else if (isSelectable) {
    if (isFocused) {
      cursor = 'pointer'
    } else {
      cursor = 'default'
    }
  } else {
    cursor = 'text'
  }

  return (
    <SelectMenu width={targetWidth} {...selectMenuProps}>
      {({ getRef, isShown, toggle }) => {
        return (
          <TextTableCell
            ref={onMainRef.bind(null, getRef)}
            onClick={handleClick.bind(null, toggle, isShown)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            isSelectable={isSelectable && !disabled}
            rightView={isSelectable ? <CaretDownIcon color="muted" /> : null}
            aria-haspopup
            aria-expanded={isShown}
            cursor={isShown ? 'pointer' : cursor}
            textProps={mergedTextProps}
            onKeyDown={handleKeyDown.bind(null, toggle, isShown)}
            onDoubleClick={handleDoubleClick.bind(null, toggle, isShown)}
            {...rest}
          >
            {children || placeholder}
          </TextTableCell>
        )
      }}
    </SelectMenu>
  )
})

SelectMenuCell.propTypes = {
  /**
   * Composes the TableCell component as the base.
   */
  ...TableCell.propTypes,

  /*
   * Makes the TableCell focusable.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable: PropTypes.bool,

  /**
   * When true, the cell can't be edited.
   */
  disabled: PropTypes.bool,

  /**
   * Optional placeholder when children is falsy.
   */
  placeholder: PropTypes.node,

  /**
   * The size used for the TextTableCell and Textarea.
   */
  size: PropTypes.oneOf([300, 400]),

  selectMenuProps: PropTypes.object
}

export default SelectMenuCell
